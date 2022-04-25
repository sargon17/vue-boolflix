<template>
  <div v-if="isShown">
    <div class="detailed__bg" @click="closeWindow"></div>
    <div class="detailed__card">
      <img :src="bgImage" alt="" />
      <div class="detailed__card-bg">
        <div class="detailed__close-btn">
          <button class="icon-btn" @click="closeWindow">
            <img :src="closeIcon" alt="" />
          </button>
        </div>
        <div class="detailed__card-info">
          <img
            :src="getPoster(movie.poster_path, 'w342')"
            alt=""
            class="detailed__card-info-img"
          />
          <div class="detailed__card-info__content">
            <div class="detailed__card-info__content-overline">
              <p v-for="{ name, id } in movie.genres" :key="movie.title + id">
                {{ name }}
              </p>
            </div>
            <h2 class="detailed__card-info__content-title">
              {{ movie.title ? movie.title : movie.original_title }}
            </h2>
            <h6 class="detailed__card-info__content-subtitle">
              {{ movie.tagline }}
            </h6>
            <div class="detailed__card-info__container">
              <div class="detailed__card-info__content-additional">
                <p>{{ setDateToYear(movie.release_date) }}</p>
                <p v-if="movie.runtime">{{ movie.runtime }} min</p>
                <p v-if="movie.number_of_seasons">
                  {{ movie.number_of_seasons }} season{{
                    movie.number_of_seasons > 1 ? "s" : ""
                  }}
                </p>
                <p
                  v-if="movie.vote_average"
                  class="detailed__card-info__content-additional-valutation"
                >
                  {{ movie.vote_average }}
                </p>
              </div>
              <div>
                <button
                  v-if="recommendation.length > 0"
                  class="btn secondary-btn"
                  @click="handleRecommendationClick"
                >
                  {{ isRecomenationShown ? "Hide similar" : "See similar" }}
                </button>
              </div>
            </div>
            <div
              class="detailed__card-info__content-overview"
              v-if="!isRecomenationShown"
            >
              <p>{{ movie.overview }}</p>
            </div>
            <div
              class="detailed__card-info__content-cast"
              v-if="!isRecomenationShown"
            >
              <div
                class="cast-element"
                v-for="element in cast"
                :key="element.credit_id"
              >
                <div class="cast-element__img">
                  <img :src="getPoster(element.profile_path, 'w154')" alt="" />
                </div>
                <p class="cast-element__name">{{ element.name }}</p>
                <p class="cast-element__character">{{ element.character }}</p>
              </div>
            </div>
            <div
              class="detailed__card-info__content-recommendations"
              v-if="isRecomenationShown"
              id="recommendations"
              @wheel="(e) => handleRecommendationScroll(e)"
            >
              <CardComponent
                @handleCardClick="openNewDetailedCard"
                v-for="{
                  title,
                  id,
                  poster_path,
                  vote_average,
                  original_title,
                  language,
                  origin_country,
                  media_type,
                } in recommendation"
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { api_key } from "../data/api_key";
import CardComponent from "./CardComponent.vue";
import closeIcon from "../img/icons/x-circle-fill.svg";

