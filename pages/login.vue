<template>
  <div class="login">
    <h1>
      Login View
    </h1>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button class="login-button">Login</button>
    </form>
    <div class="error" v-if="error">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.push("/secret");
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style>
.login {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
}

.login-button {
  width: 400px;
  height: 75px;
}
</style>
