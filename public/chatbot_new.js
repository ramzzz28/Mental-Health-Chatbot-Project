//Applications type(scenario)
//1.let user start convo
//2.Chatbot start convo

//elements
var sendBtn=document.getElementById('sendBtn');
var textbox=document.getElementById('textbox');
var chatContainer=document.getElementById('chatContainer');
var user={message:"",counter:0};

var arrayOfPossibleMessage=[
    {"message":"how are you?","response":"I'm great"},
    {"message":"hii","response":"Hi!😄"},
    {"message":"who are you?","response":"I'm your virtual friend"},
    {"message":"how are you?","response":"I'm great🤗"},
    {"message":"how old are you?","response":"I dont have any age."},
    {"message":"what is mental health","response":"Mental and physical health are equally important components of overall health.  For example, depression increases the risk for many types of physical health problems, particularly long-lasting conditions like diabetes, heart disease, and stroke. Similarly, the presence of chronic conditions can increase the risk for mental illness."},
    {"message":"what is your name","response":"My name is AURACLE."},
    {"message":"good morning","response":"Good morning!"},
    {"message":"good night","response":"Good night!"},
    {"message":"good evening","response":"Good evening!"},
    {"message":"goodbye","response":"See you later!✌️"},
    {"message":"what is your favourite food?","response":"I don't eat anything."},
    {"message":"what should I eat today","response":"What you like most : Indian,Chinese or any other cusine?"},
    {"message":"can you help me","response":"Yes sure, What you want me to help you with?"},
    {"message":"where do you live","response":"In web"},
    {"message":"can you recommend any good book","response":"Yes, Tell me what kind of book you want(Comedy,Romatic,Thriller,etc)"},
    {"message":"i have been feeling overwhelmed lately","response":"It sounds like you're carrying a lot on your plate. Would you like to talk about what's causing you to feel overwhelmed?"},
    {"message":"i am not sure what's wrong, but I just feel down","response":"I'm sorry to hear you're feeling down. Would you like to share what might be contributing to those feelings?"},
    {"message":"i am having trouble sleeping and concentrating","response":"Is there anything specific causing these issues, or have you noticed any patterns?  there are several types of breathing techniques that may help you feel calmer and more relaxed :<br>4-2-8-2 breathing technique,  box breathing  ,  Anulom Vilom , Resonant breathing"},
    {"message":"i keep arguing with my loved ones","response":"It sounds like there might be some tension in your relationships. Would you like to explore some communication strategies?"},
    {"message":"can you tell me more about anxiety","response":"Absolutely! I can provide reliable information on anxiety (or specific condition). Is there anything specific you'd like to know?"},
    {"message":"i am feeling lonely","response":"You're not alone in feeling this way. Many people experience similar struggles."},
    {"message":"thnakyou","response":"Is there anything else I can help you with today?"},
    {"message":"mental health","response":"Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make healthy choices.1 Mental health is important at every stage of life, from childhood and adolescence through adulthood."},
    {"message":"can your mental health change over time","response":"Yes, it’s important to remember that a person’s mental health can change over time, depending on many factors.  When the demands placed on a person exceed their resources and coping abilities, their mental health could be impacted. For example, if someone is working long hours, caring for a relative, or experiencing economic hardship, they may experience poor mental health."},
    {"message":"what causes mental illness","response":"There is no single cause for mental illness. A number of factors can contribute to risk for mental illness, such as <br>Adverse Childhood Experiences, such as trauma or a history of abuse (for example, child abuse, sexual assault, witnessing violence, etc.) <br> Experiences related to other ongoing (chronic) medical conditions, such as cancer or diabetes <br>Biological factors or chemical imbalances in the brain <br>Use of alcohol or drugs <br> Having feelings of loneliness or isolation"},
    {"message":"how are you feeling today","response":"I'm just a chatbot, but I'm here to help you. How about you?"},
    {"message":"where you live","response":"In web"},
    {"message":"can you help me with my anxiety","response":" I can provide support and suggest coping strategies. Have you tried deep breathing exercises?"},
    {"message":"i am feeling really down lately","response":"I'm sorry to hear that. Would you like to talk about what's been bothering you?"},
    {"message":"how do I know if I have depression","response":"It's essential to consult a professional for a diagnosis. However, I can help you explore your feelings and provide resources."},
    {"message":"i can't seem to focus on anything","response":" It sounds like you're struggling with concentration. Have you tried mindfulness exercises?"},
    {"message":"what are some ways to cope with stress","response":"There are many techniques, such as deep breathing, exercise, and journaling. What works best for you?"},
    {"message":"i am thinking about hurting myself","response":"Your safety is essential. Please reach out to a trusted friend, family member, or professional for support immediately."},
    {"message":"how do I deal with intrusive thoughts","response":"Intrusive thoughts can be distressing. Have you tried mindfulness techniques to help you refocus?"},
    {"message":"i am feeling hopeless","response":" It's understandable to feel that way sometimes. Let's work together to find hope and purpose."},
    {"message":"how can I stop worrying so much","response":"Worrying is natural, but excessive worry can be overwhelming. Have you tried cognitive-behavioral techniques to challenge negative thoughts? If not then do read it on articles present on about page."},
    {"message":"what is mindfulness","response":"Mindfulness is the practice of being present in the moment without judgment. "},
    {"message":"how do I know if I need therapy","response":"Therapy can be beneficial for anyone struggling with mental health concerns. It might be helpful to explore therapy options with a professional."},
    {"message":"how can I manage my anger","response":"Anger management involves identifying triggers and finding healthy ways to express your emotions. Let's work on some coping strategies."},
    {"message":"what should I do if I'm having a panic attack","response":"Remember to breathe deeply and focus on calming your body."},
    {"message":"what are some ways to cope with stress","response":"There are many techniques, such as deep breathing, exercise, and journaling. What works best for you?"},
    {"message":"i am feeling disconnected from reality","response":"Feeling disconnected can be distressing. It's essential to discuss these feelings with a mental health professional to explore possible causes and solutions."},
    {"message":"how do I set boundaries with others","response":"Setting boundaries is crucial for maintaining healthy relationships. You can learn more about this on articles on HOME page"},
    {"message":"pstd","response":" PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event. It's essential to seek support from a professional if you're struggling with symptoms."},
    {"message":"what is post-traumatic stress disorder (PTSD)?","response":" PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event. It's essential to seek support from a professional if you're struggling with symptoms."},
    {"message":"how do I support a loved one with mental illness?","response":"Supporting a loved one with mental illness involves listening, offering empathy, and encouraging them to seek professional help if needed."},
    {"message":"i am feeling unmotivated.","response":"Motivation can be challenging, especially when you're feeling down. Let's explore ways to reignite your passion and drive."},
    {"message":"how do I deal with grief?","response":"Grief is a natural response to loss. It's essential to allow yourself to feel your emotions and seek support from others."},
    {"message":"social anxiety","response":"Social anxiety is a mental health condition characterized by an intense fear of social situations."},
    {"message":"what is social anxiety?","response":"Social anxiety is a mental health condition characterized by an intense fear of social situations. Would you like to discuss coping strategies?"},
    {"message":"how do I manage my time better?","response":" Time management skills can help reduce stress and improve productivity. Let's explore techniques to help you manage your time more effectively."},
    {"message":"addiction","response":"Addiction is a complex issue, but help is available. It's essential to reach out to a professional for support and guidance on the road to recovery."},
    {"message":"i am struggling with addiction.","response":"Addiction is a complex issue, but help is available. It's essential to reach out to a professional for support and guidance on the road to recovery."},
    {"message":"i am feeling stuck in life.","response":"Feeling stuck is challenging, but it's possible to create positive change. Let's brainstorm ways to move forward."},
    {"message":"how do I improve my communication skills?","response":"Effective communication is key to healthy relationships. Let's practice active listening and assertiveness together."},
    {"message":"what is imposter syndrome?","response":"Imposter syndrome is a phenomenon where individuals doubt their accomplishments and fear being exposed as a fraud. Let's explore ways to challenge these feelings of inadequacy."},
    {"message":"how do I deal with procrastination?","response":"Procrastination is common, but it can be overcome with strategies like breaking tasks into smaller steps and setting deadlines. Let's create a plan together."},
    {"message":"how do I build resilience?","response":"Resilience involves adapting to adversity and bouncing back from challenges. Let's explore ways to strengthen your resilience."},
    {"message":"i am feeling overwhelmed by my emotions","response":"Emotions can be intense, but it's essential to acknowledge and validate them. Would you like to practice emotional regulation techniques?"},
    {"message":"how do I cope with change?","response":"Change can be difficult, but it's also an opportunity for growth. Let's explore strategies to help you navigate transitions more effectively."},
    {"message":"what is self-care?","response":"Self-care involves taking intentional actions to prioritize your physical, emotional, and mental well-being. Let's brainstorm self"},
    {"message":"i am having trouble sleeping.","response":"Sleep hygiene is crucial for good rest. Have you tried establishing a bedtime routine?"},
    {"message":"how can I improve my self-esteem?","response":"Self-esteem can be cultivated through positive self-talk and setting realistic goals. Let's explore ways to boost your confidence."},
    {"message":"i am feeling overwhelmed.","response":"It's okay to feel overwhelmed sometimes. Would you like to break down what's causing you stress?"},
    {"message":"tell me a joke","response":"What’s the difference between the psychiatrists and the patients at the mental hospital?<br> The patients are the ones that eventually get better and go home!"},
    {"message":"what is Depression","response":"Depression is a mental health disorder characterized by persistent feelings of sadness, loss of interest or pleasure in activities, changes in appetite or weight, sleep disturbances, fatigue, feelings of worthlessness or guilt, difficulty concentrating, and thoughts of death or suicide. It can significantly impact daily functioning and overall quality of life. Treatment often involves therapy, medication, lifestyle changes, and support from healthcare professionals and loved ones. <br> What you want to know more about dipression:<br>1.Symptoms of depression<br>2.Prevention of symptoms "},
    {"message":"symptoms of depression","response":"include persistent feelings of sadness, loss of interest or pleasure in activities, changes in appetite or weight, sleep disturbances, fatigue, difficulty concentrating, feelings of worthlessness or guilt, and thoughts of death or suicide. These symptoms can vary in intensity and duration, impacting daily functioning and overall well-being."},
    {"message":"preventing depression","response":"involves maintaining a healthy lifestyle, seeking social support, managing stress effectively, and addressing underlying issues such as trauma or substance abuse. Treatment typically includes therapy, medication, lifestyle changes, and support from healthcare professionals and loved ones. Early intervention, holistic approaches, and ongoing support are key to managing depression effectively."},
    {"message":"bipolar disorder","response":"Bipolar disorder is a mental health condition characterized by extreme mood swings between mania or hypomania (elevated mood) and depression (low mood).<br> What you want to know more about dipression:<br>1.Symptoms of disorder<br>2.Prevention of bipolar disorder"},
    {"message":"symptoms of bipolar disorder","response":"include mood swings between mania or hypomania (elevated mood) and depression (low mood), changes in energy levels, irritability, impulsivity, and difficulty concentrating."},
    {"message":"preventing bipolar disorder","response":"involves managing stress, maintaining a healthy lifestyle, and avoiding substance abuse. Treatment includes mood stabilizers, therapy, and support from healthcare professionals and loved ones. Early intervention and adherence to treatment are key for managing symptoms and promoting stability."},
    {"message":"eATING DISORDER","response":"An eating disorder is a mental health condition marked by abnormal eating habits impacting physical and mental well-being. Types include anorexia nervosa (calorie restriction, fear of weight gain), bulimia nervosa (binge eating followed by purging), and binge eating disorder (compulsive overeating without purging). They can lead to severe health complications and require comprehensive treatment, including therapy, nutritional counseling, and medical monitoring."},
    {"message":"symptoms of eating disorders","response":"include distorted body image, obsessive thoughts about food, weight, and shape, restrictive eating patterns, binge eating, purging behaviors such as vomiting or laxative abuse, and significant changes in weight."},
    {"message":"preventing eating disorders","response":"involves promoting positive body image, healthy eating habits, and addressing risk factors such as societal pressure and low self-esteem. Treatment includes therapy (such as cognitive-behavioral therapy), nutritional counseling, medical monitoring, and support groups to address underlying issues and promote recovery."},
    {"message":"SUBSTANCE ABUSE AND ADDICTION","response":"Substance abuse involves the harmful or excessive use of drugs or alcohol, leading to negative consequences. Addiction is a chronic condition characterized by compulsive drug seeking and use despite harmful effects. While substance abuse refers to the behavior of misusing substances, addiction involves a complex disorder where individuals can&#39;t control their drug use, leading to physical and psychological dependence."},
    {"message":"symptoms of abuse and addiction","response":"Substance abuse involves excessive or harmful use of drugs or alcohol, leading to negative consequences like neglecting responsibilities or engaging in risky behavior. Addiction, a chronic condition, includes symptoms like loss of control over substance use, craving, and continued use despite knowing its harm."},
    {"message":"Prevention of substance abuse and addiction","response":"involves education, early intervention, building resilience, support networks, regulation, and community involvement. Treatment includes behavioral therapy, medication-assisted treatment, support groups, and rehabilitation programs to address physical, psychological, and social aspects of addiction. Early detection and intervention are crucial for successful outcomes in both prevention and treatment efforts."},
    {"message":"what is anxiety","response":"Anxiety is a persistent feeling of worry, fear, or apprehension about future events or situations, often accompanied by physical symptoms like restlessness, rapid heartbeat, and sweating. It can interfere with daily life and impact mental and physical well-being."},
    {"message":"symptoms of anxiety","response":"include persistent worry, fear, or apprehension, accompanied by physical symptoms like restlessness, rapid heartbeat, sweating, trembling, and difficulty concentrating. These symptoms can interfere with daily life and cause distress."},
    {"message":"preventing anxiety","response":"involves stress management techniques, maintaining a healthy lifestyle, seeking support, and addressing underlying issues. Treatment options include therapy (such as cognitive-behavioral therapy), medication, relaxation techniques, and lifestyle changes. Early intervention and a holistic approach are key to effectively managing anxiety."},
    {"message":"can you tell about trauma","response":"Trauma refers to distressing or disturbing experiences that overwhelm an individual&#39;s ability to cope. It can lead to emotional and psychological harm, impacting mental health and well-being. Trauma can result from various events, such as accidents, abuse, natural disasters, or violence, and may manifest in symptoms like anxiety, depression, and post-traumatic stress disorder (PTSD). Treatment often involves therapy to address trauma-related symptoms and promote healing and recovery."},
    {"message":"symptoms of trauma","response":"It can vary widely but often include emotional distress, flashbacks, nightmares, difficulty sleeping, hypervigilance, avoidance of reminders of the traumatic event, mood swings, and physical symptoms like headaches or stomachaches. Trauma can also lead to feelings of numbness, detachment, or guilt. These symptoms can significantly impact daily functioning and overall well-being."},
    {"message":"prevention of trauma","response":"It involves creating safe environments, addressing risk factors such as violence or abuse, and promoting resilience through support networks and coping skills. Treatment for trauma typically involves therapy, such as cognitive-behavioral therapy (CBT) or eye movement desensitization and reprocessing (EMDR), to process the traumatic experience, reduce symptoms, and improve coping mechanisms. Supportive interventions, medication, and holistic approaches may also be beneficial in facilitating healing and recovery from trauma."},
    {"message":"what is stress","response":"Stress is the body&#39;s natural response to demands or challenges, triggering physical and emotional reactions. It can be caused by various factors, including work, relationships, or life events. While some stress is normal and can be motivating, chronic or excessive stress can negatively impact mental and physical well-being. Effective stress management techniques, such as relaxation, exercise."},
    {"message":"symptoms of stress","response":"can manifest as physical, emotional, or behavioral changes, including headaches, muscle tension, fatigue, irritability, anxiety, difficulty concentrating, changes in appetite or sleep patterns, and increased use of alcohol or drugs. These symptoms can vary in intensity and duration, impacting overall well-being and daily functioningand  management, can help mitigate its effects."},
    {"message":"prevention of stress","response":"Preventing stress involves healthy lifestyle habits, effective time management, setting boundaries, and seeking social support. Treatment for stress includes relaxation techniques, exercise, therapy, and stress management programs. Identifying and addressing underlying causes of stress, developing coping skills, and fostering resilience are key components of prevention and treatment."},
];

