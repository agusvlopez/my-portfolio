<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const toggleLink = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav class="p-4 bg-[#0e0e0e] shadow lg:shadow-none fixed w-full top-0 left-0 z-50">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <!-- Título -->
            <div class="container mx-auto flex justify-between items-center">
                <div>
                    <router-link to="/" class="text-2xl text-[#f5f5f5] hover:text-[#ffc4fd] transition-colors">Agustina
                        Lopez</router-link>
                </div>

                <!-- Botón de menú hamburguesa (visible en dispositivos móviles) -->
                <div>
                    <button @click="toggleMenu" class="lg:hidden focus:outline-none">
                        <svg class="w-6 h-6 text-[#f5f5f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Menú de navegación -->
            <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
                class="w-full lg:w-auto lg:flex lg:items-center pt-2">
                <div class="flex flex-col lg:flex-row lg:items-center w-full lg:w-auto text-lg">
                    <router-link to="/about" @click="toggleLink"
                        class="block px-2 py-1 text-[#f5f5f5] hover:text-[#ffc4fd] transition-colors">About</router-link>
                    <router-link to="/projects" @click="toggleLink"
                        class="block px-2 py-1 text-[#f5f5f5] hover:text-[#ffc4fd] transition-colors">Projects</router-link>
                    <router-link to="/contact" @click="toggleLink"
                        class="block px-2 py-1 text-[#f5f5f5] hover:text-[#ffc4fd] transition-colors">Contact</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
