// forecast.js is for interacting with the API
const API_KEY = "AqhEW2ZidL09A5tzwxg8AY5GVADJzqfW";

// get weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${id}?apikey=${API_KEY}`;

  const response = await fetch(`${base}${query}`);

  const data = await response.json();

  return data[0];
};

// Get city information
const getCity = async (city) => {
  const base_url =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const query = `?apikey=${API_KEY}&q=${city}`;

  const response = await fetch(`${base_url}${query}`);

  const data = await response.json();

  return data[0];
};

// getCity("hamburg")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
