window.onscroll = function() {setSticky()};


var header = document.getElementById("stickyNav");
var sticky = header.offsetTop;

function setSticky(){
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}