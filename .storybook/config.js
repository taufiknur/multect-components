import { configure } from '@storybook/vue';
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
// import "../src/assets/scss/material-dashboard.scss";

Vue.use(VueMaterial)
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
