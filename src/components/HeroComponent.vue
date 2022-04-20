<template>
  <div id="hero" class="hero">
    <div class="hero-new-movie-info">
      <div class="hero-new-movie-info__netflix-serie">
        <img :src="netflixLogo" alt="netflix logo" />
        <h6>Show</h6>
      </div>
      <div class="hero-new-movie-info__title">
        <h1>The Witcher</h1>
        <h6>Season 3</h6>
      </div>
      <div class="hero-new-movie-info__toolbox">
        <button class="btn main-btn">
          <img :src="playIcon" alt="play icon" />
          Play
        </button>
        <button class="btn secondary-btn">
          <img :src="infoIcon" alt="plus icon" />
          More Info
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import netflixLogo from "../img/icons/Netflix_Symbol_RGB 1.svg";
import playIcon from "../img/icons/chevron-right.svg";
import infoIcon from "../img/icons/info.svg";
export default {
  name: "HeroComponent",
  data() {
    return {
      netflixLogo,
      playIcon,
      infoIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.hero {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: #141414
    url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.film-rezensionen.de%2Fwp-content%2Fuploads%2F2020%2F02%2FLocke-and-Key-Staffel-1-Frontpage-scaled.jpg&f=1&nofb=1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &-new-movie-info {
    position: absolute;
    top: 50%;
    margin-left: 64px;

    &__netflix-serie {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h6 {
        font-weight: $bf-text-bold;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
      }
    }

    &__title {
      margin-top: 1rem;
      h1 {
        font-size: 5rem;
        font-weight: $bf-text-bold;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
      }

      h6 {
        font-size: 1.5rem;
        font-weight: $bf-text-bold;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
      }
    }

    &__toolbox {
      margin: 20px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 24px;
    }
  }
}
</style>
