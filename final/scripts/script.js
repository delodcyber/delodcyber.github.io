const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", function(){
    if (menuBtn.textContent === "☰"){
        menuBtn.textContent = "X";
    }else if (menuBtn.textContent === "X") {
        menuBtn.textContent = "☰";
    }
    menu.classList.toggle("responsive");
});

document.getElementById("updated-time").innerHTML = document.lastModified;