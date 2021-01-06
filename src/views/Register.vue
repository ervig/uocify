<template>
    <main class="page-register">


      <section class="box-auth">
        <img class="logo" alt="logo" src="@/assets/icon.svg">
        <h1 class="main-title">Registro</h1>
        <p class="auth-intro">Regístrate en uocify para disfrutar de miles de canciones.</p>

        <form>
            <div class="form-group">
              <label class="form-label" for="username">Email</label>
              <input placeholder="Correo electrónico" type="email" id="email" v-model="email" class="form-control">
            </div>
            <div class="form-group">
              <label class="form-label" for="password">Contraseña</label>
              <input placeholder="Contraseña" type="password" id="password" v-model="password" class="form-control">
            </div>
            <button v-on:click="register" class="btn btn-primary btn-lg">Registrar</button>
        </form>

        <p v-if="error" class="auth-error">
          {{ error }}
        </p>          

        <p class="auth-bottom">¿Ya tienes cuenta?   <router-link to="/login" class="alink">Inicia sesión</router-link></p>
      </section>


    </main>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: '',
      error:''
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            console.log(`Nuevo usuario creado con el correo: ${data.user.email}`);
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