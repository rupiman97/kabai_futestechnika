function enlargePicture(id){
    val = document.getElementById(id);
    let enlargedPicturesPresented = document.getElementsByClassName("onclickReferPicture");
    console.log(enlargedPicturesPresented.length);
    if(!val.classList.contains("onclickReferPicture") && enlargedPicturesPresented.length == 0){
        val.classList.add("onclickReferPicture");
        let screenWidth = window.innerWidth;
        let screenHeight = window.innerHeight;
        let leftPercent = (screenWidth - val.width)/2/screenWidth*100 + "%";
        console.log("leftPercent: " + leftPercent);
        let bottomPercent = (screenHeight - val.height)/2/screenWidth*100 + "%";
        console.log("bottomPercent: " + bottomPercent);
        val.style.left = leftPercent;
        val.style.bottom = bottomPercent;
    }
    else{
        val.classList.remove("onclickReferPicture");
        val.style.left = 0;
    }
};