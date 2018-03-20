<template>
  <div class="row">
    <div class="content-header">
        <h1>Contas bancárias <small>{{ sub_title }}</small></h1>
        <div class="grey-text">
            <small>
                <a href="#/">iFinance</a> >
                <a href="#/contas">Suas contas</a> >
                <span>Suas contas</span>
            </small>
        </div>
    </div>
    <div class="card col s12">
        <div class="card-content">
            <form class="row" autocomplete="off" @submit.prevent="save">
                <div class="input-field col s12">
                    <h5>Dados da conta</h5>
                </div>
                <div class="input-field col s6">
                    <input v-model="account.title" class="validate" id="title" type="text" placeholder="Como você prefere identificar esta conta?" required>
                    <label class="active" for="title">Título da conta</label>
                </div>
                <div class="input-field col s6">
                    <input v-model="account.balance_initial" class="validate" id="balance_initial" type="text" placeholder="Qual o valor inicial desta conta?" required>
                    <label class="active" for="title">Valor inicial</label>
                </div>
                <div class="input-field col s6">
                     <!--<select class="browser-default" v-model="account.bank_id">
                        <option value="0">Escolha um banco</option>
                         <option v-for="bank in banks" v-bind:key="bank.id" class="left circle">
                          {{ bank.title }} ({{ bank.code }})
                        </option>
                    </select>
                    <ul>
                      <li v-for="bank in banks" v-bind:key="bank.id">
                        <input type="radio" name="" id=""> {{ bank.title }} ({{ bank.code }})
                      </li>
                    </ul> -->
                    <input v-model="account.bank_id" id="bank_id" name="bank_id" type="text" placeholder="" value="33" required>
                    <label class="active" for>Qual seu banco?</label>
                </div>
                <div class="input-field col s6">
                    <input v-model="account.agency" class="validate" id="agency" type="number" placeholder="Qual o número da sua agencia?" required>
                    <label class="active" for="agency">Número da agência</label>
                </div>
                <div class="input-field col s6">
                    <input v-model="account.account_number" class="validate" id="account_number" type="number" placeholder="Qual o número da sua conta?" required>
                    <label class="active" for="accont_number">Número da conta</label>
                </div>
                <div class="input-field col s6">
                    <input class="waves-effect waves-light btn-large blue-grey darken-4" type="submit" value="salvar">
                </div>
            </form>
        </div>
        <div class="card-action">
            <a href="#/contas">Voltar</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'account-edit',
  data () {
    return {
      sub_title: 'Editar conta'
    }
  },
  // template: require('./form.html'),
  methods: {
    save () {
      var params = {
        id: this.account.id,
        data: this.account
      }
      this.$store.dispatch('updateAccount', params).then(() => {
        this.$router.push('/contas/' + this.$route.params.id)
      })
    },
    remove: function (id) {
      this.$store.dispatch('removeAccount', this.$route.params.id)
        .then(() => {
          this.$router.push('/contas')
        })
    }
  },
  computed: {
    account () {
      return this.$store.state.account.accountView
    }
  },
  created () {
    this.$store.dispatch('getAccount', this.$route.params.id)
    // this.$store.dispatch('getbanks')
  }
}
</script>

<style>

</style>
