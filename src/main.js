import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.use(BootstrapVue)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
