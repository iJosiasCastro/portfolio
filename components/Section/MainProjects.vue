<template>
  <div>
    <ul class="group/list">
      <li class="mb-12" v-for="(project, i) in main_projects" :key="i">
        <div
          class="group projects"
        >
          <div
            class="project-background"
          ></div>
          <div class="project-info">
            <h3>
              <a
                class="group/link project-link"
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                :aria-label="project.title"
              >
                  <span class="project-link-span">
                  </span>
                <span>
                  {{ project.title }}
                  <span>
                    <IconArrowUpRight />
                  </span>
                </span>
              </a>
            </h3>
            <p class="project-description">
              {{ project.description }}
            </p>
          </div>
          <img
            alt=""
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            data-nimg="1"
            class="project-thumbnail"
            :src="`/images/${project.thumbnail}`"
          />
        </div>
      </li>
    </ul>
    <div class="mt-12">
      <NuxtLink
        class="group view-projects-link"
        :aria-label="$t('view_projects_button')"
        :to="localePath('/proyects')"
      >
        <span>
          <span
            class="view-projects-button"
          >
            {{ $t("view_projects_button") }}
          </span>
          <span>
            <IconArrowRight />
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import es from '~/i18n/es.js';
import en from '~/i18n/en.js';

const localePath = useLocalePath()

const { locale: actualLocale } = useI18n();

const main_projects = computed(()=>{
  return actualLocale.value == 'es' ? es.main_projects : en.main_projects;;
});
</script>

<style scoped lang="postcss">
.projects{
  @apply relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50;
}
.project-background{
  @apply absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/30;
}
.project-info{
  @apply z-10 sm:order-2 sm:col-span-6;
  .project-link-span{
    @apply absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block;
  }
  .project-link{
    @apply inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-green-300 focus-visible:text-green-300 text-base;
  }
  .project-description{
    @apply mt-2 text-sm leading-normal;
  }
}
.project-thumbnail{
  @apply rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2;
}

.view-projects-link{
  @apply inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold text-zinc-200;
}
.view-projects-button{
    @apply border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none;
}
</style>