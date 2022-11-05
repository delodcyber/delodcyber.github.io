
let hElement = document.getElementById("t");
let wElement = document.getElementById("w");
let cElement = document.getElementById("c");
let h = parseInt(hElement.textContent);
let w = parseInt(wElement.textContent);
let c = "N/A";
if (h <= 50 && w >= 3) {
  c = 35.74 + 0.6215 * h - 35.75 * Math.pow(w, 0.16) + 0.4275 * h * Math.pow(w, 0.16);
  cElement.textContent = Math.round(c);
}

