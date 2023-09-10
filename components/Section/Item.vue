<template>
    <section
        :id="id"
        class="section-container"
        :aria-label="name"
    >
    <div
        class="section"
    >
        <h2
        class="section-name"
        >
         {{  name }}
        </h2>
    </div>
    <div>
        <slot></slot>
    </div>
    </section>
</template>

<script>
export default {
    props:['data', 'id', 'name'],
}
</script>

<style scoped lang="postcss">
.section-container{
    @apply mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24;
    .section{
        @apply sticky top-0 z-20 -mx-6 mb-4 w-screen bg-teal-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0;
        .section-name{
            @apply text-sm font-semibold uppercase tracking-wide text-zinc-200 lg:sr-only;
        }
    }
}
</style>
