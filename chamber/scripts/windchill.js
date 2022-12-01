let weatherIcon = document.querySelector("#weather-icon");
let temperature = document.querySelector("#temperature")
let speed = document.getElementById("speed");
let chill = document.getElementById("chill");
let description  = document.getElementById("description")
let url = "https://api.openweathermap.org/data/2.5/weather?q=Provo&appid=3a614d14e0c682019daff2aad743ba7a&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
apiFetch()

function displayResults(weatherData) {
    let tInF = parseFloat(weatherData.main.temp);
    temperature.innerHTML = tInF.toFixed(0);
    let sInMph = parseFloat(weatherData.wind.speed);
    speed.textContent = sInMph;

    let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let desc = weatherData.weather[0].description;
    let capDesc = desc.split(" ");

    for (let i = 0; i < capDesc.length; i++) {
        capDesc[i] = capDesc[i][0].toUpperCase() + capDesc[i].substring(1);
    }

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    description.innerHTML = `<strong>${capDesc.join(" ")}</strong>`;

    if (tInF < 50 && sInMph > 3) {
        chill.textContent = String("feels like " + calculateWindChill(tInF, sInMph) + "°F");
    }else {
        chill.textContent = "N/A";
    }
}

function calculateWindChill(temperature, speed) {
    let windChillInF = 35.74 + (0.6215 * temperature) - (35.75 * speed ** 0.16) + (0.4275 * temperature * speed ** 0.16);
    return windChillInF.toFixed(2);
}
