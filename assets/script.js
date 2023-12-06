//DEPENDENCIES
var formEl = $("#city-form");
var cityNameEl = $('input[name="city-name"]');

//DATA
var APIkey = "271703820aa14bd16fc1a78b4794a1ec";
var requestedURL;

//FUNCTIONS
function searchCity(event) {
  event.preventDefault();
  var city = cityNameEl.val();

  //lookup city in API

  fetchCityData(city);
  return city;
}

function fetchCityData(city) {
  var latitude;
  var longitude;
  var fiveDayURL;

  requestedURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=5&appid=" +
    APIkey;

  fetch(requestedURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      longitude = data[0].lon;
      latitude = data[0].lat;
      fiveDayURL =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        APIkey +
        "&units=metric";
      return fetch(fiveDayURL);
    })
    .then(function (response2) {
      return response2.json();
    })
    .then(function (data2) {
      var fiveDayForecast = {
        current: data2.list[0],
        day1: data2.list[7],
        day2: data2.list[15],
        day3: data2.list[23],
        day4: data2.list[31],
        day5: data2.list[39],
      };
      displayForecast(fiveDayForecast);
      return;
    });
}

function displayForecast(forecast) {
  console.log(forecast);
}

//USER INTERACTIONS
formEl.on("submit", searchCity);

//INITIALIZATION