var questionsToAsk=[
    {"question":"Hii!","answer":""},
    {"question":"What is your name?","answer":""},
    {"question":"How old are you","answer":""},
    {"question":"What do you like?","answer":""},
    {"question":"Did you sleep well?","answer":""},
    {"question":"How can I help you?","answer":""},
];

function askQuestions(){
    if(questionsToAsk.length>user.counter){
    setTimeout(function(){
        chatbotSendMessage(questionsToAsk[user.counter].question);
        user.counter++;
    },1000)
    console.log(questionsToAsk[user.counter-1]);
}
}

function chatbotSendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-75');
    messageElement.classList.add('float-start');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";
    messageElement.classList.add('border');
    messageElement.classList.add('font-weight-bold');
    messageElement.classList.add('rounded');
    messageElement.classList.add('border-danger-subtle');
    messageElement.style.backgroundColor="rgb(211, 123, 123)";
    messageElement.innerHTML="<span>Chatbot: </span>"+
    "<span style="+"margin-top:10px; padding:10px; "+">"+ messageText +"</span>";
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    chatContainer.appendChild(messageElement);
    //scroll to last message
    chatContainer.scrollTop=chatContainer.scrollHeight;
}

function sendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-75');
    messageElement.classList.add('float-end');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";
    messageElement.style.backgroundColor="rgb(245, 222, 222)";
    messageElement.classList.add('border');
    messageElement.classList.add('rounded');
    messageElement.classList.add('border-danger-subtle');
    messageElement.innerHTML="<span>You: </span>"+
    "<span style="+"margin-top:10px; padding:10px"+">"+ messageText +"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:900});
    
    chatContainer.appendChild(messageElement);
    
    //scroll to last message
    chatContainer.scrollTop=chatContainer.scrollHeight;
}

