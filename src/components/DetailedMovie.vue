<template>
  <div v-if="isShown">
    <div class="detailed__bg" @click="closeWindow"></div>
    <div class="detailed__card">
      <img :src="bgImage" alt="" />
      <div class="detailed__card-bg">
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
              {{ movie.title }}
            </h2>
            <h6 class="detailed__card-info__content-subtitle">
              {{ movie.tagline }}
            </h6>
            <div class="detailed__card-info__content-additional">
              <p>{{ setDateToYear(movie.release_date) }}</p>
              <p>{{ movie.runtime }} min</p>
              <p class="detailed__card-info__content-additional-valutation">
                {{ movie.vote_average }}
              </p>
            </div>
            <div class="detailed__card-info__content-overview">
              <p>{{ movie.overview }}</p>
            </div>
            <div class="detailed__card-info__content-cast">
              <div
                class="cast-element"
                v-for="element in cast"
                :key="element.credit_id"
              >
                <div class="cast-element__img" v-if="element.profile_path">
                  <img :src="getPoster(element.profile_path, 'w154')" alt="" />
                </div>
                <p class="cast-element__name">{{ element.name }}</p>
                <p class="cast-element__character">{{ element.character }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DetailedMovie",
  data() {
    return {
      api_key: "api_key=f4a913977d179ebb7a42d0e12e6f64cb",
      movie: {},
      credits: {},
      // movieId: this.currentMovie,
      bgImage: "",
      cast: [],
    };
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
  },
  watch: {
    currentMovieId: function () {
      this.getMovie();
    },
  },
  methods: {
    getMovie() {
      axios
        .get(
          `https://api.themoviedb.org/3/${this.currentMovieType}/${this.currentMovieId}?${this.api_key}&language=it-IT`
        )
        .then((response) => {
          this.movie = response.data;
          console.log(this.movie);
          this.getCredit(this.movie.id);
          this.setBackground();
        });
    },
    getCredit(id) {
      this.cast = [];
      axios
        .get(
          `https://api.themoviedb.org/3/${this.currentMovieType}/${id}/credits?${this.api_key}`
        )
        .then((response) => {
          this.credit = response.data;
          console.log("credit", this.credit);
          for (let i = 0; i < this.credit.cast.length; i++) {
            if (i < 5) {
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
      this.$emit("closeWindow");
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
  z-index: 8;
}

.detailed__card {
  min-width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 60vh;
  background: $bf-background-color;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 9;
  overflow: hidden;

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
    background: linear-gradient(to right, #14141460 0%, #141414fa 60%);

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
    }

    .detailed__card-info-img {
      width: 200px;
      aspect-ratio: 1/1.8;
      object-fit: cover;
      border-radius: 10px;
    }

    .detailed__card-info__content {
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
          width: 100px;
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
}
</style>
