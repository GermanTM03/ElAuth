<template>
  <div>
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="FuncuinLogin">
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <h2>Respuesta</h2>
    <div v-if="loginMessage">{{ loginMessage }}</div>
    <h2>MiToken</h2>
    <div v-if="token">{{ token }}</div>

    <button v-if="token" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthService from '@/services/AuthService'

const email = ref<string>('')
const password = ref<string>('')
const loginMessage = ref<string>('')
const token = ref<string>('')
const ID = ref<string>('')

const FuncuinLogin = async () => {
  try {
    // Verificar que los campos de correo electrónico y contraseña no estén vacíos
    if (!email.value || !password.value) {
      throw new Error('Por favor, complete todos los campos')
    }

    const user = await AuthService.login(email.value, password.value)
    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('ID', user.ID);
      loginMessage.value = user.message;
      token.value = user.token; 
      ID.value = user.ID;
      console.log('Token de sesión:', token.value);
    } else {
      throw new Error('Credenciales incorrectas')
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    loginMessage.value = 'Error al iniciar sesión: ' + error.message
  }
}
</script>

