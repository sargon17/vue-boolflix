<template>
  <div class="mlt-section">
    <div class="mlt-container">
      <div class="close-btn">
        <button class="icon-btn" @click="closePage">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </div>
      <div class="cards-grid">
        <card-component
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "./CardComponent.vue";
export default {
  name: "MoreLikeThis",
  components: {
    CardComponent,
  },
  data() {
    return {
      movies: [],
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
      let params = this.data.params;
      console.log(params);
      axios
        .get(`https://api.themoviedb.org/3/${this.data.api_call}?`, {
          params,
        })
        .then((res) => {
          this.movies = res.data.results;
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closePage() {
      this.$emit("closePage");
    },
  },
  mounted() {
    this.getMovies();
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general";
.mlt-section {
  position: fixed;
  width: 100%;
  height: 100%;
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

  .mlt-container {
    height: 90vh;
    width: 100%;
    position: relative;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
