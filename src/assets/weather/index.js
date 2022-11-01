const icons = [
  {
    path: "icons8-avalanche-100",
  },
  {
    path: "icons8-cloud-100",
  },
  {
    path: "icons8-clouds-100",
  },
  {
    path: "icons8-drought-100",
  },
  {
    path: "icons8-fahrenheit-symbol-100",
  },
  {
    path: "icons8-lightning-bolt-100",
  },
  {
    path: "icons8-marker-storm-100",
  },
  {
    path: "icons8-marker-sun-100",
  },
  {
    path: "icons8-moon-and-stars-100",
  },
  {
    path: "icons8-night-100",
  },
  {
    path: "icons8-night-wind-100",
  },
  {
    path: "icons8-partly-cloudy-day-100",
  },
  {
    path: "icons8-rain-100",
  },
  {
    path: "icons8-rainwater-catchment-100",
  },
  {
    path: "icons8-sad-sun-100",
  },
  {
    path: "icons8-smiling-sun-100",
  },
  {
    path: "icons8-snow-100",
  },
  {
    path: "icons8-snow-storm-100",
  },
  {
    path: "icons8-sun-100",
  },
  {
    path: "icons8-sunrise-100",
  },
  {
    path: "icons8-temperature-outside-100",
  },
  {
    path: "icons8-tsunami-100",
  },
  {
    path: "icons8-wind-100",
  },
  {
    path: "icons8-windsock-100",
  },
  {
    path: "icons8-windy-weather-100",
  },
];
const WEATHER_ICON = icons.map((icon) => {
  return {
    name: icon.path.slice(7, icon.path.indexOf("-100")),
    path: icon.path,
  };
});
export default WEATHER_ICON;
