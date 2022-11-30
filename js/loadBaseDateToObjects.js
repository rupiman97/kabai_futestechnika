function maximumSizeOfFadingPicture() {
    let val = document.getElementById("fadingpicture");
    let val2 = document.getElementById("loadSyncIcon");
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let scaleRatio = Math.min(screenWidth/val.clientWidth, screenHeight/val.clientHeight);
    console.log(scaleRatio);
    //val.style.scale = scaleRatio;
    val2.style.marginTop = screenHeight/2 -50 + "px";
    val2.style.visibility = 'visible';
}