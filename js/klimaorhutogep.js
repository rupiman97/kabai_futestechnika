let klima = document.getElementById("chooseKlima");
let hutogep = document.getElementById("chooseHutogep");

hutogep.onclick = function() {chooseHutogepFunction};
klima.onclick = function() {chooseKlimaFunction};

function chooseKlimaFunction(){
    console.log("klima valasztva");
}

function chooseHutogepFunction(){
    console.log("hutogep valasztva");
}

