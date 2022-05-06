<template>
  <div class="mlt-section" id="moreLikeThis" @wheel="(e) => handleScroll(e)">
    <div class="mlt-container">
      <div class="mlt-header">
        <h2>{{ title }}</h2>
        <div class="close-btn">
          <button @click="closePage">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
      <div class="cards-grid">
        <card-component
          @handleCardClick="takeCardData"
          v-for="{
            title,
            id,
            poster_path,
            vote_average,
            original_title,
            language,
            origin_country,
            media_type,
          } in movies"
          :id="id"
          :title="title"
          :key="id + title + original_title + poster_path"
          :poster="poster_path"
          :vote_average="vote_average"
          :original_title="original_title"
          :language="language"
          :origin_country="origin_country"
          :media_type="media_type"
        />
      </div>
      <div class="mlt__more-btn">
        <button class="btn secondary-btn" @click="getMoreResults">
          Mostra altri risultati
        </button>
      </div>
    </div>
    <DetailedMovie
      :currentMovieId="currentMovieId"
      :currentMovieType="currentMovieType"
      :isShown="isCardShown"
      :selectedLanguage="selectLanguage"
      @closeWindow="closeDetailedWindow"
    />
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "./CardComponent.vue";
import DetailedMovie from "./DetailedMovie.vue";
export default {
  name: "MoreLikeThis",
  components: {
    CardComponent,
    DetailedMovie,
  },
  data() {
    return {
      movies: [],
      page: 1,
      currentMovieId: 0,
      currentMovieType: "",
      isCardShown: false,
      selectLanguage: "it",
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    getMovies() {
      let params = { ...this.data.params, page: this.page };
      axios
        .get(`https://api.themoviedb.org/3/${this.data.api_call}?`, {
          params,
        })
        .then((res) => {
          //   this.movies = res.data.results;
          this.filterData(res.data.results, this.movies);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterData(results, elementsList) {
      results.forEach((movie) => {
        if (movie.poster_path && (movie.title || movie.name)) {
          elementsList.push({
            title: movie.title || movie.name,
            id: movie.id,
            media_type: movie.title ? "movie" : "tv",
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            original_title: movie.original_title
              ? movie.original_title
              : movie.original_name,
            language: movie.original_language,
            origin_country: movie.origin_country ? movie.origin_country[0] : "",
          });
        }
      });
    },
    closePage() {
      this.$emit("closePage");
    },
    handleScroll(e) {
      e.preventDefault();
      const element = document.querySelector("#moreLikeThis");
      element.scrollBy({
        top: -e.wheelDeltaY * 2,
        behavior: "smooth",
      });
    },
    getMoreResults() {
      this.page++;
    },
    takeCardData(data) {
      // console.log("data", data);
      this.currentMovieId = data[0];
      this.currentMovieType = data[1];
      this.isCardShown = true;
      // console.log("card shown", this.isCardShown);
    },
    closeDetailedWindow() {
      this.isCardShown = false;
    },
  },
  mounted() {
    this.getMovies();
    this.page++;
  },
  watch: {
    page: function () {
      this.getMovies();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general";
.mlt-section {
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.86);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: auto;

  .mlt-header {
    position: fixed;
    top: 0rem;
    width: 100%;
    height: 60px;
    z-index: 9;

    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 5%,
      rgba(255, 255, 255, 0) 100%
    );

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }
    .close-btn {
      button {
        display: flex;
        padding: 1rem;
        aspect-ratio: 1;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        color: $bf-white-normal-hover;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        & * {
          color: $bf-white-normal-hover;
          font-size: 1rem;
          transition: $bf-transition;
        }
        &:hover {
          color: $bf-white-normal;
          background-color: $bf-grey-transparent;

          & * {
            color: $bf-white-normal;
          }
        }
      }
    }
  }

  .mlt-container {
    height: 90vh;
    width: 100%;
    position: relative;

    .cards-grid {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 0 64px;
      gap: 4px;
      // max-width: 100%;
      overflow: auto;
      @media screen and (max-width: $bf-screen-sm) {
        padding: 0;
        width: 100%;
        justify-content: center;
        gap: 8px;
        align-items: start;
      }
    }
  }

  @media screen and (max-width: $bf-screen-sm) {
    padding: 1rem 0 2rem 0;
  }
}

.mlt__more-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  button {
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    color: $bf-white-normal-hover;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    & * {
      color: $bf-white-normal-hover;
      font-size: 1rem;
      transition: $bf-transition;
    }
    &:hover {
      color: $bf-white-normal;
      background-color: $bf-grey-transparent;

      & * {
        color: $bf-white-normal;
      }
    }
  }
  @media screen and (max-width: $bf-screen-sm) {
    margin: 2rem 0 4rem 0;
  }
}
</style>