export default {
  name: "DetailedMovie",
  data() {
    return {
      api_key,
      movie: {},
      credits: {},
      // movieId: this.currentMovie,
      bgImage: "",
      cast: [],
      recommendation: [],
      isRecomenationShown: false,
      recommendationIds: [],
      closeIcon,
      movieId: 0,
      movieType: "",
    };
  },
  components: {
    CardComponent,
  },
  props: {
    currentMovieId: {
      type: Number,
      required: true,
    },
    isShown: {
      type: Boolean,
      required: true,
    },
    currentMovieType: {
      type: String,
      required: true,
    },
    selectedLanguage: {
      type: String,
    },
  },
  watch: {
    currentMovieId: function () {
      this.movieId = this.currentMovieId;
      this.movieType = this.currentMovieType;
    },
    movieId: function () {
      this.getMovie();
    },
  },
  methods: {
    getMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/${this.movieType}/${this.movieId}?api_key=${this.api_key}&language=${this.selectedLanguage}`
        )
        .then((response) => {
          // this.movie = response.data;
          this.movie.title = response.data.title
            ? response.data.title
            : response.data.name;
          this.movie.poster_path = response.data.poster_path;
          this.movie.tagline = response.data.tagline;
          this.movie.release_date = response.data.release_date
            ? response.data.release_date
            : response.data.first_air_date;
          this.movie.runtime = response.data.runtime
            ? response.data.runtime
            : "";
          this.movie.vote_average = response.data.vote_average;
          this.movie.number_of_seasons = response.data.number_of_seasons
            ? response.data.number_of_seasons
            : null;
          this.movie.overview = response.data.overview;
          this.movie.genres = response.data.genres;
          this.bgImage = this.getPoster(
            response.data.backdrop_path,
            "original"
          );
          this.movie.id = response.data.id;
          this.getRecommendations();
          this.getCredit(this.movie.id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCredit(id) {
      this.cast = [];
      axios
        .get(
          `https://api.themoviedb.org/3/${this.movieType}/${id}/credits?api_key=${this.api_key}`
        )
        .then((response) => {
          this.credit = response.data;
          // console.log("credit", this.credit);
          for (let i = 0; i < this.credit.cast.length; i++) {
            if (i < 5 && this.credit.cast[i].profile_path) {
              this.cast.push(this.credit.cast[i]);
            }
          }
        });
    },
    getPoster(poster = "", size = "w342") {
      return `https://image.tmdb.org/t/p/${size}${poster}`;
    },
    setBackground() {
      this.bgImage = this.getPoster(this.movie.backdrop_path, "w500");
    },
    setDateToYear(date = "") {
      return date.split("-")[0];
    },
    closeWindow() {
      this.isRecomenationShown = false;
      this.$emit("closeWindow");
    },
    handleRecommendationClick() {
      this.isRecomenationShown = !this.isRecomenationShown;
      this.getRecommendations();
    },
    // Old Recomendation request
    // getRecommendations() {
    //   this.recommendation = [];
    //   // if (this.currentMovieType === "movie") {
    //   let params = {
    //     api_key: this.api_key,
    //     language: this.selectedLanguage,
    //     include_adult: false,
    //     page: 1,
    //     sort_by: "popularity.desc",
    //   };
    //   let result = [];
    //   axios
    //     .get(`https://api.themoviedb.org/3/movie/${this.movie.id}/similar`, {
    //       params,
    //     })
    //     .then((response) => {
    //       result = response.data.results.slice(0, 10);
    //       // console.log("result", result);
    //       this.filterData(result, this.recommendation);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   // console.log("recomendation", this.recommendation);
    // },
    getRecommendations() {
      this.recommendation = [];
      let params = {
        api_key: this.api_key,
        language: this.selectedLanguage,
        page: 1,
      };
      let result = [];
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${this.movie.id}/recommendations`,
          {
            params,
          }
        )
        .then((response) => {
          result = response.data.results.slice(0, 15);
          // console.log("result", result);
          this.filterData(result, this.recommendation);
        })
        .catch((error) => {
          console.log(error);
        });
      // console.log("recomendation", this.recommendation);
    },

    // function that allow to open new detailed card after click on recommended one
    openNewDetailedCard(data) {
      this.isRecomenationShown = false;
      const [id, media_type] = data;
      this.movieId = id;
      this.movieType = media_type;
    },

    // function that allow to scroll through the cards
    handleRecommendationScroll(e) {
      e.preventDefault();
      const element = document.querySelector("#recommendations");
      element.scrollBy({
        left: -e.wheelDeltaY * 2,
        behavior: "smooth",
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
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.detailed__bg {
  background: rgba(0, 0, 0, 0.831);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.detailed__card {
  min-width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 70vh;
  background: $bf-background-color;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  overflow: hidden;

  .detailed__close-btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 20;

    img {
      width: 24px;
      height: 24px;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #14141453 0%, #141414ea 60%);

    .detailed__card-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 95%;
      height: 95%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      overflow: hidden;
      @media screen and (max-width: $bf-screen-sm) {
        align-items: flex-start;
      }
    }

    .detailed__card-info-img {
      width: 200px;
      aspect-ratio: 1/1.8;
      object-fit: cover;
      border-radius: 10px;
    }

    .detailed__card-info__content {
      width: 100%;
      max-width: 100%;
      overflow: hidden;
      &-overline {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: $bf-text-secondary-color;
        font-size: $bf-text-size-xSmall;
        font-weight: $bf-text-bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        gap: 15px;

        p {
          color: $bf-text-secondary-color;
        }
      }

      &-title {
        font-size: 2.5rem;
        font-weight: $bf-text-bold;
        color: #fff;
        text-transform: uppercase;
      }
      &-subtitle {
        font-size: 1.2rem;
        font-weight: $bf-text-thin;
        margin-bottom: 10px;
        margin-top: 0;
        color: #fff;
      }
      .detailed__card-info__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100%;
      }
      &-additional {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: $bf-text-secondary-color;
        font-size: $bf-text-size-xSmall;
        font-weight: $bf-text-bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        gap: 15px;
        margin-bottom: 20px;

        p {
          color: $bf-text-secondary-color;
        }
        & > .detailed__card-info__content-additional-valutation {
          color: $bf-text-valutation-color;
        }
      }
      &-overview {
        margin-top: 10px;
        color: $bf-text-secondary-color;
        font-size: 0.8rem;
        font-weight: $bf-text-thin;
        line-height: 1.2;
        text-align: justify;

        p {
          color: $bf-text-secondary-color;
        }
      }
      &-cast {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        margin-top: 10px;

        .cast-element {
          width: 20%;
          max-width: 100px;
          height: 150px;

          &__img {
            width: 100%;
            aspect-ratio: 1/1;
            border-radius: 50%;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          &__name {
            margin-top: 5px;
            font-size: 0.8rem;
            font-weight: $bf-text-thin;
            color: $bf-text-color;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          &__character {
            font-size: 0.8rem;
            font-weight: $bf-text-thin;
            color: $bf-text-secondary-color;
          }
        }
      }
    }
  }
  @media screen and (max-width: $bf-screen-md) {
    width: 90vw;
    height: 90vh;
    min-width: 90vw;
    .detailed__card-info {
      width: 95%;
      height: 100%;
      padding: 10px 0;
      flex-wrap: wrap;
      justify-content: center;
      overflow: auto;
      align-content: flex-start;
    }
    .detailed__card-info-img {
      width: 35%;
      aspect-ratio: 1/1.8;
      object-fit: cover;
      border-radius: 10px;
    }
    .detailed__card-info__content {
      &-overline {
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        flex-wrap: wrap;
      }
      &-title {
        font-size: 2rem;
      }
      &-subtitle {
        font-size: 1rem;
      }
      &-additional {
        gap: 10px;
      }
      &-overview {
        margin-top: 10px;
      }
      &-cast {
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        flex-wrap: wrap;
        .cast-element {
          max-width: 100px;
          width: 30%;
          height: auto;
          margin-bottom: 10px;
        }
      }
    }
  }
  .detailed__card-info__content-recommendations {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    gap: 10px;
    width: 100%;
    max-width: 100%;
    padding: 10px 0;
  }
}
</style>
