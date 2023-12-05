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

  requestedURL =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=" +
    APIkey;

  console.log(city);

  fetch(requestedURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      latitude = data[0].lat;
      longitude = data[0].lon;

      console.log("latitude", latitude);

      console.log("long", longitude);

      console.log("data", data);

      return;
    });

  //   fiveDayURL =
  //     "api.openweathermap.org/data/2.5/forecast?lat=" +
  //     latitude +
  //     "&lon=" +
  //     longitude +
  //     "&appid=" +
  //     APIkey;

  //   fetch(fiveDayURL).then(function (response) {
  //     console.log(response);
  //   });
}

//USER INTERACTIONS
formEl.on("submit", searchCity);

//INITIALIZATION
