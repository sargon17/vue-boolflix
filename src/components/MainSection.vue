<template>
  <div class="main-section">
    <ItemsList title="Popular Movies" :movieList="popularMovies" />
    <ItemsList title="Trending This Week" :movieList="trendingAllWeek" />
  </div>
</template>

<script>
import ItemsList from "./ItemsList.vue";
import axios from "axios";

export default {
  name: "HeaderComponent",
  components: {
    ItemsList,
  },
  data() {
    return {
      api_key: "api_key=f4a913977d179ebb7a42d0e12e6f64cb",
      popularMovies: [],
      trendingAllWeek: [],
    };
  },
  mounted() {
    this.getElementsList("movie/popular", this.popularMovies, "it-IT");
    this.getElementsList("trending/all/week", this.trendingAllWeek, "it-IT");
  },
  methods: {
    getElementsList(filter, elementsList, language) {
      axios
        .get(
          `https://api.themoviedb.org/3/${filter}?${this.api_key}&language=${language}`
        )
        .then((response) => {
          this.results = response.data.results;
          console.log(this.results);
          this.results.forEach((movie) => {
            if (movie.poster_path && (movie.title || movie.name)) {
              elementsList.push({
                title: movie.title || movie.name,
                id: movie.id,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                original_title: movie.original_title,
                language: movie.original_language,
              });
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
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
