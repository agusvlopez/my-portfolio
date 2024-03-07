<script setup>

</script>

<template>
    <nav class="p-4 absolute top-0 left-0 w-full">
        <div class="container mx-auto">
            <div class="flex items-center justify-between textBlue text-2xl gap-4">
                <!-- Logo o título de la aplicación -->
                <router-link to="/" class="font-semibold navbar--item">Agustina Lopez</router-link>

                <!-- Menú de navegación -->
                <div class="space-x-4 navbar--item">
                    <router-link to="/about" class="font-semibold">About</router-link>
                </div>
                <div class="space-x-4 navbar--item">
                    <router-link to="/projects" class="font-semibold">Projects</router-link>
                </div>
                <div class="space-x-4 navbar--item">
                    <router-link to="/contact" class="font-semibold">Contact</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>