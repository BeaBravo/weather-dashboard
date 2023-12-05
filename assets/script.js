//DEPENDENCIES
var searchButton = $("#search-button");
//DATA

//FUNCTIONS

function searchCity(event) {
  event.preventDefault();

  console.log("you clicked the button!");
}

//USER INTERACTIONS
searchButton.on("submit", searchCity);

//INITIALIZATION
