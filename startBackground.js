window.onscroll = function() {setBackgroundImageSize()};
window.onload = function() {setBackgroundImageSize()};
window.onresize = function() {setBackgroundImageSize()};

function setBackgroundImageSize() {
    console.log("beleptem");
    let screenWidth = window.innerWidth;
    let val = document.getElementById("startingDistanceID");
    val.style.marginTop = screenWidth/2.3 + "px";
}