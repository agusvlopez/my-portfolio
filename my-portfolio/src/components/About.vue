<script setup>
import Navbar from './Navbar.vue';


</script>

<template>
    <div class="md:h-screen flex items-center justify-center bg-white textDark max-w-3xl mx-auto">
        <div class="p-6">
            <h1 class="uppercase text-3xl md:text-6xl mb-4">Hi!</h1>
            <p class="mb-2">I'm <span class="font-bold">Agustina López.</span></p>
            <p>A <span class="font-bold">Web Design and Development</span> student at Da Vinci School in Buenos Aires,
                where
                I'm trained about <span class="font-bold">Full Stack development</span> and <span class="font-bold">UX/UI
                    Design</span>. </p>
            <!-- <p class="mb-2">Como <span class="font-bold">Diseñadora
                    UX/UI</span> y
                <span class="font-bold">Desarrolladora Web</span> mi
                objetivo es brindar la mejor
                experiencia posible a todas las personas. La <span class="font-bold">integridad de un diseño atractivo,
                    fluido, intuitivo,
                    inclusivo y funcional es mi prioridad.</span>
            </p> -->
            <p class="mb-2">I really enjoy performing <span class="font-bold">in both areas</span> and <span
                    class="font-bold">I'm
                    always looking for new opportunities</span> to grow in my professional path.</p>
            <p>When I'm not designing or coding, I'm playing tennis or taking a walk for more inspiration.</p>
            <div class="pt-4 flex">
                <a href="cv/cv_english.pdf"
                    class="textBlue font-bold text-lg inline-block hover:translate-y-1 transition-transform">
                    Download Curriculum
                    <span class="iconDownload inline-block"></span>
                </a>
            </div>
        </div>
    </div>
</template>
