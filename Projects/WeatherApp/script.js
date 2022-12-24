"use strict";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e58d173ab2mshe03abc3d83fa9a4p19c682jsn1e4b7de6bb43",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //   cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

//calling the default value = "delhi"  and search_bar value
getWeather("Delhi");

//defining the function for the 1city, 2city, 3 city , 4city
const getCityWeather = (cityValue) => {
  const index = cityValue;
  //   console.log(index);
  const cityEl = document.getElementById("city" + index);
  let city = cityEl.innerText;
  //   console.log(city);
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const cloud_pct = document.getElementById("cloud_pct_" + "city" + index);
      const temp = document.getElementById("temp_" + "city" + index);
      const feels_like = document.getElementById(
        "feels_like_" + "city" + index
      );
      const humidity = document.getElementById("humidity_" + "city" + index);
      const min_temp = document.getElementById("min_temp_" + "city" + index);
      const max_temp = document.getElementById("max_temp_" + "city" + index);
      const wind_speed = document.getElementById(
        "wind_speed_" + "city" + index
      );
      const wind_degrees = document.getElementById(
        "wind_degrees_" + "city" + index
      );
      const sunrise = document.getElementById("sunrise_" + "city" + index);
      const sunset = document.getElementById("sunset_" + "city" + index);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      //   cloud_pct_city1.innerHTML = response.cloud_pct;
    })
    .catch((err) => console.error(err));
};
// console.log(typeof city1.innerText);
getCityWeather("1");
getCityWeather("2");
getCityWeather("3");
getCityWeather("4");
