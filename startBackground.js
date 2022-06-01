window.onload = function() {setBackgroundImageSize()};
window.onscroll = function() {setBackgroundImageSize()};
window.onresize = function() {setBackgroundImageSize()};

function setBackgroundImageSize() {
    let screenWidth = window.innerWidth;
    let val = document.getElementById("startingDistanceID");
    val.style.marginTop = screenWidth/2.3 + "px";
    console.log("megvagyok");
}