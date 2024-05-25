document.getElementById('moodQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    // Loop through each question and calculate score
    for (let i = 1; i <= 7; i++) {
        const answer = document.querySelector(`input[name="question${i}"]:checked`);
        if (answer) {
            score += parseInt(answer.value);
        }
    }
    document.getElementById('score').textContent = score;
    // Determine the mood based on the score
    let mood = '';
    if (score >= 20) {
        mood = 'Very Happy 😀';
    } else if (score >= 10) {
        mood = 'Happy 😊';
    } else if (score >= 0) {
        mood = 'Neutral 🙂';
    } else if (score >= -10) {
        mood = 'Sad 😔';
    } else {
        mood = 'Very Sad 😞';
    }
    document.getElementById('mood').textContent = mood;
    // Show the result section
    document.getElementById('result').style.display = 'block';
    // Reset the form
    document.getElementById('moodQuiz').reset();
});
function closeForm() {
    document.getElementById("moodQuiz").style.display = "none";
  }