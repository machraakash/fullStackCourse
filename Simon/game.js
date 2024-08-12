var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    userClickedPattern = [];
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
    console.log(checkAnswer(userClickedPattern.length));
});

var level = 0;

$("body").on("keypress", function () {
    nextSequence();
    $("h1").text("Level " + level + ".");
})

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

function checkAnswer(currentLevel) {
    if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]){
        console.log("Correct click.");
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
            console.log("Resetting game...");
        }
        else{
            console.log("Keep clicking.");
        }
    }
    else{
        console.log("Incorrect");
        nextSequence();

    }
};