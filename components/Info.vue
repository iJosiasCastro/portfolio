<template>
  <div>
    <h1 class="info-name">
      <NuxtLink :to="localePath('/')">{{ $t('info_name') }}</NuxtLink>
    </h1>
    <h2 class="info-role">
      {{ $t('info_role') }}
    </h2>
    <p class="info-paragraph">
      {{ $t('info_paragraph') }}
    </p>
  </div>
</template>

<script setup>
  const localePath = useLocalePath()
</script>

<style scoped lang="postcss">
.info-name{
  @apply text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl;
}

.info-role{
  @apply mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl;
}

.info-paragraph{
  @apply mt-4 max-w-xs leading-normal;
}
</style>