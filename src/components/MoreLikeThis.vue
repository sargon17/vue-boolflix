<template>
  <div class="mlt-section" id="moreLikeThis" @wheel="(e) => handleScroll(e)">
    <div class="mlt-container">
      <div class="close-btn">
        <button class="icon-btn" @click="closePage">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
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
        <div class="mlt__more-btn">
          <button class="btn secondary-btn" @click="getMoreResults">
            Mostra altri risultati
          </button>
        </div>
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
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;

  .mlt-container {
    height: 90vh;
    width: 100%;
    position: relative;

    .cards-grid {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 0 64px;
      gap: 4px;
      max-width: 100%;
      overflow: auto;
    }
  }
}

.close-btn {
  position: fixed;
  top: 10vh;
  right: 10px;
}
</style>
