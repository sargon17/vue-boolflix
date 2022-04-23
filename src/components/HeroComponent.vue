<template>
  <div id="hero" class="hero">
    <div class="hero__img">
      <img :src="getPoster(mainMovie.backdrop_path, 'original')" alt="" />
      <div class="hero__img-bg"></div>
    </div>
    <div class="hero-new-movie-info">
      <div class="hero-new-movie-info__netflix-serie">
        <img :src="netflixLogo" alt="netflix logo" />
        <h6>Show</h6>
      </div>
      <div class="hero-new-movie-info__title">
        <h1>{{ mainMovie.title || mainMovie.name }}</h1>
        <h6>{{ maxTextLength(mainMovie.overview, 220) }}</h6>
      </div>
      <div class="hero-new-movie-info__toolbox">
        <button class="btn main-btn">
          <img :src="playIcon" alt="play icon" />
          Play
        </button>
        <button class="btn secondary-btn" @click="isCardShown = !isCardShown">
          <img :src="infoIcon" alt="plus icon" />
          More Info
        </button>
      </div>
    </div>
    <DetailedMovie
      :currentMovieId="currentMovieId"
      :currentMovieType="currentMovieType"
      :isShown="isCardShown"
      :selectedLanguage="selectedLanguage"
      @closeWindow="closeDetailedWindow"
    />
  </div>
</template>

<script>
import netflixLogo from "../img/icons/Netflix_Symbol_RGB 1.svg";
import playIcon from "../img/icons/chevron-right.svg";
import infoIcon from "../img/icons/info.svg";
import axios from "axios";
import { api_key } from "../data/api_key";
import DetailedMovie from "./DetailedMovie.vue";

export default {
  name: "HeroComponent",
  components: {
    DetailedMovie,
  },
  data() {
    return {
      netflixLogo,
      playIcon,
      infoIcon,
      api_key,
      mainMovie: {},
      currentMovieId: "",
      currentMovieType: "",
      selectedLanguage: "it",
      isCardShown: false,
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?${this.api_key}&language=it-IT&region=IT`
      )
      .then((response) => {
        this.mainMovie =
          response.data.results[
            this.randomInRange(0, response.data.results.length - 1)
          ];
        this.currentMovieId = this.mainMovie.id;
        this.currentMovieType = this.mainMovie.media_type
          ? this.mainMovie.media_type
          : "tv";
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    getPoster(poster = "", size = "w342") {
      return `https://image.tmdb.org/t/p/${size}${poster}`;
    },
    randomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    maxTextLength(text, maxLength) {
      if (text && text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      } else {
        return text;
      }
    },
    closeDetailedWindow() {
      this.isCardShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.hero {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: #141414;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .hero__img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero__img-bg {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.6) 60%
      );
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  &-new-movie-info {
    position: absolute;
    top: 40%;
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
        max-width: 80%;
      }

      h6 {
        font-size: $bf-text-size-small;
        font-weight: $bf-text-thin;
        color: #fff;
        max-width: 60vw;
        line-height: 1.1;
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

  @media screen and (max-width: $bf-screen-sm) {
    .hero__img-bg {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.6) 60%
      );
    }
    .hero-new-movie-info {
      top: 30%;
      margin-left: 20px;
      margin-top: 0;

      &__netflix-serie {
        gap: 0.5rem;

        img {
          width: 20px;
          height: 20px;
        }
        h6 {
          font-size: 1rem;
        }
      }

      &__title {
        h1 {
          font-size: 2rem;
        }
        h6 {
          max-width: 80vw;
          font-size: $bf-text-size-small;
        }
      }
    }
  }
  @media screen and (max-width: $bf-screen-xs) {
    .hero-new-movie-info {
      top: 30%;
      margin-left: 20px;
      margin-top: 0;
      &__title {
        h1 {
          font-size: 1.5rem;
          width: 100%;
        }
        h6 {
          max-width: 80vw;
          font-size: $bf-text-size-xSmall;
        }
      }
    }
  }
}
</style>
