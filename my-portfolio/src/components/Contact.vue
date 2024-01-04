<script setup>
import Navbar from './Navbar.vue';
</script>

<template>
    <div class="md:h-screen flex flex-col items-center justify-center bg-white textDark max-w-3xl mx-auto">
        <!-- Agregar formulario de contacto -->
        <h1 class="uppercase text-3xl md:text-6xl mb-4">Contact</h1>
        <p>If you are interested in my profile, drop me a message!</p>

        <!-- Enlaces a perfiles sociales -->
        <div class="mt-4 flex space-x-4">
            <a href="https://www.linkedin.com/in/agustina-victoria-lopez/" class="textBlue hover:underline">LinkedIn</a>
            <a href="mailto:agusvlopez@gmail.com" class="textBlue hover:underline">Email</a>
            <!-- Agregar más enlaces según sea necesario -->
        </div>
    </div>
</template>