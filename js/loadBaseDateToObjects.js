function maximumSizeOfFadingPicture() {
    let val = document.getElementById("fadingpicture");
    let val2 = document.getElementById("loadSyncIcon");
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let topPercent = (screenHeight - val2.clientHeight)/2/screenHeight*100 + "%";
    let leftPercent = (screenWidth - val2.clientWidth)/2/screenWidth*100 + "%";
    console.log("topPercent: " + topPercent);
    console.log("leftPercent: " + leftPercent)
    val2.style.left = leftPercent;
    val2.style.top = topPercent;
    val2.style.visibility = 'visible';
}

function imageToSameSizeToScreenById(id){
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let element = document.getElementById(id);
    element.style.width = screenWidth + "px";
    element.style.height = screenHeight + "px";
}