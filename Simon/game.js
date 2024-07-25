var buttonColors = ["red","blue","green","yellow"];

function nextSequence(){
    var randomNumber = Math.floor((Math.random())*4);
    return randomNumber;
};

var randomChosenColor = {
    chosenColor : function(){
        switch(nextSequence()){
            case 0:
                var currentlyChosenColor = buttonColors[0];
            break;

            case 1:
                var currentlyChosenColor = buttonColors[1];
            break;

            case 2:
                var currentlyChosenColor = buttonColors[2];
            break;

            case 3:
                var currentlyChosenColor = buttonColors[3];
            break;

            default:
                alert("Error in the switch statement." + nextSequence());
        };
        return currentlyChosenColor;
    }
};