const day = new Date();
console.log(day);
const dayNumber = day.getDay();
console.log(dayNumber);
const result = document.getElementById("pop");
if (dayNumber == 7) {
    result.classList.add("show");
} else {
    result.classList.add("hide");
}