//let user start convo
function processMessage(){
    if(user.message.length>5)
   {
     //array of results
   var result= arrayOfPossibleMessage.filter(val=>val.message.includes(user.message.toLowerCase()));
   if(result.length>0){
            var response=result[0].response;
            setTimeout(function(){
            chatbotSendMessage(response);
            },1000)
        }
        else{
            setTimeout(function(){
                chatbotSendMessage("I didn't understand!");
                },1000)
        }
   }
   else if(user.message=="how" || user.message=="who" || user.message=="whom" || user.message=="what" || user.message=="where"){
    setTimeout(function(){
        chatbotSendMessage("Please clear what you want to ask 🤔");
        },1000)
   }
   else if(user.message=="hii" || user.message=="hello" || user.message=="Hey" ||user.message=="hi"|| user.message=="Hi"||user.message=="Hii"){
    setTimeout(function(){
        chatbotSendMessage("Hii!😄");
        },1000)
   }
   else if(user.message=="bye" || user.message=="goodbye"){
    setTimeout(function(){
        chatbotSendMessage("Bye!🙌");
        },1000)
   }
   else if(user.message=="bye" || user.message=="goodbye"){
    setTimeout(function(){
        chatbotSendMessage("I hope you have a positive day!");
        },1000)
   }
   else if(user.message=="see you later" || user.message=="goodbye"){
    setTimeout(function(){
        chatbotSendMessage("See you later!");
        },1000)
   }
   else{
    setTimeout(function(){
        chatbotSendMessage("Please send a complete sentence 😶‍🌫️");
        },1000)
   }
}

sendBtn.addEventListener('click',function(e){
    if(textbox.value==""){
        alert('Please type in a message.')
    }
    else{
    let messageText=textbox.value;
    user.message=messageText;
    sendMessage(messageText);
    textbox.value="";
    processMessage();
    }
});