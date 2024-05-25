var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


mongoose.connect('mongodb://localhost:27017/ChatbotData');
var db=mongoose.connection;
db.on('error',()=>console.log("Error in connection to database"));
db.once('open',()=>console.log("Connected to database"));

app.post("/signup",(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/; // Username should start with a letter, followed by alphanumeric characters
    var passwordRegex = /^\S*$/; // Password should not contain spaces
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Email should end with @gmail.com

    // Validation checks
    if (!name.match(nameRegex)) {
        return res.status(400).redirect('/name_error.html');
    }

    if (!password.match(passwordRegex)) {
        return res.status(400).redirect('/passworderror.html');
    }

    if (!email.match(emailRegex)) {
        return res.status(400).redirect('/emailerror.html');
    }

    var data = {
        "name": name,
        "email": email,
        "password": password
    };

    db.collection('user').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting record:", err);
            return res.status(500).send("An error occurred while creating the account.");
        }
        console.log("Record inserted");
        return res.redirect('index2.html');
    });
});


app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/passworderror",(req,res)=>{
    res.render("passworderror.html")
})
app.get("/emailerror",(req,res)=>{
    res.render("/emailerror.html")
})
app.get("/name_error",(req,res)=>{
    res.render("/name_error.html")
})

app.get("/index", (req,res)=>{
    res.redirect('index')
})
app.get("/chatbot",(req,res)=>{
    res.redirect('chatbot.html')
})
app.get("/about",(req,res)=>{
    res.redirect('about.html')
})
app.get("/sendmessage",(req,res)=>{
    res.redirect('sendmessage.html')
})
app.get("/index2",(req,res)=>{
    res.redirect('index2.html')
})
app.get("/forgot-password",(req,res)=>{
    res.redirect('forgot-password.html')
})
app.get("/errormessage",(req,res)=>{
    res.redirect('errormessage.html')
})

app.post("/login", async (req, res) => {
    try {
        const user = await db.collection('user').findOne({ name: req.body.name });

        console.log("User:", user); // Log the user object

        if (user) {
            console.log("User password:", user.password); // Log the user's password
            console.log("Provided password:", req.body.password); // Log the provided password

            // Check if the user's password is the temporary password
            if (user.password === req.body.password) {
                // Password matches temporary password, redirect to index2.html
                res.redirect('index2.html');
            } else {
                // Password does not match the temporary password, send error message
                res.send("Wrong password");
            }
        } else {
            // User not found in the database
            res.send("User not found");
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.status(500).send("Error occurred during login.");
    }
});


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('index.html')
}).listen(3000);


console.log("Listening on port 3000")

app.post("/forgot-password", async(req, res) => {
    try {
        const { email } = req.body;

        // Check if the provided email exists in the database
        const user = await db.collection('user').findOne({ email });

        if (user) {
            // Generate a temporary password (you can use a library like `crypto` to generate a secure random password)
            const temporaryPassword = generateTemporaryPassword();

            // Update the user's password to the temporary password
            await db.collection('user').updateOne({ email }, { $set: { password: temporaryPassword } });

            // Send the temporary password as response along with a message
            res.redirect(`/sendmessage.html?password=${temporaryPassword}`);
        } else {
            // If the provided email does not exist in the database, send an error response
            res.status(404).redirect('errormessage.html');
        }
    } catch (error) {
        console.error("Error occurred during password reset:", error);
        res.status(500).send("Error occurred during password reset.");
    }
});

// Function to generate a temporary password
function generateTemporaryPassword() {
    // Generate a random temporary password (you can customize the length and character set)
    const temporaryPassword = Math.random().toString(36).substring(2, 10);
    return temporaryPassword;
}