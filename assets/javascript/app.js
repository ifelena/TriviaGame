
// When document loads, timer launches as game begins, 

$(document).ready(function(){
    $("button").click(function(){
        function counter();
        onload = start();
    });
});



var arrayLength = allQuestions.length;



// Use a for loop to iterate over the array of questions
for (var i = 0; i < allQuestions.length; i++) {

}




// Trivia Questions, Add buttons to answer choices
var allQuestions input type="radio" value="questions[i].answerChoices[j]" = [{
	question: 'Which American inventor is generally given credit for the invention of the lightning rod?',
	choices: ['Benjamin Franklin', 'Nikola Tesla', 'Grace Hopper', 'Henry Ford'],
	correctAnswer: 0
},
{
	question: 'Jimmy Carter was the first U.S. president born in a what?'
	choices: ['Boat', 'Park', 'Hospital', 'Theater'],
	correctAnswer: 2
},
{
	question: 'In 1867 the United States purchased Alaska from what country?'
	choices: ['Canada', 'Japan', 'Spain', 'Russia'],
	correctAnswer: 3
},
{
	question:
	choices: [ ]
	correctAnswer: 
},
{
	question:
	choices: [ ]
	correctAnswer: 
},
// Add variable names for correct, incorrect, and unanswered questions
var selectedAswer;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;

//If answer is correct add 1 to correctAnswers variable




if (selectedAnswer === correctAnswer; correctAnswers++) {	
} else if {
selectedAnswer === incorrectAnswer; incorrectAnswers++;
} else {
unansweredQuestions;
};


var gameCounter = 30;

function counter() {
     if(gameCounter === 0 ) {
       $("#gameCounter").html("Time Remaining:" + timer);
       clearInterval(timerInterval);
     } else {
        timer = timer -1;
        $("#timer").text(timer);
     }
      
    }
    // when the start button is clicked game starts
    // and the time starts down
     $(".startButton").click(function(timer) {
        
         // timer 
         var startButton = $("#timer").html(gameCounter);
         var timerInterval = setInterval(gameCounter, 1000);


function counter() {
  document.getElementById('gameCounter').innerHTML = i;
  i--;
  if (i < 0) {
    function();
  }
  else {
    setTimeout(onTimer, 1000);
  }
}
//

//End Game
// When counter is finished, display correct, incorrect, and unanswered questions 
if (counter === 0) {
	$('#correctAnswers').append('Correct: ' + correctAnswers);
	$('#incorrectAnswers').append('Incorrect: ' + incorrectAnswers);
	$('#unansweredQuestions').append('Unanaswered: ' + unansweredQuestions);
};





