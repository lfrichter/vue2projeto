
import Vue from 'vue'

export default {
  state: {
    bankList: []
  },
  mutations: {
    updatebankList (state, data) {
      state.bankList = data
    }
  },
  actions: {
    getbanks (context) {
      Vue.http.get('http://localhost:8000/api/banks?limit=200').then(reseponse => {
        context.commit('updatebankList', reseponse.data)
      })
    }
  }
}
