window.onload = function () {
    setBackgroundImageSize();
    maximumSizeOfFadingPicture();
    imageToSameSizeToScreenById("fadingpicture");
};
window.onscroll = function () {
    setBackgroundImageSize();
    setSticky();
};
window.onresize = function () {
    setBackgroundImageSize();
    maximumSizeOfFadingPicture();
    imageToSameSizeToScreenById("fadingpicture");
};

function setBackgroundImageSize() {
    let screenWidth = window.innerWidth;
    let val = document.getElementById("startingDistanceID");
    val.style.marginTop = screenWidth / 2.3 + "px";
}