<template>
  <div id="app" @wheel="checkPosition()">
    <Header
      :isTop="isTop"
      :isMovieShown="isMovieShown"
      :isSeriesShown="isSeriesShown"
      @navigation-click="setSection"
    />
    <Hero />
    <MainSection :isMovieShown="isMovieShown" :isSeriesShown="isSeriesShown" />
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
      isMovieShown: true,
      isSeriesShown: true,
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
    setSection(section) {
      if (section === "start") {
        this.isMovieShown = true;
        this.isSeriesShown = true;
      } else if (section === "movies") {
        this.isMovieShown = true;
        this.isSeriesShown = false;
      } else if (section === "shows") {
        this.isMovieShown = false;
        this.isSeriesShown = true;
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
