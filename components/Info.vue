<template>
  <div>
    <h1 class="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
      <NuxtLink :to="localePath('/')">{{ $t('info_name') }}</NuxtLink>
    </h1>
    <h2 class="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
      {{ $t('info_role') }}
    </h2>
    <p class="mt-4 max-w-xs leading-normal">
      {{ $t('info_paragraph') }}
    </p>
  </div>
</template>

<script setup>
  const localePath = useLocalePath()
</script>