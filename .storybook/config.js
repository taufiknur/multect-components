import { configure } from "@storybook/vue";
import Vue from "vue";
import VueMaterial from "vue-material";
import VModal from "vue-js-modal";
import Notifications from "vue-notification";

import "vue-material/dist/vue-material.min.css";
import "../src/assets/scss/material-dashboard.scss";

Vue.use(VModal);
Vue.use(VueMaterial);
Vue.use(Notifications);
// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);
