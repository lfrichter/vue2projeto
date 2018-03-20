
import Vue from 'vue'

export default {
  state: {
    accountList: [],
    accountView: {}
  },
  mutations: {
    updateAccountList (state, data) {
      state.accountList = data
    },
    updateAccountView (state, data) {
      state.accountView = data
    }
  },
  actions: {
    getAccounts (context) {
      Vue.http.get('http://localhost:8000/api/accounts').then(reseponse => {
        context.commit('updateAccountList', reseponse.data)
      })
    },
    getAccount (context, id) {
      Vue.http.get('http://localhost:8000/api/accounts/' + id).then(reseponse => {
        context.commit('updateAccountView', reseponse.data)
      })
    },
    newAccount (context, data) {
      Vue.http.post('http://localhost:8000/api/accounts', data).then(reseponse => {
        context.commit('updateAccountView', reseponse.data)
      })
    },
    updateAccount (context, params) {
      Vue.http.put('http://localhost:8000/api/accounts/' + params.id, params.data).then(reseponse => {
        context.commit('updateAccountView', reseponse.data)
      })
    },
    removeAccount (context, id) {
      Vue.http.delete('http://localhost:8000/api/accounts/' + id).then(reseponse => {
        context.commit('updateAccountView', reseponse.data)
      })
    }
  }
}
