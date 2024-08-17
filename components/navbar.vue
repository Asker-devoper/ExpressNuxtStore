<template>
  <header>
    <nav class="content">
      <div>
        <img src="/logo.svg">
      </div>
      <ul>
        <li><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li><nuxt-link to="/category">Category</nuxt-link></li>
        <li><nuxt-link to="/location">Location</nuxt-link></li>
        <li><nuxt-link to="/FAQ">FAQ</nuxt-link></li>
        <div v-if="auth">
          <li><nuxt-link to="/cart"><img src="/cart.svg"></nuxt-link></li>
          <li><a><img src="/profile.svg"></a></li>
        </div>
        <li class="sign-button" @click="dialogAuthOn()" v-else><a>Sign In</a></li>
      </ul>
    </nav>
    <v-app>
      <v-dialog v-model="dialogAuth" @input="dialogAuthOff" width="1035">
        <v-card height="649">
          <div class="auth-window">
            <div class="auth-window-content">
              <div class="auth-window-forms">
                <div class="auth-window-logo">
                  <img src="/logo.svg">
                </div>
                <keep-alive>
                  <component @ChangeSignIn="ChangeSignIn" @ChangeSignUp="ChangeSignUp" @Close="dialogAuthOff"
                    :is="component"></component>
                </keep-alive>
              </div>
              <div class="auth-window-img">
                <img v-show="component === 'SignUp'" src="/side-signup.svg">
                <img v-show="component === 'SignIn'" src="/side-signin.svg">
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </v-app>
  </header>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import SignIn from '~/components/signIn.vue'
import SignUp from '~/components/signUp.vue'

export default {
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      component: 'SignIn',
    }
  },
  computed: {
    ...mapGetters({
      auth: 'auth/userAuth',
      dialogAuth: 'auth/dialogAuth'
    })
  },
  methods: {
    ...mapMutations({
      dialogAuthOn: 'auth/dialogAuthOn',
      dialogAuthOff: 'auth/dialogAuthOff'
    }),
    ChangeSignIn() {
      this.component = 'SignUp'
    },
    ChangeSignUp() {
      this.component = 'SignIn'
    },
  }
}
</script>
<style>
nav li a:hover,
nav li a.nuxt-link-active,
nav li a.nuxt-link-exact-active {
  color: #1687F7;
  cursor: pointer;
}

header .v-application--wrap {
  min-height: fit-content;
}

.content {
  width: calc(1440px - 176px)
}
header{
  box-shadow: 0 1px 4px  rgba(0, 0, 0, 0.25);;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

nav ul {
  display: flex;
  align-items: center;
}

ul li {
  display: inline-block;
  margin: 20.5px
}

li a {
  font-size: 18px;
  font-weight: 500;
  color: #7A7A7A
}

li a img {
  vertical-align: middle;
}

.sign-button {
  width: 138px;
  height: 46px;
  text-align: center;
  background: linear-gradient(269.46deg, #A36DA2 0.24%, #59A0C5 96.9%);
  box-shadow: 0px 10px 20px rgba(86, 196, 249, 0.3);
  border-radius: 15px;
  cursor: pointer;
}

.v-dialog__content--active {
  overflow: hidden;
}

.v-card {
  overflow: hidden;
}

.sign-button a {
  line-height: 46px;
  color: #FFFDFD;
  font-size: 16px;
}

.auth-window-logo {
  padding: 70px 0 0 31px;
}

.auth-window-content {
  display: flex;
  justify-content: space-between;
}

.auth-window-img {
  position: relative;
  left: 3px;
}
</style>
