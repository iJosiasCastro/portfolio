<template>
  <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
    <li v-for="(socialMedia, index) in socialMediaLinks" :key="index" class="mr-5 text-xs">
      <a
        class="block hover:text-zinc-200"
        :href="socialMedia.url"
        target="_blank"
        rel="noreferrer"
      >
        <span class="sr-only">{{ socialMedia.name }}</span>
        <component :is="socialMedia.iconComponent" />
      </a>
    </li>
  </ul>
</template>

<script>
import IconLinkedin from './Icon/Linkedin.vue';
import IconGitHub from './Icon/GitHub.vue';
import IconInstagram from './Icon/Instagram.vue';

export default {
  data() {
    return {
      socialMediaLinks: [
        { name: 'GitHub', url: 'https://github.com/iJosiasCastro', iconComponent: IconGitHub },
        { name: 'Instagram', url: 'https://instagram.com/iJosiasCastro', iconComponent: IconInstagram },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/josiascastro', iconComponent: IconLinkedin }
      ],
    };
  },
};
</script>
