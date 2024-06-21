
for(i=0 ; i < document.getElementsByClassName("drum").length  ; i++){
document.getElementsByClassName("drum")[i].addEventListener("click", function(){
    alert("I got clicked!");
});
}