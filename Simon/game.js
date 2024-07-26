var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor)
  .animate({ opacity: 0.2 }, 100)
  .animate({ opacity: 1.0 }, 100);

// var buttonAudio = new Audio("sounds/blue.mp3");
// buttonAudio.play();

$(".btn").on("click", function (event) {
  var userChosenColour = '"' + event.target.id + '"';
//   console.log(userChosenColour);
userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});



console.log(userClickedPattern);
