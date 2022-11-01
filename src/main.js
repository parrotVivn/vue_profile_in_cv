/* eslint-disable prettier/prettier */
import { createApp, h } from "vue";
import { sync } from "vuex-router-sync";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

import { loadFonts } from "./plugins/webfontloader";
import argonKit from "../src/plugins/argon-kit";
import filters from "./filters";
import * as Router from "vue-router";
// ANCHOR globalProperties
import _ from "lodash";
import api from "@/api";
import moment from "moment";
import { TroisJSVuePlugin } from 'troisjs';
import draggable from 'vuedraggable'
// ANCHOR globalPropertiess
const app = createApp({ render: () => h(App) });
sync(store, router);
loadFonts();
argonKit.install(app);
filters.install(app);
// ANCHOR globalProperties
app.config.globalProperties._ = _;
app.config.globalProperties.moment = moment;
app.config.globalProperties.api = api;

// ANCHOR globalProperties
app.use(TroisJSVuePlugin);
app.use(draggable);
app.use(vuetify);
app.use(Router);
app.use(router);
app.use(store);
app.mount("#app");
