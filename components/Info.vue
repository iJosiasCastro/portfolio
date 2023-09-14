<template>
  <div>
    <h1 class="info-name">
      <img src="/profile_photo.jpg" class="profile-photo" :alt="$t('info_profile_photo_alt')">
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
  @apply text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl flex gap-2 items-center;
}

.info-role{
  @apply mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl;
}

.info-paragraph{
  @apply mt-4 max-w-xs leading-normal;
}
.profile-photo{
  @apply w-20 mt-1 rounded-full;
}
</style>