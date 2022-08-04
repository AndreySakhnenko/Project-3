<template>
  <div class="header_block">
    <h4 class="header_title">{{ activeUser }}</h4>
    <span class="header_span__span">|</span>
    <button
      class="header_btn"
      @click="activeUser = 'User'"
      v-if="activeUser !== 'User'"
    >
      Sing out
    </button>
    <v-btn
      href="#"
      v-if="activeUser === 'User'"
      text
      @click.prevent="hiddenModal"
      >Sing in</v-btn
    >
    <div class="my_form" v-show="hidden">
      <h2 class="modal_title">Sing in</h2>
      <v-form class="modal_form" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          :counter="10"
          :rules="nameRules"
          label="Login"
          v-show="isActive"
          v-model="userData.login"
          class="modal_input"
          type="name"
          required
        ></v-text-field>
        <v-text-field
          :rules="emailRules"
          v-model="userData.email"
          class="modal_input"
          type="email"
          required
          label="E-mail"
        ></v-text-field>
        <v-text-field
          :counter="8"
          :rules="passwordRules"
          v-model="userData.password"
          class="modal_input"
          type="password"
          label="Password"
          required
        ></v-text-field>
      </v-form>
      <p v-if="failAvtorization">{{ errorMessage }}</p>
      <v-btn class="modal_btn" type="submit" @click.prevent="sendUserData">
        Ok
      </v-btn>
      <v-btn class="modal_btn" @click.prevent="hiddenModal"> Close </v-btn>
      <v-btn class="modal_btn modal_btn-1" @click.prevent="classActive">
        Registration
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "auth-modal",
  data() {
    return {
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      activeUser: "User",
      errorMessage: "try again",
      failAvtorization: false,
      hidden: false,
      isActive: false,
      isRegistration: false,
      userData: {
        login: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    sendUserData() {
      for (let fild in this.userData) {
        let copyUserdata = Object.assign({}, this.userData);
        if (this.isRegistration) {
          if (
            this.userData.login &&
            this.userData.email &&
            this.userData.password
          ) {
            localStorage.setItem(
              `${this.userData.email}`,
              JSON.stringify(this.userData)
            );
            this.activeUser = this.userData.login;
            this.hiddenModal();
          }
        } else {
          if (this.userData.email && this.userData.password) {
            let user = localStorage.getItem(`${this.userData.email}`);
            if (
              JSON.parse(user)?.email == this.userData.email &&
              JSON.parse(user)?.password == this.userData.password
            ) {
              this.activeUser = JSON.parse(user).login;
              this.failAvtorization = false;
              this.hiddenModal();
            } else {
              this.failAvtorization = true;
            }
          }
        }
        this.userData = {
          login: "",
          email: "",
          password: "",
        };
      }
      console.log(this.userData);
    },
    classActive() {
      this.isActive = !this.isActive;
      this.isRegistration = !this.isRegistration;
    },
    hiddenModal() {
      this.hidden = !this.hidden;
    },
  },
};
</script>
<style>
/* @import "../assets/styles/style-pages/auth_modal.scss"; */
</style>
