<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '../firebase';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async register() {
        try {
          await auth.createUserWithEmailAndPassword(this.email, this.password);
          this.$router.push('/');
        } catch (error) {
          console.error("Error durante el registro:", error);
        }
      }
    }
  };
  </script>
  