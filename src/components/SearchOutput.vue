<template>
  <div>
    <div class="search-out__bg">
      <div class="search-out__additional-controls"></div>
      <div class="search-out__results">
        <CardComponent
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
          } in result"
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
    </div>
    <DetailedMovie
      :currentMovieId="currentMovieId"
      :currentMovieType="currentMovieType"
      :isShown="isCardShown"
      @closeWindow="closeDetailedWindow"
    />
  </div>
</template>

<script>
import axios from "axios";
import { api_key } from "../data/api_key";
import CardComponent from "./CardComponent.vue";
import DetailedMovie from "./DetailedMovie.vue";

export default {
  name: "SearchOutput",
  data() {
    return {
      reserchQuery: "new york",
      result: [],
      api_key,
      isCardShown: false,
      currentMovieId: 0,
      currentMovieType: "",
    };
  },
  props: {
    searchValue: {
      type: String,
      required: true,
    },
  },
  components: {
    CardComponent,
    DetailedMovie,
  },
  watch: {
    searchValue: function () {
      this.getItems(this.searchValue);
    },
  },

  methods: {
    getItems(query) {
      (this.result = []),
        axios
          .get(
            `https://api.themoviedb.org/3/search/multi?${this.api_key}&language=it-IT&query=${query}&page=1&include_adult=false`
          )
          .then((response) => {
            response.data.results.forEach((movie) => {
              if (movie.poster_path && (movie.title || movie.name)) {
                this.result.push({
                  title: movie.title || movie.name,
                  id: movie.id,
                  media_type: movie.title ? "movie" : "tv",
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
            console.log(this.result);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    takeCardData(data) {
      console.log("data", data);
      this.currentMovieId = data[0];
      this.currentMovieType = data[1];
      this.isCardShown = true;
      console.log("card shown", this.isCardShown);
    },
    closeDetailedWindow() {
      this.isCardShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-out__bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  //   height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 8;
  overflow: auto;
}
.search-out__results {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-items: flex-start;
  align-items: center;
  align-content: flex-start;
  margin: 0 64px;
  gap: 15px;
  height: 90vh;
  margin-top: 10vh;
  //   width: 100%;
}
</style>
