// listen for click to search for city

// get weather for city
function getWeather() {
    var weatherResponse = document.querySelector("#weatherResponse").value;
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=a54619f72aa1e8e2eef5f8580fbb30fe'
    )
    .then(function(weatherResponse) {
        return weatherResponse.json();
    })
    .then(function(weatherResponse) {
        console.log(weatherResponse.data[0]);
    });

    // display weather for city

}

// get 5 day forecast for city

// display 5 day forecast for city

// store previously searched cities in localstorage 

// display previously searched cities as buttons

