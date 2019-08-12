import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueFire from 'vuefire'
import VueQuillEditor from 'vue-quill-editor'
import Notifications from 'vue-notification'
import BootstrapVue from 'bootstrap-vue'
// import external stylesheets
import 'font-awesome/css/font-awesome.min.css'

// import vue-quill-editor styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '@/admin/store'
import { LayoutPlugin } from 'bootstrap-vue'


Vue.use(VueFire)
Vue.use(VueQuillEditor)
Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
