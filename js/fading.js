document.body.style.overflow = 'hidden';

let val = document.getElementById("fadingpicture");
let val2 = document.getElementById("loadSyncIcon");
let faded = false;
let fadedStart = false;
let waitedForLoading = false;
let fadeCurrent = false;
let opacityValue = 1.0;
let allDone = false;

setInterval(() => {
    fading();
}, 50)

function fading() {
    if (!allDone) {
        if (!fadedStart && document.readyState === "complete") {
            setTimeout(() => {
                waitedForLoading = true;
                document.getElementById("webPageBody").style.visibility = "visible";
                //document.getElementById("webPageHead").style.visibility = "visible";

            }, 1000)
            fadedStart = true;
            
        }

        if (waitedForLoading && !fadeCurrent) {
            opacityValue = opacityValue - 0.1;
            fadeCurrent = true;
            fadeOutPicture(opacityValue);
        }
    }
}

function fadeOutPicture(opacityVal) {
    setTimeout(() => {
        val.style.opacity = opacityVal;
        val2.style.opacity = opacityVal;
        fadeCurrent = false;
    }, 50)
    if (opacityVal <= 0) {
        document.body.style.overflowY = 'visible';
        val.style.visibility = 'hidden';
        allDone = true;
    }
}