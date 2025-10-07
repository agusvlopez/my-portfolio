<template>
    <section>
        <div class="md:h-screen mt-[100px] lg:mt-0 flex items-center justify-center flex-col pt-8 max-w-3xl mx-auto">
            <h1 class="uppercase text-6xl md:text-9xl mb-4">
                <span class="block text-4xl font-bold text-left">{{ $t('home.title1') }}</span>
                <span class="block">{{ $t('home.title2') }}</span>
            </h1>

            <!-- Enlaces a LinkedIn y GitHub -->
            <div class="flex space-x-8 text-xl font-bold">
                <a href="https://www.linkedin.com/in/agustina-victoria-lopez/" target="_blank"
                    class="textPink relative group">
                    LinkedIn
                    <span
                        class="iconArrowRight inline-block align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span
                        class="absolute bottom-0 left-0 right-0 h-0.5 backgroundPink transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="https://github.com/agusvlopez" target="_blank" class="textPink relative group">
                    Github
                    <span
                        class="iconArrowRight inline-block align-middle opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span
                        class="absolute bottom-0 left-0 right-0 h-0.5 backgroundPink transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
                <a href="https://www.figma.com/@agustinalopez" target="_blank" class="textPink relative group">
                    Figma
                    <span
                        class="iconArrowRight inline-block align-middle opacity-0 group-hover:opacity-100  transition-opacity duration-300"></span>
                    <span
                        class="absolute bottom-0 left-0 right-0 h-0.5 backgroundPink transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
            </div>
            <p class="pt-6 font-semibold text-[#f5f5f5] animate__animated animate__fadeIn">{{ $t('home.contact') }}:
                agusvlopez@gmail.com
            </p>
        </div>

    </section>
</template>
