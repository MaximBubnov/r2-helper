import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import router from "./route/router";

Vue.use(Vuetify)
export default new Vuetify({ })


new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
