// This didn't go anywhere, but feel free to play with it.
let box = document.getElementById("move-box");

let position = 1;
let positionStr = position + "px";
let speed = 5;


window.onkeydown = function(e) {

    
    position -= 5;
    box.style.margin = positionStr;
}