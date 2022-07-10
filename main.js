import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.$navigate = (name, params)=>{
  let routeObj = {name};
  if(typeof params === 'object'){
    routeObj.params = params;
  }
  router.push(routeObj).catch(()=>{});
}
//debugging purpose
window.store = store;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
