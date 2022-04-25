<template>
  <div>
    <div
      class="search-out__bg"
      id="searchOutput"
      @wheel="(e) => handleScroll(e)"
    >
      <div class="search-out__additional-controls">
        <div class="select-box">
          <label for="type">Scegli per tipo</label>
          <select name="type" id="type" class="type_select" v-model="searchBy">
            <option value="multi">All</option>
            <option value="movie">Movie</option>
            <option value="tv">Show</option>
          </select>
        </div>
        <div class="select-box">
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
        </div>
        <div class="select-box">
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
        <div class="search-out__results__more-btn" v-if="isMorePageAviable">
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
      pagesToDisplay: 1,
      displayedItemsIds: [],
      isMorePageAviable: true,
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
      this.startSearch();
    },
    searchBy: function () {
      this.startSearch();
    },
    selectedGenre: function () {
      this.startSearch();
    },
    selectLanguage: function () {
      this.startSearch();
    },
  },
  mounted() {
    this.startSearch();
    this.getLanguages();
    this.getGenres();
  },

  methods: {
    startSearch() {
      this.displayedItemsIds = [];
      this.pagesToDisplay = 1;
      this.result = [];
      this.getItems(this.searchValue, this.pagesToDisplay, false);
    },
    getItems(query = "", page = 1, isRecursive = false) {
      if (page <= 20 || !isRecursive) {
        let params = {
          api_key: this.api_key,
          language: this.selectLanguage,
          query: query,
          page,
          include_adult: false,
          region: "IT",
          sort_by: "popularity.desc",
          genre: this.selectedGenre,
        };
        axios
          .get(`https://api.themoviedb.org/3/search/${this.searchBy}?`, {
            params,
          })
          .then((response) => {
            let results = [];
            if (this.selectedGenre !== "multi") {
              // console.log("selected genre", this.selectedGenre);
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
              if (!this.displayedItemsIds.includes(movie.id)) {
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
                  this.displayedItemsIds.push(movie.id);
                }
              }
            });
            if (response.data.results < 20 * this.pagesToDisplay) {
              this.isMorePageAviable = false;
              return;
            } else {
              this.isMorePageAviable = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
        //   this.sortByGenres();
        if (this.selectedGenre !== "multi" && this.result.length <= 5) {
          this.getItems(this.searchValue, page + 1, true);
        }
      }
    },
    getGenres() {
      axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}&language=it-IT`
        )
        .then((response) => {
          response.data.genres.forEach((genre) => {
            this.genres.push({
              id: genre.id,
              name: genre.name,
            });
          });
          // console.log("genres", this.genres);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getLanguages() {
      axios
        .get(
          `https://api.themoviedb.org/3/configuration/languages?api_key=${this.api_key}`
        )
        .then((response) => {
          // console.log(response.data);
          response.data.forEach((language) => {
            this.languages.push({
              id: language.iso_639_1,
              name: language.english_name,
            });
          });
          this.languages.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // sortByGenres() {
    //   // console.log(this.selectedGenre);
    //   if (this.selectedGenre !== "All") {
    //     this.result = this.result.filter((movie) =>
    //       movie.genre_ids.includes(this.selectedGenre)
    //     );
    //   }
    // },
    getMoreResults() {
      this.pagesToDisplay += 1;
      this.getItems(this.searchValue, this.pagesToDisplay);
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
    handleScroll(e) {
      e.preventDefault();
      const element = document.querySelector("#searchOutput");
      element.scrollBy({
        top: -e.wheelDeltaY * 4,
        behavior: "smooth",
      });
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
  margin-top: 60px;
  height: 10vh;
  padding: 0 64px;
  gap: 20px;
  .select-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .type_select {
    width: 200px;
    background-color: $bf-background-color-transparent;
    border: none;
    outline: none;
    font-size: $bf-text-size-small;
    padding: 0.2rem;
    border-radius: 5px;
    margin: 0 10px;
  }
  @media screen and (max-width: $bf-screen-md) {
    padding: 10px 16px 0 16px;
    margin-top: 60px;
    height: fit-content;
    flex-wrap: wrap;
    gap: 10px;
    .select-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 10px;
      width: calc(50% - 10px);
      .type_select {
        width: 100%;
        margin: 0;
      }
    }
  }
}
.search-out__results {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  margin: 0 64px;
  gap: 15px;
  height: 80vh;
  justify-content: flex-start;
  //   width: 100%;

  &__more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0.2rem;
    margin: 0px 10px;
    min-height: 10px;
    height: 20vh;

    button {
      font-size: $bf-text-size-small;
    }
  }
  @media screen and (max-width: $bf-screen-sm) {
    margin: 0;
    width: 100%;
    justify-content: space-evenly;
    align-items: start;

    &__more-btn {
      width: 100vw;
      height: 20vh;
      padding-bottom: 10vh;
    }
  }
}
</style>
