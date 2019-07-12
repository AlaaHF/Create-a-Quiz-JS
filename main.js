// Create a Quiz Assignment

// Global Variables
let score = 0;

// Event Listeners
document.getElementById('mark-btn').addEventListener('click', markQuiz);
document.getElementById('reset-btn').addEventListener('click', resetQuiz)

// Event Fuctions
function markQuiz () {
    let answer1 = document.getElementById('answer-q1').value;
    answer1 = answer1.toLowerCase();
    let answer2 = document.getElementById('answer-q2').value;
    answer2 = answer2.toLowerCase();
    let answer3 = document.getElementById('answer-q3').value;
    answer3 = answer3.toLowerCase();
    let answer4 = document.getElementById('answer-q4').value;
    answer4 = answer4.toLowerCase();

    document.getElementById('feedback1').style.visibility = 'visible';
    document.getElementById('feedback2').style.visibility = 'visible';
    document.getElementById('feedback3').style.visibility = 'visible';
    document.getElementById('feedback4').style.visibility = 'visible';
    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('thanks').style.visibility = 'visible';
    document.getElementById('comment').style.visibility = 'visible';

    if (answer1 == 'canada') {
        document.getElementById('feedback1').innerHTML = 'Correct!';
        document.getElementById('feedback1').style.color = 'lightgreen';
        document.getElementById('answer-q1').style.backgroundColor = 'lightgreen';
        score += 1;
    } else { 
        document.getElementById('feedback1').innerHTML = 'Incorrect';
        document.getElementById('feedback1').style.color = 'red';
        document.getElementById('answer-q1').style.backgroundColor = 'red';
        
    }

    if (answer2 == 'cardinal') {
        document.getElementById('feedback2').innerHTML = 'Correct!';
        document.getElementById('feedback2').style.color = 'lightgreen';
        document.getElementById('answer-q2').style.backgroundColor = 'lightgreen';
        score += 1;
    } else { 
        document.getElementById('feedback2').innerHTML = 'Incorrect';
        document.getElementById('feedback2').style.color = 'red';
        document.getElementById('answer-q2').style.backgroundColor = 'red';
        
    }

    if (answer3 == 'tai lung') {
        document.getElementById('feedback3').innerHTML = 'Correct!';
        document.getElementById('feedback3').style.color = 'lightgreen';
        document.getElementById('answer-q3').style.backgroundColor = 'lightgreen';
        score += 1;
    } else { 
        document.getElementById('feedback3').innerHTML = 'Incorrect';
        document.getElementById('feedback3').style.color = 'red';
        document.getElementById('answer-q3').style.backgroundColor = 'red';
        
    }

    if (answer4 == 'mr. bacque' || answer4 == 'mr. b' || answer4 == 'bacque') {
        document.getElementById('feedback4').innerHTML = 'Correct!';
        document.getElementById('feedback4').style.color = 'lightgreen';
        document.getElementById('answer-q4').style.backgroundColor = 'lightgreen';
        score += 1;
    } else { 
        document.getElementById('feedback4').innerHTML = 'Incorrect';
        document.getElementById('feedback4').style.color = 'red';
        document.getElementById('answer-q4').style.backgroundColor = 'red';
        
    }

    if (score < 0) {
        score = 0;
    }

    if (score == 4){
        document.getElementById('comment').innerHTML = 'Good job!';
    } else if (score >= 1){
        document.getElementById('comment').innerHTML = 'Better luck next time!';
    } else {
        document.getElementById('comment').innerHTML = 'Sorry. Please try again.'
    }

 
    // Display Mark
    document.getElementById('mark').innerHTML = score;
    document.getElementById('percentage'). innerHTML = (score / 4 * 100);
}

function resetQuiz() {
        // Question 1
        document.getElementById('feedback1').innerHTML = '';
        document.getElementById('feedback1').style.color = '';
        document.getElementById('answer-q1').style.backgroundColor = 'white';
        score = 0;

        // Question 2
        document.getElementById('feedback2').innerHTML = '';
        document.getElementById('feedback2').style.color = '';
        document.getElementById('answer-q2').style.backgroundColor = 'white';
        score = 0;

        // Question 3
        document.getElementById('feedback3').innerHTML = '';
        document.getElementById('feedback3').style.color = '';
        document.getElementById('answer-q3').style.backgroundColor = 'white';
        score = 0;

        // Question 4
        document.getElementById('feedback4').innerHTML = '';
        document.getElementById('feedback4').style.color = '';
        document.getElementById('answer-q4').style.backgroundColor = 'white';
        score = 0;

        // Results
        document.getElementById('result').style.visibility = 'hidden';
        document.getElementById('thanks').style.visibility = 'hidden';
        document.getElementById('comment').style.visibility = 'hidden';
}