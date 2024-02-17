<template>
    <div>
      <h1>Registro de Usuarios</h1>
      
      <form @submit.prevent="agregarUsuario">
        <label for="nombre">Nombre:</label>
        <input v-model="nuevoUsuario.nombre" type="text" id="nombre" required>
  
        <label for="email">Email:</label>
        <input v-model="nuevoUsuario.email" type="email" id="email" required>
  
        <button type="submit">Agregar Usuario</button>
      </form>
  
      <h2>Usuarios Temporales</h2>
      <ul>
        <li v-for="(usuario, index) in usuarios" :key="index">
          {{ usuario.nombre }} - {{ usuario.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const usuarios = ref([]);
  const nuevoUsuario = ref({
    nombre: '',
    email: ''
  });
  
  const agregarUsuario = () => {
    usuarios.value.push({ ...nuevoUsuario.value });
    nuevoUsuario.value = { nombre: '', email: '' };
  };
  </script>
  