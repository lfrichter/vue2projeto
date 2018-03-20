// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { sync } from 'vuex-router-sync'

import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options = process.env.SERVER

// Vue.http.interceptors.push((request, next) => {
//   request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM5OGNlMGY1MmJkNmJlZWM5ODk0NjBjNjEyZTBiZDU3ZDczNTVlMWMzMWEzMTM1MThmNzc2Zjk5YzcxNTY4N2U0ZmNlNjMyMDY2NTc0YmM0In0.eyJhdWQiOiIyIiwianRpIjoiYzk4Y2UwZjUyYmQ2YmVlYzk4OTQ2MGM2MTJlMGJkNTdkNzM1NWUxYzMxYTMxMzUxOGY3NzZmOTljNzE1Njg3ZTRmY2U2MzIwNjY1NzRiYzQiLCJpYXQiOjE0ODY1NzMyNDAsIm5iZiI6MTQ4NjU3MzI0MCwiZXhwIjoxNDg2NTc2ODQwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JbRTOMGtrcWiTcum2oqoFwMvrVBKE9tWDpMgewz1kSLsHdA6AIsirK8Zz8SnLzbibcvuHrQ0bgdSuS7brVfoVkijI6z4r1TQ6kPEZJL-K8wr8ZXhpdSrTaRxu2t6JUXAkFA9QDYMGyOEC1ZMY3sbXnXty50eEF8_KVLI0yHpN7GXidgp8uE_gn7jeCLh7ZN1SKQ4-AQLf4h31RIFhuVFG1MqUSgJhG8qCr0z1GeI-uJBxrmqtLX9lpaZbcyaOWBnmuDlXp9fVZ7w7kXQeOuZ09mYyw_VaLs0l7EQwLttiNhLqApWXMvkrdw0OaXICbnILA2srUd1oUOfux3PG7bpAd2N06gsQpjz8f3T3EDyYKR7GoYmXWk6FL70FWQ9c0m5w5IsmgGz7HMD2L-pUq1-1juaBMSzh1OWTTPU0gkKtGDz_iDtpxl3eBR10WeWop7AKubFoPub7Upjs8j4V5xmKmRTgcGY68vBdVj7pw6CmS0T0QZXHBPy-nlSoEXq3FX4ObotmudL4wX3eYI2Yt9SWJmQOATCyVB8lt5sznVQz5bB5MZ-h9wcTOfrzor3-m9P87G3MWzLhXF8q2TsDNq6dxN16_VX5O7SHlWV-8fPE3omA_vK7B_J4N9P6aEpRwMYf9BDm3zNe3RQlytb8JtMXUTG7icWZnJOQ2er8URsJTQ')
//   next()
// })

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({
  routes
})

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  contas: [],
  components: { App },
  template: '<App/>'
})
