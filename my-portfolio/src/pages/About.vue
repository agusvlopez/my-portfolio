<template>
    <div class="md:h-screen md:flex md:items-center justify-center max-w-5xl mx-auto p-8">
        <div class="hidden md:block mt-16 md:basis-1/2">
            <img src="/about.webp" alt="Agustina Lopez" class="animated-image">
        </div>
        <div class="md:hidden mt-16 md:basis-1/4">
            <img src="/about.webp" alt="Agustina Lopez" class="animated-image">
        </div>
        <div class="p-8 md:mt-16 animate__animated animate__fadeIn md:basis-3/4">
            <h1 class="uppercase text-3xl md:text-6xl mb-4">{{ $t('about.title') }}</h1>
            <p class="mb-2 font-bold">{{ $t('about.name') }}</p>

            <div class="flex flex-col gap-4">
                <p>
                    {{ $t('about.intro') }} <strong>{{ $t('about.developer') }}</strong> 
                    {{ $t('about.with') }} <strong>{{ $t('about.experience') }}</strong>,
                    {{ $t('about.backed') }} <strong>{{ $t('about.study') }}</strong> 
                    {{ $t('about.and') }} <strong>{{ $t('about.practice') }}</strong>,
                    {{ $t('about.including') }} <strong>{{ $t('about.design') }}</strong>.
                </p>
                
                <p>{{ $t('about.paragraph2') }}</p>
                
                <p>{{ $t('about.paragraph3') }}</p>
            </div>
            <!-- si esta en español, cv en español y viceversa -->
            <div class="pt-4 flex">
                <a :href="$i18n.locale === 'en' ? '/resume/agustina-lopez-resume.pdf' : '/resume/agustina-lopez-curriculum.pdf'" 
                target="_blank"
                class="textPink font-bold text-lg inline-block hover:translate-y-1 transition-transform">
                    {{ $t('about.resume') }}
                    <span class="iconDownload inline-block"></span>
                </a>
            </div>
        </div>
    </div>
</template>
