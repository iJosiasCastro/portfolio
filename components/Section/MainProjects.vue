<template>
  <div>
    <ul class="group/list">
      <li class="mb-12" v-for="(project, i) in main_projects" :key="i">
        <div
          class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
        >
          <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-zinc-800/30"
          ></div>
          <div class="z-10 sm:order-2 sm:col-span-6">
            <h3>
              <a
                class="inline-flex items-baseline font-medium leading-tight text-zinc-200 hover:text-green-300 focus-visible:text-green-300 group/link text-base"
                :href="project.link"
                target="_blank"
                rel="noreferrer"
                :aria-label="project.title"
              >
                <span
                  class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                ></span>
                <span>
                  {{ project.title }}
                  <span class="inline-block">
                    <IconArrowUpRight />
                  </span>
                </span>
              </a>
            </h3>
            <p class="mt-2 text-sm leading-normal">
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
            class="rounded border-2 border-zinc-200/10 transition group-hover:border-zinc-200/30 sm:order-1 sm:col-span-2 sm:tranzinc-y-1"
            :src="`/images/${project.thumbnail}`"
            style="color: transparent"
          />
        </div>
      </li>
    </ul>
    <div class="mt-12">
      <a
        class="inline-flex items-center font-medium leading-tight text-zinc-200 font-semibold text-zinc-200 group"
        :aria-label="$t('view_projects_button')"
        href="/archive"
      >
        <span>
          <span
            class="border-b border-transparent pb-px transition group-hover:border-green-300 motion-reduce:transition-none"
          >
            {{ $t("view_projects_button") }}
          </span>
          <span class="whitespace-nowrap">
            <IconArrowRight />
          </span>
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
import es from "~/i18n/es.js";
import en from "~/i18n/es.js";

const { locale: actualLocale } = useI18n();

const { main_projects } = actualLocale == "es" ? es : en;
</script>
