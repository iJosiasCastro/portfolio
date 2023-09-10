<template>
  <div class="presentation">
    <div v-html="$t('about_paragraph')">
    </div>
  </div>
</template>

<style lang="postcss">
.presentation{
  a{
    @apply font-medium text-zinc-200 hover:text-green-300 focus-visible:text-green-300;
  }

  p{
    @apply mb-4;
  }
}
</style>
