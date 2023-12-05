//DEPENDENCIES
var formEl = $("#city-form");
var cityNameEl = $('input[name="city-name"]');

//DATA
var APIkey = "271703820aa14bd16fc1a78b4794a1ec";
var requestedURL;

//FUNCTIONS
function searchCity(event) {
  event.preventDefault();
  var city = cityNameEl.val().trim();

  //lookup city in API

  fetchCityDate(city);
  return city;
}

function fetchCityDate(city) {
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
      console.log(data);
    });
}

//USER INTERACTIONS
formEl.on("submit", searchCity);

//INITIALIZATION
