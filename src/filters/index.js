// import store from "../store";
export default {
  install(Vue) {
    Vue.config.globalProperties.$filters = {
      currencyUSD(value) {
        return "$" + value;
      },
    };
  },
};
