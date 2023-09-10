<template>
  <div class="flex justify-end">

    <SelectDropdown
      v-if="locales.length > 1"
      :items="[locales]"
      :strategy="'absolute'"
      placement="bottom"
      mode="hover"
      class="inline-flex items-center mt-5 p-2"
    >
      <template #trigger>
        <IconTranslation />
        <IconArrowDown />
      </template>

      <template #item="{ item: locale }">
        <NuxtLink
          :to="switchLocalePath(locale.code)"
          class="px-4 py-1 flex items-center whitespace-no-wrap"
          :class="[
            locale.code === actualLocale
              ? 'font-semibold cursor-default text-gray-200'
              : 'hover:d-text-primary',
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
