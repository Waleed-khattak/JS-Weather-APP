let results = document.getElementById("result");
let temperature1 = document.getElementById("temp");
let description1 = document.getElementById("weather");
let condition1 = document.getElementById("cond");
let humidity1 = document.getElementById("huma");

function getweather() {
  let cityValue = document.getElementById("city").value;
  
  if (cityValue === "") {
    results.innerHTML = "Please enter a city name.";
    return;
  }
  
  results.innerHTML = "";

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=bf475c092edc457f9b6202409230204&q=${cityValue}&aqi=yes`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then((data) => {
      let city = data.location.name;
      let temperature = data.current.temp_c;
      let description = data.current.condition.text;
      let humidity = data.current.humidity;
      let resultDiv = document.createElement("div");
      resultDiv.textContent = `The current Weather in ${city} is:`;
      temperature1.innerHTML = `<i class="fas fa-thermometer-half"></i> Temperature : ${temperature}°C`;
      humidity1.innerHTML = `<i class="fas fa-tint"></i> Humidity : ${humidity}%`;
      description1.innerHTML = `<i class="fas fa-cloud"></i> Description : ${description}`;
      results.appendChild(resultDiv);
    })
    .catch((error) => {
      results.innerHTML = error.message;
    });
}