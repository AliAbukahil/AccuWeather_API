class Forecast {
  constructor() {
    // forecast.js is for interacting with the API
    this.API_KEY = "AqhEW2ZidL09A5tzwxg8AY5GVADJzqfW";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }

  // update city method
  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getWeather(cityDetails.Key);
    return {
      // cityDetails: cityDetails,
      // weather: weather,
      /* ** Object shorthand notation:** */
      cityDetails,
      weather,
    };
  }

  // Get city information method
  async getCity(city) {
    const query = `?apikey=${this.API_KEY}&q=${city}`;

    const response = await fetch(`${this.cityURI}${query}`);

    const data = await response.json();

    return data[0];
  }

  // get weather information method
  async getWeather(id) {
    const query = `${id}?apikey=${this.API_KEY}`;

    const response = await fetch(`${this.weatherURI}${query}`);

    const data = await response.json();

    return data[0];
  }
}
