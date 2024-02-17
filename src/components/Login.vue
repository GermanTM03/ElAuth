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
  
      <!-- Condición para mostrar el componente Vistas.vue -->
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
      // Redirige al usuario al componente Vistas.vue en la carpeta components
      showVistas.value = true;
    } else {
      alert('Inicio de sesión fallido. Verifica tu correo y contraseña.');
    }
  };
  </script>
  