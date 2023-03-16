
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

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


if (now.getDay() === 1 || now.getDay() === 2) {
    document.getElementById("banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
}

// initialize display elements
const visitsDisplay = document.querySelector("#last-visited");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisitDate = new Date(window.localStorage.getItem("last-visit-time"));

// determine if this is the first visit or display the number of visits.
if (numVisits > 1) {
    const currentVisitDate = new Date();
    const msDifference = currentVisitDate.getTime() - lastVisitDate.getTime();
    const dayDifference = Math.round(msDifference / (1000 * 3600 * 24));
    visitsDisplay.textContent = dayDifference + " days ago";
    lastVisitDate = currentVisitDate
} else {
    visitsDisplay.textContent = `This is your first visit!`;
    lastVisitDate = new Date();
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits.toString());
localStorage.setItem("last-visit-time", lastVisitDate)