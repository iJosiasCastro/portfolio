<template>
  <nav class="nav">
    <ul class="mt-16 w-max">
      <li v-for="(section, i) in sections" :key="i">
        <a class="group flex items-center py-3" :href="'#' + section">
          <span
            class="nav-indicator"
            :class="{'nav-indicator-active': activeSection == section}"
          ></span>
          <span
            class="nav-text"
            :class="{'nav-text-active': activeSection == section}"
          >{{ $t('menu.' + section ) }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const sections = ['about', 'experience', 'projects'];

const activeSection = ref('about');
onMounted(()=>{  
  const checkActiveSection = () => {
    for (const section of sections) {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
  
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        activeSection.value = section;
        break;
      }
    }
  };

  
  window.addEventListener('scroll', checkActiveSection);
  checkActiveSection();
});
</script>

<style scoped lang="postcss">
.nav{
  @apply hidden lg:block;
}
.nav-indicator{
 @apply mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-zinc-200 group-focus-visible:w-16 group-focus-visible:bg-zinc-200 motion-reduce:transition-none;
}

.nav-indicator-active{
  @apply w-16 bg-zinc-200;
}
.nav-text{
  @apply text-sm font-semibold uppercase tracking-wide text-zinc-500 group-hover:text-zinc-200 group-focus-visible:text-zinc-200;
}
.nav-text-active{
  @apply text-zinc-200;
}
</style>