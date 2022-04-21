<template>
  <div class="main-section">
    <ItemsList
      v-for="itemsLists in mainPageToLoad"
      :title="itemsLists.name"
      :key="itemsLists.id"
      :movieList="getItemsList(itemsLists)"
    />
    <!-- {{ renderItemsList() }} -->
  </div>
</template>

<script>
import ItemsList from "./ItemsList.vue";
import axios from "axios";
import mainPageToLoad from "../data/mainPageToLoad.json";

export default {
  name: "HeaderComponent",
  components: {
    ItemsList,
  },
  data() {
    return {
      api_key: "api_key=f4a913977d179ebb7a42d0e12e6f64cb",
      mainPageToLoad,
    };
  },
  methods: {
    getItemsList(param) {
      console.log(param);
      this.getElementsList(param.api_call, param.elements, param.language);
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
          this.results.forEach((element) => {
            elementsList.push(element);
          });
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
