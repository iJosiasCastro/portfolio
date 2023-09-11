<template>
  <div
    class="layout"
  >
    <div
      class="spotlight"
      style="background: -webkit-gradient(radial, 0 0, 0, 0 0, 600, from(rgb(9, 58, 56)), to(rgba(255, 255, 255, 0))), rgba(0, 0, 0, 0);"
    >
      <div
        class="container"
      >
        <SelectTranslation />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const spotlight = document.querySelector(".spotlight");
    const lightColor = "#093A38";
    const gradientSize = 600;
    let background = window
      .getComputedStyle(spotlight)
      .getPropertyValue("background-color");
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isMouseInside = false;

    spotlight.addEventListener("mousemove", (e) => {
      const x = e.pageX - spotlight.offsetLeft;
      const y = e.pageY - spotlight.offsetTop;
      const xy = x + " " + y;
      const bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, ${gradientSize}, from(${lightColor}), to(rgba(255,255,255,0.0))), ${background}`;
      const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${background} ${gradientSize}px)`;

      spotlight.style.background = bgWebKit;
      spotlight.style.background = bgMoz;

      lastMouseX = x;
      lastMouseY = y;
      isMouseInside = true;
    });

    spotlight.addEventListener("mouseleave", () => {
      isMouseInside = false;
    });
  },
};
</script>

<style lang="postcss">
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar {
  @apply w-[10px]; 
}

body::-webkit-scrollbar-thumb {
  @apply bg-teal-600;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>

<style scoped lang="postcss">
.layout{
  @apply bg-teal-950 leading-relaxed text-zinc-400 antialiased selection:bg-green-300 selection:text-green-900;
  .spotlight{
    @apply relative;
    .container{
      @apply mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0;
    }
  }
}
</style>
