<template>
  <v-app>
  <div class="SignIn">
    <div class="SignIn-content">
      <div class="title">
        <p>SIGN IN</p>
      </div>
      <div class="subtitle">
        <p>Please sign in to continue</p>
      </div>
      <v-form ref="forms" @submit.prevent="submit">
        <v-text-field ref="email" v-model="email" :rules="emailRules" placeholder="Email"
          :append-icon="'$vuetify.icons.mail'" class="email-input" required></v-text-field>
        <v-text-field ref="password" v-model="password" :append-icon="'$lock'" :rules="passwordRules"
          hint="At least 8 characters" placeholder="Password" counter type="password" color="#1687F7"
          class="password-input"></v-text-field>
        <v-btn class="SignIn-button" color="white" text @click="submit">
          Sign In
        </v-btn>
        <div class="form-description">Haven’t Registered?&nbsp;&nbsp;<span @click="ChangeSignIn">Sign Up</span></div>
      </v-form>
    </div>
  </div>
  </v-app>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  data: () => ({
    email: '',
    password: '',
    emailRules: [],
    passwordRules: [
      v => v.length >= 8 || 'Min 8 characters',
      v => !!v || 'Password is required',
    ]
  }),
  watch: {
    'email'(val) {
      this.emailRules = []
    }
  },
  methods: {
    ...mapMutations({
      login: 'auth/login', // Привязка мутации login к методу login
    }),
    ...mapActions({
      addCard: 'glasses/addCard', // Привязка мутации login к методу login
      addCategory: 'glasses/addCategory', // Привязка мутации login к методу login
    }),


    async submit() {
      this.emailRules = [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
      let self = this;
      if (self.$refs.forms.validate()) {
        try {
          const result = await this.$axios.post('/auth/login', {
            email: this.email,
            password: this.password
          });
          this.login();
          this.addCategory();
          this.$emit('Close')
        } catch (error) {
          console.log(error)
        }
      }
    },
    ChangeSignIn() {
      this.$emit('ChangeSignIn')
    }
  }
}
</script>
<style scoped>
.SignIn {
  width: 415px;
  padding-left: 31px;
  margin-top: 130px;
}

.title>p {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 8px;
}

.subtitle {
  font-weight: 500;
  font-size: 16px;
  color: #A6A0A0;
  margin-bottom: 30px
}

.v-input__append-inner .v-icon {
  content: url(/mail.svg)
}

.v-text-field {
  padding: 0;
  margin-bottom: 15px;
  margin-top: 0px;
}

.v-text-field--outlined fieldset {
  color: red !important;
}

::v-deep .v-input__slot::before {
  border-color: rgba(22, 135, 247, 1) !important;
}

.button {
  text-align: center;
  font-size: 20px;
  width: 100%;
  margin-top: 45px;
}

.button a {
  background: linear-gradient(180deg, rgba(12, 218, 246, 0.72) 0%, rgba(6, 102, 247, 0.64) 100%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
  padding: 9px 41%;
  color: #FFFFFF
}

>>>.email-input .v-icon__component {
  height: 31px !important;
  width: 31px !important
}

>>>.password-input .v-icon__component {
  height: 26px !important;
  width: 26px !important
}

>>>.v-input input {
  max-height: 36px !important;
}

.v-input__append-inner {
  padding-right: 2px;
}

.SignIn-button {
  background: linear-gradient(180deg, rgba(12, 218, 246, 0.72) 0%, rgba(6, 102, 247, 0.64) 100%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 39%;
  height: 46px;
}

.v-btn.v-size--default {
  font-size: 20px;
}

>>>.v-text-field input {
  color: #1687F7;
}

.form-description {
  color: #A6A0A0;
  font-size: 16px;
  margin-top: 33px;
  text-align: center;
}

.form-description span {
  color: #0666F7;
  cursor: pointer;
}

.form-description {
  color: #A6A0A0;
  font-size: 16px;
  margin-top: 33px;
  text-align: center;
}

.form-description span {
  color: #0666F7;

}
</style>
