import apiClient from "@/api";
export default {
  async getChoices({ commit }) {
    const response = await apiClient.weatherAPI.getWeatherList();
    commit("setChoices", response.data);
  },
  async getWeather({ commit }, payload) {
    const response = await apiClient.weatherAPI.getWeatherCountry(payload);
    commit("setWeather", response.data);
  },
  async getTodo({ commit }) {
    const response = await apiClient.weatherAPI.getWeatherList();
    commit("setTodo", response.data);
  },
  async getNews({ commit }) {
    const response = await apiClient.weatherAPI.getWeatherList();
    commit("setNews", response.data);
  },
};
