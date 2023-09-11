<template>
  <Layout>
  
      <div class="page">

        <header class="header">
          <div class="info-container">
            <Info />
            <Menu />
          </div>
          <Social />
        </header>

        <main id="content" class="content">
          <SectionItem
            id="about"
            :name="$t('menu.about')"
          >
            <SectionPresentation />
          </SectionItem>

          <SectionItem
            id="experience"
            :name="$t('menu.experience')"
          >
            <SectionExperience />
          
          </SectionItem>

          <SectionItem
            id="projects"
            :name="$t('menu.projects')"
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
    .info-container{
      @apply pt-12;
    }
  }
  .content{
    @apply lg:w-1/2 lg:pb-24 pt-12;
  }
}
</style>
