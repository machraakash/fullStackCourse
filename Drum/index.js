var audioW = new Audio('./sounds/tom-1.mp3');
var audioA = new Audio('./sounds/tom-2.mp3');
var audioS = new Audio('./sounds/crash.mp3');
var audioD = new Audio('./sounds/tom-4.mp3');
var audioJ = new Audio('./sounds/snare.mp3');
var audioK = new Audio('./sounds/kick-bass.mp3');
var audioL = new Audio('./sounds/tom-3.mp3');

document.getElementsByClassName("w")[0].addEventListener("click", function () { audioW.play() });
document.getElementsByClassName("a")[0].addEventListener("click", function () { audioA.play() });
document.getElementsByClassName("s")[0].addEventListener("click", function () { audioS.play() });
document.getElementsByClassName("d")[0].addEventListener("click", function () { audioD.play() });
document.getElementsByClassName("j")[0].addEventListener("click", function () { audioJ.play() });
document.getElementsByClassName("k")[0].addEventListener("click", function () { audioK.play() });
document.getElementsByClassName("l")[0].addEventListener("click", function () { audioL.play() });

function playSound(key) {
    switch (key) {
        case "w":
            audioW.play();
            break;
        case "a":
            audioA.play();
            break;
        case "s":
            audioS.play();
            break;
        case "d":
            audioD.play();
            break;
        case "j":
            audioJ.play();
            break;
        case "k":
            audioK.play();
            break;
        case "l":
            audioL.play();
            break;
        default:
            console.log(key);
    }
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    changeColor(event.key);
});

function changeColor(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("changeColor");
    setTimeout(function(){
        activeButton.classList.remove("changeColor");
    }, 100 );
}