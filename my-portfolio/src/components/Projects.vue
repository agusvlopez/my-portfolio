<script setup>

import trainingApp from '../assets/trainingapp-laptop.jpg';
import traniCeramica from '../assets/traniceramica-laptop.jpg';
import apiWeather from '../assets/apiweather-mobile.jpg';
import recipesBySam from '../assets/recipes-by-sam-laptop.jpg';
import fanWeddingHeineken from '../assets/fan-wedding-heineken.png';
import plusbelle from '../assets/plusbelle.png';
import zorro from '../assets/zorro.png';
import oreo from '../assets/oreo.png';
import Navbar from './Navbar.vue';

</script>

<template>
    <section class="relative h-screen bg-white flex items-center justify-center">
        <Navbar />
        <div class="flex-col items-center text-center">
            <h1 class="uppercase text-5xl md:text-9xl textBlue block"><span
                    class="block text-5xl font-bold text-left">My
                    Latest</span> Projects
            </h1>
            <div class="animate__animated animate__fadeIn mt-4 lg:mt-0">
                <a href="#allProjects" class="cursor-pointer">
                    <span
                        class="iconArrowDown inline-block p-2 lg:p-0 lg:absolute lg:bottom-8 lg:right-8 transition"></span>
                </a>
            </div>
        </div>
    </section>

    <div id="allProjects" class="min-h-screen flex column items-center justify-center">

        <div class="lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-2 mt-2 mb-2">
            <div class="flex items-center justify-center relative group">
                <a href="https://www.zorro.com.ar" target="_blank">
                    <img :src="zorro" alt="Zorro website"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-lg text-center font-semibold justify-center">PROFESSIONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Zorro</h2>
                            <p class="text-white text-lg text-center justify-center mb-2">Front End development.
                            </p>
                            <p class="text-white text-lg text-center justify-center">React.js - Tailwindcss - SASS
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="http://oreo.com.ar/" target="_blank">
                    <img :src="oreo" alt="Oreo website"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-lg text-center font-semibold justify-center">PROFESSIONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Oreo</h2>
                            <p class="text-white text-lg text-center justify-center mb-2">Front End development.
                            </p>
                            <p class="text-white text-lg text-center justify-center">React.js - Tailwindcss
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <div class="flex items-center justify-center relative group">
                <a href="https://www.heineken.com/ar/es/fanwedding" target="_blank">
                    <img :src="fanWeddingHeineken" alt="Fan Wedding - Heineken"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-lg text-center font-semibold justify-center">PROFESSIONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Fan Wedding - Heineken</h2>
                            <p class="text-white text-lg text-center justify-center mb-2">Mails, forms and database
                                management.
                            </p>
                            <p class="text-white text-lg text-center justify-center">MySQL - Laravel
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="http://plusbelle.com.ar/" target="_blank">
                    <img :src="plusbelle" alt="Plusbelle"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-lg text-center font-semibold justify-center">PROFESSIONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Plusbelle</h2>
                            <p class="text-white text-lg text-center justify-center mb-2">Front End development.
                            </p>
                            <p class="text-white text-lg text-center justify-center">React.js - Tailwindcss - SASS
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://training-app-orpin.vercel.app/#/" target="_blank">
                    <img :src="trainingApp" alt="Laptop with Training App page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-xl text-center font-semibold justify-center">PERSONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Training App</h2>
                            <p class="text-white text-lg text-center justify-center">Vue.js 3 - Firebase - Tailwindcss
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://trani-ceramica.000webhostapp.com/" target="_blank">
                    <img :src="traniCeramica" alt="Laptop with Trani Cerámica page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-xl text-center font-semibold justify-center">PERSONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Trani Cerámica</h2>
                            <p class="text-white text-lg text-center">PHP - Bootstrap - MySQL</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://api-weather-theta.vercel.app/" target="_blank">
                    <img :src="apiWeather" alt="Mobile with Api Weather page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-xl text-center font-semibold justify-center">PERSONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">API Weather</h2>
                            <p class="text-white text-lg text-center">Javascript - HTML - CSS</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="flex items-center justify-center relative group">
                <a href="https://recipes-by-sam-project.vercel.app/" target="_blank">
                    <img :src="recipesBySam" alt="Laptop with 'Recipes by Sam' page"
                        class="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    <div
                        class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-80 md:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300 project--item">
                        <div>
                            <p class="text-white text-xl text-center font-semibold justify-center">PERSONAL
                            </p>
                            <h2 class="text-white text-3xl font-bold uppercase text-center">Recipes by Sam</h2>
                            <p class="text-white text-lg text-center">React.js - Node.js - MongoDB - Firebase -
                                Tailwindcss
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>