<template>
  <div>
    <ol class="group/list">
        
      <li class="mb-12" v-for="(experience, i) in experiences" :key="i">
        <a
          :href="experience.link"
          target="_blank"
          rel="noreferrer"
          class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/20"
          ></div>
          <header
            class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2"
            :aria-label="experience.time_from + ' to ' + experience.time_to"
          >
            {{ experience.time_from }} — {{ experience.time_to }}
          </header>
          <div class="z-10 sm:col-span-6">
            <h3 class="font-medium leading-snug text-zinc-200">
              <div>
                <a
                  class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-green-300 focus-visible:text-green-300 group/link text-base"
                  :href="experience.link"
                  target="_blank"
                  rel="noreferrer"
                  :aria-label="experience.title"
                >
                  <span>
                    {{ experience.title }}
                    <span class="inline-block">
                      <IconArrowUpRight />
                    </span>
                  </span>
                </a>
              </div>
              <div>
                <div class="text-zinc-500" aria-hidden="true">{{ experience.subtitle }}</div>
              </div>
            </h3>
            <p class="mt-2 text-sm leading-normal">
              {{ experience.description }}
            </p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
              <li class="mr-1.5 mt-2" v-for="(skill, e) in experience.skills" :key="e">
                <div
                  class="flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300"
                >
                  {{ skill }}
                </div>
              </li>
            </ul>
          </div>
        </a>
      </li>
      
    </ol>
    <div class="mt-12">
      <a
        class="inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold text-zinc-200 group"
        :aria-label="$t('view_resume_button')"
        href="/resume.pdf"
      >
        <span>
          <span
            class="border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none"
            >
            {{ $t('view_resume_button') }}
          </span>
          <span class="whitespace-nowrap">
            <ArrowRight />
          </span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import es from '~/i18n/es.js';
import en from '~/i18n/es.js';

const { locale: actualLocale } = useI18n()

const { experiences } = actualLocale == 'es' ? es : en;

</script>