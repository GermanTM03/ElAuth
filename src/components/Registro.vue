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
  const correoExistente = usuarios.value.some(user => user.email === nuevoUsuario.value.email);

  if (!correoExistente) {
    usuarios.value.push({ ...nuevoUsuario.value });
    nuevoUsuario.value = { nombre: '', email: '' };
  } else {
    alert('Correo ya existe');
  }
};
</script>
<style scoped>
.user-registration-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.user-form {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  margin-bottom: 15px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.user-list {
  list-style: none;
  padding: 0;
}

.user-list li {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
</style>