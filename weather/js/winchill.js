
//Declaration and construction of the formula for the Windchill temperature

const windChillFormula = function (temperature,speed) {
    return (35.74 + (0.6215*temperature) - (35.75*(speed**0.16)) + (0.4275*(temperature)*(speed**0.16))).toFixed(1);
  };

// List declaration to store URL information
let forecastFromURL = []
let weatherFromURL = {}

//The function that prints the data on Weather Summary

function weatherSummary () {
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = '<em>' + weatherFromURL.temp_f + '</em>';
    let conditionOfWeather = document.querySelector("#description");
    conditionOfWeather.innerHTML = '<em>' + weatherFromURL.condition.text  + '</em>' ;
    let windchill = document.querySelector("#windChill");
    windchill.innerHTML = '<em>' + windChillFormula(weatherFromURL.temp_f, weatherFromURL.wind_mph) + '</em>';
    let temp_high = document.querySelector("#high-temperature");
    temp_high.innerHTML = '<em>' + forecastFromURL[0].day.maxtemp_f  + '</em>';
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = '<em>' +  weatherFromURL.humidity  + '</em>';
    let wind_speed = document.querySelector("#wind-speed");
    wind_speed.innerHTML = '<em>' +  weatherFromURL.wind_mph  + '</em>';
}
//Create the object that passes the values from the URL to the lists
async function FetchWeather(){

    let url = "https://api.weatherapi.com/v1/forecast.json?key=103ea9f0eebe4be1825213412221103&q=83263&days=5&aqi=no&alerts=no"
    await fetch(url)
    .then((Information) => {
        return Information.json();
    })
    .then((climateExtractedFromJSON) => {
    weatherFromURL = climateExtractedFromJSON.current;
    forecastFromURL = climateExtractedFromJSON.forecast.forecastday;
    });
    weatherSummary();
}
//Calling the main function to perform the calculations.
FetchWeather();