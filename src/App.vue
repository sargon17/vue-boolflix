<template>
  <div id="app">
    <Header />
    <Hero />
  </div>
</template>

<script>
import Header from "./components/HeaderComponent.vue";
import Hero from "./components/HeroComponent.vue";

export default {
  name: "App",
  components: {
    Header,
    Hero,
  },
};
</script>

<style lang="scss">
@import "styles/general.scss";

#app {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: #141414;
}
</style>
