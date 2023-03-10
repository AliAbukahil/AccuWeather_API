// app.js is for DOM manipulation
const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
// creating a new instance of the Forecast constructor
const forecast = new Forecast();

// Update UI
const updateUI = (data) => {
  console.log(data);
  const { cityDetails, weather } = data;

  // update details
  details.innerHTML = `
          <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
  `;

  // update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";

  time.setAttribute("src", timeSrc);

  // remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  // 1) prevent the default action
  e.preventDefault();

  // 2) get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // 3) update the ui with new city
  forecast
    .updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      console.log(error);
    });

  // set local storage
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((error) => {
      console.log(error);
    });
}
