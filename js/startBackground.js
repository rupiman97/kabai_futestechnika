window.onload = function () {
    setBackgroundImageSize();
    maximumSizeOfFadingPicture();
};
window.onscroll = function () {
    setBackgroundImageSize();
    setSticky();
};
window.onresize = function () {
    setBackgroundImageSize();
    maximumSizeOfFadingPicture();
};

function setBackgroundImageSize() {
    let screenWidth = window.innerWidth;
    let val = document.getElementById("startingDistanceID");
    val.style.marginTop = screenWidth / 2.3 + "px";
}