import Vue from 'vue'
import App from './App.vue'
import VueScrollMagic from 'vue-scrollmagic';

Vue.config.productionTip = false
App.use(VueScrollMagic);

new Vue({
  render: h => h(App),
}).$mount('#app')
