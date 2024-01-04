<script setup>
import About from '../components/About.vue';
import Navbar from '../components/Navbar.vue';
import Projects from '../components/Projects.vue';


</script>

<template>
    <section class="backgroundPink">
        <div class="h-screen flex items-center justify-center flex-col pt-8 max-w-3xl mx-auto">
            <h1 class="uppercase text-6xl md:text-9xl mb-4">
                <span class="block text-4xl font-bold text-left">I'm a</span>
                <span class="block">Full Stack</span> Developer
            </h1>

            <!-- Enlaces a LinkedIn y GitHub -->
            <div class="flex space-x-8 text-xl font-bold">
                <a href="https://www.linkedin.com/in/agustina-victoria-lopez/" class="textBlue relative group">
                    LinkedIn
                    <span
                        class="iconArrowRight inline-block align-middle opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300"></span>
                    <span
                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="https://github.com/agusvlopez" class="textBlue relative group">
                    Github
                    <span
                        class="iconArrowRight inline-block align-middle opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300"></span>
                    <span
                        class="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
            </div>
            <p class="pt-6 font-semibold textBlue animate__animated animate__fadeIn">Contact: agusvlopez@gmail.com</p>
        </div>

    </section>
</template>

