var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log("Randomly Generated Color: " + gamePattern);

    $("#" + randomChosenColor)
        .animate({ opacity: 0.2 }, 100)
        .animate({ opacity: 1.0 }, 100);

    playSound(randomChosenColor);

    level++;
}

$(".btn").on("click", function (event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    console.log("Click Generated userClickedPattern Array: [" + userClickedPattern + "]");
    playSound(userChosenColour);
    animatePress(userChosenColour)
});

var level = 0;

$("body").on("keypress", function () {
    nextSequence();
    $("h1").text("Level " + level + ".");
})

//Might be an issue here. The value of randomChosenColor doesn't change after reload. So multiple values are not being stored in gamePattern.
// Maybe this code should be a part of nextSequece(). 
// Just saw the comment on udemy. Indeed it should be inside the function. Added.

function playSound(name) {
    var buttonAudio = new Audio("sounds/" + name + ".mp3");
    buttonAudio.play();
    console.log(buttonAudio);
};

function animatePress(currentColor) {
    $(".btn").on("click", function (event) {
        var userClickedButton = event.target.id;
        $("#" + userClickedButton).addClass("pressed", 1000);
        setTimeout(function () {
            $("#" + userClickedButton).removeClass("pressed");
        }, 100);
    })
};