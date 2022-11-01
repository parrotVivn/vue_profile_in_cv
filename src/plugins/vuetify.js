/* eslint-disable prettier/prettier */
// Styles
import "@mdi/font/css/materialdesignicons.css";
// Vuetify
import { createVuetify } from "vuetify";
import "vuetify/styles";
import customThemeColor from "../utils/color";
import Ripple from "vuetify/lib/directives/ripple";

export default createVuetify({
  theme: {
    dark: true,
    options: { customProperties: true },
    themes: {
      light: {
        ...customThemeColor,
        primary: "#017ACD",
      },
      dark: {
        ...customThemeColor,
        primary: "#017ACD",
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
  directives: {
    Ripple,
  },
  breakpoint: {
    thresholds: {
      xs: 340,
      sm: 540,
      md: 800,
      lg: 1280,
    },
    scrollBarWidth: 24,
  },
});
