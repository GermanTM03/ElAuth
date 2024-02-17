<template>
    <div>
      <form @submit.prevent="login">
        <label for="email">Correo:</label>
        <input v-model="email" type="email" required>
  
        <label for="password">Contraseña:</label>
        <input v-model="password" type="password" required>
  
        <button type="submit">Iniciar sesión</button>
      </form>
  
      <div v-if="loggedIn">
        <p>¡Inicio de sesión exitoso!</p>
      </div>
  
      <div v-if="showVistas">
        <Vistas />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Vistas from './Vistas.vue';
  
  const email = ref('');
  const password = ref('');
  const loggedIn = ref(false);
  const showVistas = ref(false);
  
  const login = () => {
    if (email.value === 'German@gmail.com' && password.value === '1111') {
      loggedIn.value = true;
      showVistas.value = true;
    } else {
      alert('Inicio de sesión fallido. Verifica tu correo y contraseña.');
    }
  };
  </script>
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    margin-bottom: 15px;
    padding: 8px;
    font-size: 14px;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .success-message {
    margin-top: 20px;
    color: #4caf50;
  }
  </style>