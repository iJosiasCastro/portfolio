<template>
  <nav class="nav hidden lg:block" aria-label="In-page jump links">
    <ul class="mt-16 w-max">
      <li v-for="(section, i) in sections" :key="i">
        <a class="group flex items-center py-3" :href="'#' + $t('menu.' + section + '.id')">
          <span
            class="nav-indicator mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none"
          ></span>
          <span
            class="nav-text text-sm font-semibold uppercase tracking-wide text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200"
          >{{ $t('menu.' + section + '.name') }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const sections = ['about', 'experience', 'projects'];
</script>