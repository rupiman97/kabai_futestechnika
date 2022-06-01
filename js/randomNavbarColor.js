window.onload = function(){randomNavbarColor()}

const randomColors = ["Aquamarine", "DarkSeaGreen", "Khaki", "LightGreen"];

function colorPicker(){
    return Math.floor(Math.random() * 4);
}

function randomNavbarColor(){
    let navbar = document.getElementById("stickyNav");
    let colorValue = colorPicker();
    navbar.style.backgroundColor = randomColors[colorValue];
    console.log("szín");
}