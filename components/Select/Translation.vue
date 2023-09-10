<template>
  <div class="translation-container">

    <SelectDropdown
      v-if="locales.length > 1"
      :items="[locales]"
      :strategy="'absolute'"
      placement="bottom"
      mode="hover"
      class="select-dropdown"
    >
      <template #trigger>
        <IconTranslation />
        <IconArrowDown />
      </template>

      <template #item="{ item: locale }">
        <NuxtLink
          :to="switchLocalePath(locale.code)"
          class="language-item"
          :class="[
            locale.code === actualLocale
              ? 'language-active'
              : '', 
          ]"
          >{{ locale.name }}</NuxtLink
        >
      </template>
    </SelectDropdown>
  </div>
</template>

<script setup>
  const { locale: actualLocale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
</script>

<style scoped lang="postcss">
.translation-container{
  @apply flex justify-end;
  .select-dropdown{
    @apply inline-flex items-center mt-5 p-2;
  }
  .language-item{
    @apply px-4 py-1 flex items-center;
  }
  .language-active{
    @apply font-semibold cursor-default text-gray-200;
  }
}
</style>
