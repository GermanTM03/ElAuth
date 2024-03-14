<template>
    <div>
      <h1>Los Usuarios:v</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" >
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import UserService from '@/services/AuthService'
  import type IUser from '@/interfaces/IUser'
  
  const users = ref<IUser[]>([])
  
  onMounted(async () => {
    try {
      users.value = await UserService.getUsers()
    } catch (error) {
      console.error('No se pudieron recuperar los usuarios:', error)
    }
  })
  </script>
  