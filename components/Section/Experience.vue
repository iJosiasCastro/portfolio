<template>
  <div>
    <ol class="group/list">
      <li class="mb-12" v-for="(experience, i) in experiences" :key="i">
        <div
          class="group experiences"
        >
          <div
            class="experience-background"
          ></div>
          <header
            class="experience-header"
            :aria-label="experience.time_from + ' to ' + experience.time_to"
          >
            {{ experience.time_from }} — {{ experience.time_to }}
          </header>
          <div class="experience-info">
            <h3 class="">
              <a
                class="group/link experience-link"
                :href="experience.link"
                target="_blank"
                rel="noreferrer"
                :aria-label="experience.title"
              >
                <span class="experience-link-span">
                </span>
                <span>
                  {{ experience.title }}
                  <span>
                    <IconArrowUpRight />
                  </span>
                </span>
              </a>
            </h3>
            <p class="experience-description">
              {{ experience.description }}
            </p>
            <ul class="skills-list" aria-label="Technologies used">
              <li class="skill-item" v-for="(skill, e) in experience.skills" :key="e">
                <div
                  class="skill"
                >
                  {{ skill }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ol>
    <div class="mt-12">
      <a
        class="group view-resume-link"
        :aria-label="$t('view_resume_button')"
        href="/resume.pdf"
      >
        <span>
          <span
            class="view-resume-button"
            >
            {{ $t('view_resume_button') }}
          </span>
          <span>
            <IconArrowRight />
          </span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import es from '~/i18n/es.js';
import en from '~/i18n/en.js';

const { locale: actualLocale } = useI18n()

const experiences = computed(()=>{
  return actualLocale.value == 'es' ? es.experiences : en.experiences;;
});
</script>

<style scoped lang="postcss">
.experiences{
  @apply  relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50;
}
.experience-background{
  @apply absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/20;
}
.experience-header{
  @apply z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 sm:col-span-2;
}
.experience-info{
  @apply z-10 sm:order-2 sm:col-span-6;
  .experience-link-span{
    @apply absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block;
  }
  .experience-link{
    @apply inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-green-300 focus-visible:text-green-300 text-base;
  }
  .experience-description{
    @apply mt-2 text-sm leading-normal;
}
}


.skills-list{
  @apply mt-2 flex flex-wrap;
  .skill-item{
    @apply mr-1.5 mt-2;
    .skill{
      @apply flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300;
    }
  }
}
.view-resume-link{
  @apply inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold text-zinc-200;
}
.view-resume-button{
  @apply border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none;
}
</style>
