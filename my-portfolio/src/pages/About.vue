<template>
    <div class="md:h-screen md:flex md:items-center justify-center max-w-5xl mx-auto p-8">
        <div class="hidden md:block mt-16 md:basis-1/2">
            <img src="/about.jpg" alt="Agustina Lopez" class="rounded-lg animated-image">
        </div>
        <div class="md:hidden mt-16 md:basis-1/4">
            <img src="/about.jpg" alt="Agustina Lopez" class="rounded-lg animated-image">
        </div>
        <div class="p-8 md:mt-16 animate__animated animate__fadeIn md:basis-3/4">
            <h1 class="uppercase text-3xl md:text-6xl mb-4">Hi!</h1>
            <p class="mb-2">I'm <span class="font-bold">Agustina López.</span></p>

            <div class="flex flex-col gap-4">
                <p>
                    I am a <strong>software developer</strong> with <strong>1 year of professional experience</strong>,
                    backed by <strong>3 years of dedicated study</strong> and <strong>hands-on practice</strong>,
                    including knowledge of
                    <strong>UX/UI design</strong>.
                </p>

                <p>
                    I’m always <strong>eager to learn</strong>, and my <strong>social skills</strong> enhance team
                    communication and
                    collaboration.
                </p>

                <p>
                    Outside of coding and design, I’m an actress, which has enhanced my creativity and
                    communication skills. I also enjoy playing tennis and taking walks to stay inspired.
                </p>
            </div>
            <div class="pt-4 flex">
                <a href="resume/agustina-lopez-resume.pdf" target="_blank"
                    class="textPink font-bold text-lg inline-block hover:translate-y-1 transition-transform">
                    Download Curriculum
                    <span class="iconDownload inline-block"></span>
                </a>
            </div>
        </div>
    </div>
</template>
