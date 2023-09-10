<template>
  <Layout>

      <SelectTranslation />

      <div class="page">

        <header class="header">
          <div>
            <Info />
            <Menu />
          </div>
          <Social />
        </header>

        <main id="content" class="content">
          <SectionItem
            :id="$t('menu.about.id')"
            :name="$t('menu.about.name')"
          >
            <SectionPresentation />
          </SectionItem>

          <SectionItem
            :id="$t('menu.experience.id')"
            :name="$t('menu.experience.name')"
          >
            <SectionExperience />
          
          </SectionItem>

          <SectionItem
            :id="$t('menu.projects.id')"
            :name="$t('menu.projects.name')"
          >
            <SectionMainProjects />
          </SectionItem>

          <SectionFooter/>
        </main>

      </div>
      
  </Layout>
</template>

<style scoped lang="postcss">
.page{
  @apply lg:flex justify-between gap-4;
  .header{
    @apply lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pb-24 pt-12;
  }
  .content{
    @apply lg:w-1/2 lg:pb-24 pt-12;
  }
}
</style>
