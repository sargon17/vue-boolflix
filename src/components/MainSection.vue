<template>
  <div class="main-section">
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Popular Movies"
      :movieList="popularMovies"
      :id="'popMovies1'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown && isSeriesShown"
      title="Tranding Now"
      :movieList="trandingNow"
      :id="'tranding2'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Upcoming Movies"
      :movieList="upcomingMovies"
      :id="'upcoming3'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Popular Series"
      :movieList="popularSeries"
      :id="'popSeries4'"
    />

    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Top Rated Movies"
      :movieList="topRatedMovies"
      :id="'rated5'"
    />
    <DetiledMovie
      :currentMovieId="currentMovieId"
      :isShown="isCardShown"
      @closeWindow="closeDetiledWindow"
    />
  </div>
</template>

<script>
import ItemsList from "./ItemsList.vue";
import axios from "axios";
import DetiledMovie from "./DetiledMovie.vue";

export default {
  name: "HeaderComponent",
  props: {
    isMovieShown: {
      type: Boolean,
      required: true,
    },
    isSeriesShown: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ItemsList,
    DetiledMovie,
  },
  data() {
    return {
      api_key: "api_key=f4a913977d179ebb7a42d0e12e6f64cb",
      popularMovies: [],
      trandingNow: [],
      topRatedMovies: [],
      upcomingMovies: [],
      popularSeries: [],
      isCardShown: false,
      currentMovieId: 0,
    };
  },
  mounted() {
    this.getElementsList("movie/popular", this.popularMovies, "it-IT");
    this.getElementsList("movie/top_rated", this.topRatedMovies, "it-IT");
    this.getElementsList("movie/upcoming", this.upcomingMovies, "it-IT");
    this.getElementsList("tv/popular", this.popularSeries, "it-IT");
    this.getElementsList("trending/all/week", this.trandingNow, "it-IT");
  },

  methods: {
    getItemsList(param) {
      console.log(param);
      this.getElementsList(param.api_call, param.elements, param.language);
      param.elements.splice(0, 20);
      console.log("elements", param.elements);
      return param.elements;
    },

    getElementsList(api_call, elementsList, language) {
      axios
        .get(
          `https://api.themoviedb.org/3/${api_call}?${this.api_key}&language=${language}`
        )
        .then((response) => {
          this.results = response.data.results;
          this.results.forEach((movie) => {
            if (movie.poster_path && (movie.title || movie.name)) {
              elementsList.push({
                title: movie.title || movie.name,
                id: movie.id,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                original_title: movie.original_title
                  ? movie.original_title
                  : movie.original_name,
                language: movie.original_language,
                origin_country: movie.origin_country
                  ? movie.origin_country[0]
                  : "",
              });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    takeCardData(data) {
      console.log("data", data);
      this.currentMovieId = data;
      this.isCardShown = true;
      console.log("card shown", this.isCardShown);
    },
    closeDetiledWindow() {
      this.isCardShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  width: 100%;

  background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #141414 7.48%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -200px;
  padding-bottom: 5vh;
}
</style>
