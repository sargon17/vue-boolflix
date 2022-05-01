<template>
  <div class="main-section">
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Popular Movies"
      :movieList="popularMovies.results"
      :id="'popMovies1'"
      :requestData="popularMovies.requestData"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Discover Series"
      :movieList="discoverTv.results"
      :id="'discoverTv2'"
      :requestData="discoverTv.requestData"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Cartoons Movies"
      :movieList="cartoons.results"
      :requestData="cartoons.requestData"
      :id="'cartoons'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Cartoons Series"
      :movieList="cartoonsTv.results"
      :requestData="cartoonsTv.requestData"
      :id="'cartoonsTv'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Discover Italian Series"
      :movieList="discoverItalianTv.results"
      :requestData="discoverItalianTv.requestData"
      :id="'discoverItalianTv2'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Horror Night"
      :movieList="horrorMovies.results"
      :requestData="horrorMovies.requestData"
      :id="'horrorMovies2'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown && isSeriesShown"
      title="Tranding Now"
      :movieList="trandingNow.results"
      :requestData="trandingNow.requestData"
      :id="'tranding2'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Discover Ukrainian Series"
      :movieList="discoverUkrainianTv.results"
      :requestData="discoverUkrainianTv.requestData"
      :id="'discoverUkrainianTv2'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Upcoming Movies in Italy"
      :movieList="upcomingMovies.results"
      :requestData="upcomingMovies.requestData"
      :id="'upcoming3'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Upcoming Movies in USA"
      :movieList="upcomingMoviesUSA.results"
      :requestData="upcomingMoviesUSA.requestData"
      :id="'upcomingUSA3'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Documentries"
      :movieList="documentary.results"
      :requestData="documentary.requestData"
      :id="'documentary2'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="It's Crime Time"
      :movieList="crimeMovie.results"
      :requestData="crimeMovie.requestData"
      :id="'crimeMovie5'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isMovieShown"
      title="Top Rated Movies"
      :movieList="topRatedMovies.results"
      :requestData="topRatedMovies.requestData"
      :id="'rated5'"
    />
    <ItemsList
      @handleCardClick="takeCardData"
      v-if="isSeriesShown"
      title="Popular Series"
      :movieList="popularSeries.results"
      :requestData="popularSeries.requestData"
      :id="'popSeries4'"
    />
    <DetailedMovie
      :currentMovieId="currentMovieId"
      :currentMovieType="currentMovieType"
      :isShown="isCardShown"
      :selectedLanguage="language"
      @closeWindow="closeDetailedWindow"
    />
  </div>
</template>

<script>
import ItemsList from "./ItemsList.vue";
import axios from "axios";
import DetailedMovie from "./DetailedMovie.vue";
import { api_key } from "../data/api_key";
import selected_networks from "../data/selected_networks";
import { fromArrayToString } from "../utilities/networks";

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
    DetailedMovie,
  },
  data() {
    return {
      api_key,
      selected_networks,
      popularMovies: { results: [] },
      trandingNow: { results: [] },
      topRatedMovies: { results: [] },
      upcomingMovies: { results: [] },
      upcomingMoviesUSA: { results: [] },
      popularSeries: { results: [] },
      discoverTv: { results: [] },
      discoverItalianTv: { results: [] },
      discoverUkrainianTv: { results: [] },
      cartoons: { results: [] },
      cartoonsTv: { results: [] },
      crimeMovie: { results: [] },
      documentary: { results: [] },
      horrorMovies: { results: [] },
      currentMovieId: 0,
      currentMovieType: "",
      language: "it-IT",
      isCardShown: false,
      networks: "",
      childrenNetworks:
        "213 || 5536 || 5526 || 2739 || 2552 || 2534 || 2193 || 794",
    };
  },
  mounted() {
    this.networks = fromArrayToString(this.selected_networks);
    this.getElementsList("movie/popular", this.popularMovies, {
      api_key,
      language: this.language,
      region: "IT",
      with_networks: this.networks,
    });
    this.getElementsList("movie/top_rated", this.topRatedMovies, {
      api_key,
      language: this.language,
      region: "IT",
      with_networks: this.networks,
    });
    this.getElementsList("movie/upcoming", this.upcomingMovies, {
      api_key,
      language: this.language,
      region: "IT",
      with_networks: this.networks,
    });
    this.getElementsList("movie/upcoming", this.upcomingMoviesUSA, {
      api_key,
      language: this.language,
      region: "US",
      with_networks: this.networks,
    });
    this.getElementsList("tv/popular", this.popularSeries, {
      api_key,
      language: this.language,
      region: "US",
      with_networks: this.networks,
    });
    this.getElementsList("trending/all/day", this.trandingNow, {
      api_key,
      language: this.language,
      region: "IT",
      with_networks: this.networks,
    });
    this.getElementsList("discover/tv", this.discoverTv, {
      api_key,
      language: this.language,
      watch_region: "IT",
      sort_by: "popularity.desc",
      with_genres: "18",
      with_networks: this.networks,
    });
    this.getElementsList("discover/tv", this.discoverItalianTv, {
      api_key,
      language: this.language,
      watch_region: "IT",
      sort_by: "popularity.desc",
      with_genres: "18",
      with_networks: this.networks,
      with_original_language: "it",
    });
    this.getElementsList("discover/movie", this.cartoons, {
      api_key,
      language: this.language,
      watch_region: "IT",
      sort_by: "popularity.desc",
      with_genres: "16",
      with_networks: this.childrenNetworks,
      // with_original_language: "it",
    });
    this.getElementsList("discover/tv", this.cartoonsTv, {
      api_key,
      language: this.language,
      watch_region: "IT",
      sort_by: "popularity.desc",
      with_genres: "16",
      with_networks: this.childrenNetworks,
      // with_original_language: "it",
    });
    this.getElementsList("discover/movie", this.crimeMovie, {
      api_key,
      language: this.language,
      watch_region: "IT",
      sort_by: "popularity.desc",
      with_genres: "80",
      with_networks: this.networks,
      // with_original_language: "it",
    });
    this.getElementsList("discover/tv", this.documentary, {
      api_key,
      language: this.language,
      watch_region: "US",
      sort_by: "popularity.desc",
      with_genres: "99",
      with_networks: this.networks,
      // with_original_language: "it",
    });
    this.getElementsList("discover/movie", this.horrorMovies, {
      api_key,
      language: this.language,
      watch_region: "US",
      sort_by: "popularity.desc",
      with_genres: "27",
      with_networks: this.networks,
      // with_original_language: "it",
    });
    this.getElementsList("discover/tv", this.discoverUkrainianTv, {
      api_key,
      sort_by: "popularity.desc",
      with_original_language: "uk",
      // with_networks: "4222, 1625",
    });
  },

  methods: {
    getElementsList(api_call, elementsList, params) {
      axios
        .get(`https://api.themoviedb.org/3/${api_call}`, { params })
        .then((response) => {
          this.results = response.data.results;
          this.filterData(this.results, elementsList);
          elementsList.requestData = { api_call, params };
          console.log(elementsList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterData(results, elementsList) {
      elementsList.results = [];
      results.forEach((movie) => {
        if (movie.poster_path && (movie.title || movie.name)) {
          elementsList.results.push({
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
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.main-section {
  width: 100%;

  background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #141414 7.48%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -200px;
  padding-bottom: 5vh;

  @media screen and (max-width: $bf-screen-sm) {
    margin-top: -15vh;
  }
}
</style>
