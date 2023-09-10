<template>
  <footer class="footer" v-html="$t('footer_paragraph')">
  </footer>
</template>

<style lang="postcss">
.footer a{
  @apply font-medium text-zinc-200 hover:text-green-300 focus-visible:text-green-300;
}
</style>

<style scoped lang="postcss">
.footer{
  @apply max-w-md pb-16 text-sm text-zinc-500 sm:pb-0;
}
</style>
