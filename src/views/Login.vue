<template>
  <main class="page-login">

    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg">
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">Inicia sesión en uocify para disfrutar de miles de canciones.</p>

      <form>
          <div class="form-group">
            <label class="form-label" for="username">Email</label>
            <input placeholder="Correo electrónico" type="email" id="email" v-model="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Contraseña</label>
            <input placeholder="Contraseña" type="password" id="password" v-model="password" class="form-control">
          </div>
          <button v-on:click="login" class="btn btn-primary btn-lg">Iniciar sesión</button>
      </form>

      <p v-if="error" class="auth-error">
        {{ error }}
      </p>      

      <p class="auth-bottom">¿No tienes cuenta?   <router-link to="/register" class="alink">Regístrate</router-link></p>
    </section>

  </main>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: '',
      error:''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            console.log(`Sesión iniciada correctamente con el correo: ${data.user.email}`);
            this.$router.push("/");
          },
          err => {
            this.error = err.message;
          }
        );
      e.preventDefault();
    }
  }
};
</script>