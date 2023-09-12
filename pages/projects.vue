<template>
  <Layout>
    <div class="project-list">
      <NuxtLink
        class="group back-to-home-link"
        :to="localePath('/')"
      >
        <IconArrowLeft></IconArrowLeft>
        {{ $t("projects_label_link_home") }}
      </NuxtLink>
      <h1 class="project-list-title">
        {{ $t("projects_title") }}
      </h1>
      <table id="content" class="project-list-table">
        <thead class="project-list-table-head">
          <tr>
            <th class="project-list-table-header">
              {{ $t("projects_table_columns.year") }}
            </th>
            <th class="project-list-table-header">
              {{ $t("projects_table_columns.project") }}
            </th>
            <th
              class="project-list-table-header-lg"
            >
              {{ $t("projects_table_columns.made_at") }}
            </th>
            <th
              class="project-list-table-header-lg"
            >
              {{ $t("projects_table_columns.built_with") }}
            </th>
            <th
              class="project-list-table-header-sm"
            >
              {{ $t("projects_table_columns.link") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="project-list-row"
            v-for="(project, i) in projects"
            :key="i"
          >
            <td class="project-year">
              <div>{{ project.year }}</div>
            </td>
            <td class="project-title-mobile">
              <div>
                <div class="block sm:hidden">
                  <component
                    :is="project.link ? 'a' : 'div'"
                    class="group/link project-link-mobile"
                    :href="project.link"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="project.project"
                  >
                    <span>
                      <span class="project-title-mobile">
                        {{ project.project }}
                        <IconArrowUpRight v-if="project.link" />
                      </span>
                    </span>
                  </component>

                </div>
                <div class="project-title">{{ project.project }}</div>
              </div>
            </td>
            <td class="project-made-at">
              <div>{{ project.made_at }}</div>
            </td>
            <td class="project-built-with">
              <ul class="project-built-with-list">
                <li class="project-built-with-item" v-for="(item, e) in project.built_with" :key="e">
                  <div
                    class="project-built-with-item-content"
                  >
                    {{ item }}
                  </div>
                </li>
              </ul>
            </td>
            <td class="project-link-cell">
              <ul class="translate-y-1">
                <li class="mb-1 flex items-center">
                  <a
                    v-if="project.link"
                    class="group/link project-link"
                    :href="project.link"
                    target="_blank"
                    rel="noreferrer"
                    :aria-label="project.link.replace(/^https:\/\//, '').replace(/\/.*$/, '')"
                    ><span>
                      <span class="project-link-label">
                        {{ project.link.replace(/^https:\/\//, '').replace(/\/.*$/, '') }}
                        <IconArrowUpRight />
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script setup>
import es from "~/i18n/es.js";
import en from "~/i18n/en.js";
const { locale: actualLocale, t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t('projects_page_title')
})


const projects = computed(() => {
  return actualLocale.value == "es" ? es.projects : en.projects;
});

</script>

<style scoped lang="postcss">
.project-list {
  @apply lg:py-20 pt-20;
  .back-to-home-link {
    @apply mb-2 inline-flex items-center font-semibold leading-tight text-green-300;
  }
  .project-list-title {
    @apply text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl;
  }
  .project-list-table {
    @apply mt-12 w-full border-collapse text-left;
    .project-list-table-head {
      @apply sticky top-0 z-10 px-6 py-5 backdrop-blur;
    }
    .project-list-table-header {
      @apply py-4 pr-8 text-sm font-semibold text-slate-200;
    }
    .project-list-table-header-sm {
      @apply hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell;
    }
    .project-list-table-header-lg {
      @apply hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell;
    }
    .project-list-row {
      @apply border-b border-slate-300/10 last:border-none;
      .project-year {
        @apply py-4 pr-4 md:align-top text-sm;
      }
      .project-title-mobile {
        @apply py-4 pr-4 align-top font-semibold leading-snug text-slate-200;
      }
      .project-link-mobile {
        @apply inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300 hover:text-slate-200 focus-visible:text-green-300 sm:hidden text-base;
      }
      .project-title-mobile {
        @apply inline-block;
      }
      .project-title {
        @apply hidden sm:block;
      }
      .project-made-at {
        @apply hidden py-4 pr-4 align-top text-sm lg:table-cell;
      }
      .project-built-with {
        @apply hidden py-4 pr-4 align-top lg:table-cell;
        .project-built-with-list {
          @apply flex -translate-y-1.5 flex-wrap;
          .project-built-with-item {
            @apply my-1 mr-1.5;
            .project-built-with-item-content {
              @apply flex items-center rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300;
            }
          }
        }
      }
      .project-link-cell {
        @apply hidden py-4 align-top sm:table-cell;
        .project-link {
          @apply inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-green-300 text-sm;
          .project-link-label {
            @apply inline-block;
          }
        }
      }
    }

  }
}
</style>