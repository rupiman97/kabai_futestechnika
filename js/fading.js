let val = document.getElementById("fadingpicture");
let faded = false;
if (!faded) {
    setTimeout(() => {
        fadeOutPicture();
        faded = true;
    }, 3000)
}

function fadeOutPicture() {
    let opacityValue = 1.0;
    while (opacityValue > 0) {
        opacityValue = opacityValue - 0.02;
        setTimeout(() => {
            val.style.opacity = opacityValue;
        }, 50)
        console.log(opacityValue);
    }
}