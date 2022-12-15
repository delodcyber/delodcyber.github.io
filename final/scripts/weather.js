let temperature = document.querySelector("#degree-now");
let description  = document.getElementById("description");
let humidity = document.getElementById("humidity-now");
let tomorrowDate = document.getElementById("tomorrow-date");
let tempTomo = document.querySelector("#degree-tomorrow");
let theDayNextDate = document.getElementById("the-day-next");
let tempNext = document.querySelector("#the-day-next-degree");
let url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=3a614d14e0c682019daff2aad743ba7a&units=imperial"

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
    let closestTime = 10000000000000;
    let temp = 0;
    let humi = 0;
    let desc = "";
    let index = 0;
    // get the closest time data
    for (let i = 0; i < weatherData.list.length; i++) {
        let date = weatherData.list[i].dt;
        let currentTime = new Date().getMilliseconds();
        let difference = Math.abs(currentTime - date);
        if (difference <= closestTime) {
            closestTime = difference;
            index = i;
            temp = parseFloat(weatherData.list[i].main.temp);
            humi = parseFloat(weatherData.list[i].main.humidity);
            desc = weatherData.list[i].weather[0].description;
        }
    }
    // closest data update
    temperature.innerHTML = temp.toFixed(0);
    humidity.innerText = `${humi}`;
    // description
    let capDesc = desc.split(" ");
    for (let i = 0; i < capDesc.length; i++) {
        capDesc[i] = capDesc[i][0].toUpperCase() + capDesc[i].substring(1);
    }
    description.innerHTML = `<strong>${capDesc.join(" ")}</strong>`;

    // tomorrow
    let tomoDate = weatherData.list[index + 9].dt_txt;
    tomorrowDate.innerText = `${new Date(tomoDate).getMonth()}/${new Date(tomoDate).getDate()}`;
    let tomoTemp = parseFloat(weatherData.list[index + 9].main.temp);
    tempTomo.innerText = tomoTemp.toFixed(0);

    // the day next
    let nextDate = weatherData.list[index + 17].dt_txt;
    theDayNextDate.innerText = `${new Date(nextDate).getMonth()}/${new Date(nextDate).getDate()}`;
    let nextTemp = parseFloat(weatherData.list[index + 18].main.temp);
    tempNext.innerText = nextTemp.toFixed(0);

}
