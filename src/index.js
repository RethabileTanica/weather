//formating the date and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

//using API to update weather information
function updateWeatherInfo(response) {
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeDateElement = document.querySelector("#date-time");
  let iconElement = document.querySelector("#icon");
  let date = new Date(response.data.time * 1000);
  let temperatureElement = document.querySelector(
    "#weather-app-temperature-value"
  );
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-city");

  timeDateElement.innerHTML = formatDate(date);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  iconElement.innerHTML = `<img src=${response.data.condition.icon_url} alt="weather icon" class="weather-app-icon" />`;
  temperatureElement.innerHTML = Math.round(temperature);
}

//searchung the city using API
function searchCity(city) {
  let apiKey = "6ftacf838o5d92ef8d020d474ec7fbad";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

//function to update search engine and city
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Joburg");
