window.onload = function() {randomNavbarColor()};

const randomColors = ["Aquamarine", "DarkSeaGreen", "Khaki", "LightGreen"];

function randomNavbarColor(){
    console.log("asd");
    let navbar = document.getElementById("stickyNav");
    let colorValue = colorPicker();
    navbar.style.backgroundColor = randomColors[colorValue];
}

function colorPicker(){
    return Math.floor(Math.random() * 4);
}