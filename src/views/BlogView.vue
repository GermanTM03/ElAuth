<template>
  <div>
    <h1>Los Usuarios:</h1>
    <table class="user-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Grupo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.group }}</td>
        </tr>
      </tbody>
    </table>
    <h2>Respuesta</h2>
    <div v-if="loginMessage">{{ loginMessage }}</div>
    <h2>MiToken</h2>
    <div v-if="token">{{ token }}</div>
    <button v-if="token" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import UserService from '@/services/AuthService'
import type IUser from '@/interfaces/IUser'

const loginMessage = ref<string>('')
const token = ref<string>('')
const ID = ref<string>('')
const users = ref<IUser[]>([])

onMounted(async () => {
  const tokenFromStorage = localStorage.getItem('token');
  const IDFromStorage = localStorage.getItem('ID');

  if (tokenFromStorage && IDFromStorage) {
    token.value = tokenFromStorage;
    ID.value = IDFromStorage;

    try {
      users.value = await UserService.GetUsers(token.value);
      console.log("Obtencion de usuarios Exitoso")
    } catch (error) {
      console.error('No se pudieron recuperar los usuarios:', error)
    }
  } else {
    console.warn('No hay token en el almacenamiento local. No se obtendrán usuarios.');
  }
})

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('ID');
  token.value = '';
  ID.value = '';
  window.location.href = '/login';
}
</script>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th, .user-table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.user-table th {
  background-color: #f2f2f2;
  text-align: left;
}
</style>
