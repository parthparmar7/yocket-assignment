// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faCalendar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Router)
Vue.use(BootstrapVue)

library.add(faBullhorn)
library.add(faCalendar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8081/'
axios.defaults.timeout = 3000
axios.defaults.headers.common['Accept'] = 'application/json'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
