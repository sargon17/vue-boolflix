<template>
  <div id="app">
    <Header />
    <Hero />
    <MainSection />
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import Hero from "./components/HeroComponent.vue";
import MainSection from "./components/MainSection.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
    MainSection,
  },
};
</script>

<style lang="scss">
@import "styles/general.scss";

#app {
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  background: #141414;
}
</style>
