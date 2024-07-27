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
    
$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    var buttonAudio = new Audio("sounds/" + userChosenColour + ".mp3");
    buttonAudio.play();
    console.log(buttonAudio);
});

function playSound(name){

};