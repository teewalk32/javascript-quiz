// Code notes

//  question code quiz, questions displayed dynamically
// when complete score is shown and redirect to highscores history

// function to start the quiz
// function to display questions and answers(loops, iterators)
// function to check correct answer
// end function to stop timer redirect to a new page

// Variables
// score, questions, question choices, question answers
// var score = num, var questions = [{}, {}] 
// question{ question: "",
//          answer: "",
// choices:["", "",]
//              }
// User is presented with a single question, user chooses an answer from radio buttons, answer is checked if correct 1 point is given score++
// Loop through the questions arr to append each question to the page
//  var iterator = 0; 
// for loop that appends choices to the page
// questions[0]
// questions[0].question
// inside a for loop
// questions[0].choices[i]
// if statement that checks for user input and compares to questions[0].answer if correct score++, iterator++, affect time
// validate answer if( $('#radio').is(':checked') ){
//  if incorrect subtract from the timer, iterator++
// Clear the page, append new question
// When all questions answered display a complete button(show form to enter initals an record score) store score in local storage
// redirect to highscores page read scores from local storage append to 


//  Timer
// var timeLeft = 90;
// setInterval(timeTick, 1000);
// function timeTick(){
//     timeLeft--;
//     timer.text = timeLeft

//     if(timeLeft <=0){
//         endQuiz();
//     }
// }


// function to generate quiz
function generateQuiz() {
    var quiz = [
        {
            // Questions choices and answers for the quiz
            question: "Commonly used data types don not include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "booleans"
        },
        {
            question: "In a condition in a if/else statement is enclosed with ___.",
            choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
            answer: "parenthesis"
        },
        {
            question: "Arrays in javaScript can be used to store ___.",
            choices: ["numbers and stricodengs", "other arrays", "booleans", "all the above"],
            answer: "all of the above"
        },
        {
            question: "String values must be enclosed within ____ being assigned to variables.",
            choices: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: "curly brackets"
        },
        {
            question: "A very useful tool in development and debugging for  printing content to the debugger is:",
            choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            answer: "for loops"
        },
        // Function to check answers
        function checkAnswer(selectedAnswer) {
            var feedbackElement = document.getElementById("feedback");
            var submitButton = document.getElementById("submit-answer");

            // If statement that strong equals the correct answer or answer incorrect
            if (selectedAnswer === "booleans") {
                feedbackElement.textContent = "Correct!";
                score++;
            } if (selectedAnswer === "parenthesis") {
                feedbackElement.textContent = "Correct!";
                score++;
            } if (selectedAnswer === "all of the above") {
                feedbackElement.textContent = "Correct!";
                score++;
            } if (selectedAnswer === "curly brackets") {
                feedbackElement.textContent = "Correct!";
                score++;
            } if (selectedAnswer === "for loops") {
                feedbackElement.textContent = "Correct!";
                score++;
            } else {
                feedbackElement.textContent = "Incorrect. The correct answer was " + answer + ".";

            }
            if (questionIndex < quiz.length) {
                displayQuestion();
            } else {
                displayScore();
            }
            quiz = generateQuiz();
            var startButton = document.getElementById("start-quiz");
            var quiz = 0;
            var score = 0;

            // click function to start quiz
            startButton.addEventListener("click", function () {
                quiz = generateQuiz();
                displayQuestion();
            });

            function displayQuestion() {
                questionElement = document.getElementById("question");
                choicesElement = document.getElementById("choices");
                submitButton = document.getElementById("submit-answer");
                feedbackElement = document.getElementById("feedback");
            }
            for (var i = 0; i < quiz[0].choices.length; i++) {
                var choice = quiz[0].choices[i];
                var button = document.createElement("button");
                button.textContent = choice;
                button.addEventListener("click", function (event) {
                    var selectedAnswer = event.target.textContent;
                    checkAnswer(selectedAnswer);

                });
                choicesElement.appendChild(button);

                feedbackElement.textcontent = "";
                submitButton.style.display = "block";
            }



        }




           

    ];
    return quiz

}
 