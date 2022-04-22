<template>
  <div>
    <div class="search-out__bg">
      <div class="search-out__additional-controls">
        <label for="type">Scegli per tipo</label>
        <select name="type" id="type" class="type_select" v-model="searchBy">
          <option value="multi">All</option>
          <option value="movie">Movie</option>
          <option value="tv">Show</option>
        </select>
        <label for="genre">Scegli per genere</label>
        <select
          name="genre"
          id="selectGenre"
          class="type_select"
          v-model="selectedGenre"
        >
          <option :value="id" v-for="{ name, id } in genres" :key="id">
            {{ name }}
          </option>
        </select>
        <label for="language">Scegli lingua</label>
        <select
          name="language"
          id="language"
          class="type_select"
          v-model="selectLanguage"
        >
          <option :value="id" v-for="{ name, id } in languages" :key="id">
            {{ name }}
          </option>
        </select>
      </div>
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
        <h2 v-if="result.length === 0">Nessun risultato trovato</h2>
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
      searchBy: "multi",
      genres: [{ name: "All", id: "multi" }],
      selectedGenre: "multi",
      selectLanguage: "it",
      languages: [],
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
    searchBy: function () {
      this.getItems(this.searchValue);
    },
    selectedGenre: function () {
      this.getItems(this.searchValue);
    },
    selectLanguage: function () {
      this.getItems(this.searchValue);
    },
  },
  mounted() {
    this.getItems(this.searchValue);
    this.getGenres();
    this.getLanguages();
  },

  methods: {
    getItems(query) {
      this.result = [];
      for (let i = 1; i < 3; i++) {
        axios
          .get(
            `https://api.themoviedb.org/3/search/${this.searchBy}?${this.api_key}&language=${this.selectLanguage}&query=${query}&page=1&include_adult=false&region=IT&page=${i}`
          )
          .then((response) => {
            console.log(response.data.results);
            let results = [];
            if (this.selectedGenre !== "multi") {
              console.log("selected genre", this.selectedGenre);
              response.data.results.forEach((element) => {
                if (element.genre_ids.includes(this.selectedGenre)) {
                  results.push(element);
                }
                console.log("results", results);
              });
            } else {
              results = response.data.results;
            }
            results.forEach((movie) => {
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
          })
          .catch((error) => {
            console.log(error);
          });
      }
      //   this.sortByGenres();
    },
    getGenres() {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?${this.api_key}&language=it-IT`
        )
        .then((response) => {
          response.data.genres.forEach((genre) => {
            this.genres.push({
              id: genre.id,
              name: genre.name,
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getLanguages() {
      axios
        .get(
          `https://api.themoviedb.org/3/configuration/languages?${this.api_key}`
        )
        .then((response) => {
          console.log(response.data);
          response.data.forEach((language) => {
            this.languages.push({
              id: language.iso_639_1,
              name: language.english_name,
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sortByGenres() {
      console.log(this.selectedGenre);
      if (this.selectedGenre !== "All") {
        this.result = this.result.filter((movie) =>
          movie.genre_ids.includes(this.selectedGenre)
        );
      }
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
@import "../styles/general.scss";

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
  transition: $bf-transition;
}
.search-out__additional-controls {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 5vh;
  height: 10vh;
  padding: 0 64px;

  .type_select {
    width: 200px;
    background-color: rgb(90, 90, 90);
    border: none;
    outline: none;
    font-size: $bf-text-size-small;
    padding: 0.2rem;
    border-radius: 5px;
    margin: 0 10px;
  }
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
  height: 80vh;
  //   width: 100%;
}
</style>
