//searchung the city using API
function searchCity(city) {
  let apiKey = " 6ftacf838o5d92ef8d020d474ec7fbad";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=`${city}`&key=`${apiKey}`";
  axios.get(apiUrl).then(updateWeatherInfo);
}

//function to update search engine and city
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#weather-city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
