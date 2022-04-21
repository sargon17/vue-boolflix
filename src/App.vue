<template>
  <div id="app" @wheel="checkPosition()">
    <Header :isTop="isTop" />
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
  data() {
    return {
      isTop: true,
    };
  },
  components: {
    Header,
    Hero,
    MainSection,
  },
  methods: {
    checkPosition() {
      if (window.pageYOffset > 0 || window.scrollY > 0) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
    },
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
