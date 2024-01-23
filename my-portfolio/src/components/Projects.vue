<script setup>

import trainingApp from '../assets/trainingapp-laptop.jpg';
import traniCeramica from '../assets/traniceramica-laptop.jpg';
import apiWeather from '../assets/apiweather-mobile.jpg';
import recipesBySam from '../assets/recipes-by-sam-laptop.jpg';
import Navbar from './Navbar.vue';

</script>

<template>
    <section class="relative h-screen bg-white flex items-center justify-center">
        <Navbar />
        <div class="flex-col items-center text-center">
            <h1 class="uppercase text-5xl md:text-9xl textBlue block"><span class="block text-5xl font-bold text-left">My
                    Latest</span> Projects
            </h1>
            <div class="animate__animated animate__fadeIn">
                <a href="#allProjects" class="cursor-pointer">
                    <span class="iconArrowDown inline-block absolute bottom-8 right-8 transition"></span>
                    <!-- <img :src="downArrow" alt="" class="w-14 pt-8 mx-auto absolute bottom-8 right-8"> -->
                </a>
            </div>
        </div>
    </section>
    <div id="allProjects" class="min-h-screen flex items-center justify-center ">
        <div class="grid grid-cols-2 grid-rows-2 gap-2 mt-2 mb-2">
            <div class="flex items-center justify-center relative group">
                <a href="https://training-app-orpin.vercel.app/#/">
                    <img :src="trainingApp" alt="Laptop with Training App page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Training App</h2>
                            <p class="text-white text-lg text-center justify-center">Vue.js 3 - Firebase - Tailwindcss</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://trani-ceramica.000webhostapp.com/">
                    <img :src="traniCeramica" alt="Laptop with Trani Cerámica page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Trani Cerámica</h2>
                            <p class="text-white text-lg text-center">PHP - Bootstrap - MySQL</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://api-weather-theta.vercel.app/">
                    <img :src="apiWeather" alt="Mobile with Api Weather page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">API Weather</h2>
                            <p class="text-white text-lg text-center">Javascript - HTML - CSS</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://recipes-by-sam-project.vercel.app/">
                    <img :src="recipesBySam" alt="Laptop with 'Recipes by Sam' page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Recipes by Sam</h2>
                            <p class="text-white text-lg text-center">React.js - Node.js - MongoDB - Firebase - Tailwindcss
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>