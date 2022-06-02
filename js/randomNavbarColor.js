let loaded = false;

const randomColors = ["CornflowerBlue", "DeepSkyBlue", "DodgerBlue", "MediumSeaGreen"];

if(!loaded){
    console.log("asd");
    let navbar = document.getElementById("stickyNav");
    let colorValue = colorPicker();
    navbar.style.backgroundColor = randomColors[colorValue];
    loaded = true;
}

function colorPicker(){
    return Math.floor(Math.random() * 4);
}