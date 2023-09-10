<template>
  <Layout>

      <SelectTranslation />

      <div class="lg:flex justify-between gap-4">

        <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pb-24 pt-12">
          <div>
            <Info />
            <Menu />
          </div>
          <Social />
        </header>

        <main id="content" class="pt-24 lg:w-1/2 lg:pb-24 pt-12">
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
