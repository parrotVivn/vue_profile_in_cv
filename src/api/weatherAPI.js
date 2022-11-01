import clients from "../api/clients";

export default {
  // get api weather
  getWeatherList: function () {
    return clients.apiClient.get(`/weather`);
  },
  getWeatherCountry: function (country) {
    return clients.apiClient.get(`/weather/?name=${country}`);
  },
};
