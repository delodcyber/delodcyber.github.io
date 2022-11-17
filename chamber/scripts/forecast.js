const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=707471&units=imperial&appid=2c142fc5cd314fd798ed56823e09de8e"

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
    console.log(forecast);
    let day = 0;
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    forecast.forEach(x => {
      const d = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = Math.round(x.main.temp) + " °F";
      let icon = document.getElementById(`icon${day+1}`);
      icon.setAttribute('src', 'http://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png');
      icon.setAttribute('alt', forecast[day].weather[0].description);
      day++;
    })
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=707471&units=imperial&appid=2c142fc5cd314fd798ed56823e09de8e"
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('cur').textContent = jsObject.weather[0].description;
        document.getElementById('t').textContent = Math.round(jsObject.main.temp) + ' ℉';
        document.getElementById('hu').textContent = jsObject.main.humidity + ' %'
        document.getElementById('w').textContent = Math.round(jsObject.wind.speed) + ' mph';

        // let request = new XMLHttpRequest();
        // request.open("GET", requestURL);
        // request.responseType = 'json';
        // request.send();
        // request.onload = function () {
        //   let towndata = request.response;
        //   showData(towndata);
        // }

      })
  });