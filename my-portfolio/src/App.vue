<script setup>
import Navbar from './components/Navbar.vue';
import 'animate.css';
</script>

<template>
  <div id="app">
    <!-- Usar el componente de navegación -->
    <Navbar />

    <!-- Contenido principal de la aplicación -->
    <router-view />
  </div>
</template>
