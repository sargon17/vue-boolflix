<template>
  <div id="card" class="card" @click="passData">
    <div class="card-img"><img :src="getPoster(poster, 'w342')" alt="" /></div>
    <div class="card-info">
      <div class="card-info-bg"></div>
      <div class="card-info__text">
        <h2 class="card-info__text-title">{{ title }}</h2>
        <h6 class="card-info__text-subtitle" v-if="isTitlesDifferent()">
          {{ original_title }}
        </h6>
        <div class="card-info__additional">
          <div class="card-info__text-valutation">
            <StarsValutation :vote_average="vote_average" />
          </div>
          <p class="card-info__additional-lang">{{ getFlagEmoji(language) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarsValutation from "./StarsValutation.vue";

export default {
  name: "CardComponent",

  components: {
    StarsValutation,
  },
  data() {
    return {
      dataToSend: [this.id, this.media_type],
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    vote_average: {
      type: Number,
      required: true,
    },
    original_title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    origin_country: {
      type: String,
      required: false,
    },
    id: {
      type: Number,
      required: true,
    },
    media_type: {
      type: String,
      required: true,
    },
  },
  methods: {
    getPoster(poster = "", size = "w342") {
      return `https://image.tmdb.org/t/p/${size}${poster}`;
    },
    isTitlesDifferent() {
      return this.title != this.original_title;
    },
    getFlagEmoji(countryCode) {
      if (countryCode === "en") {
        countryCode = "US";
      }
      if (this.origin_country) {
        countryCode = this.origin_country;
      }
      const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
      return String.fromCodePoint(...codePoints);
    },
    passData() {
      // console.log("passData");
      this.$emit("handleCardClick", [this.id, this.media_type]);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/general.scss";
.card {
  width: 165px;
  min-width: 165px;
  aspect-ratio: 1/1.7;
  border-radius: 8px;
  z-index: 2;
  position: relative;
  overflow: hidden;
  transition: $bf-transition;

  &:hover {
    transform: scale(1.1);
    z-index: 3;
  }
  &:hover .card-info {
    transform: translateY(0);
  }

  &-img {
    background: #353535;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 165px;
    aspect-ratio: 1/1.7;
    position: relative;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &-info {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(100%);
    transition: $bf-transition;

    &-bg {
      height: 100%;
      width: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0.8) 80%
      );
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    &__text {
      color: #fff;
      position: absolute;
      bottom: 30%;
      left: 2%;
      width: 96%;
      z-index: 2;
      padding-left: 2px;
      transform: translateY(50%);

      &-title {
        font-size: $bf-text-size-medium;
        font-weight: $bf-text-bold;
        transition: $bf-transition;
        padding-bottom: 2px;
      }
      &-subtitle {
        font-size: $bf-text-size-xSmall;
        font-weight: $bf-text-thin;
        transition: $bf-transition;
        padding-bottom: 5px;
      }

      .card-info__additional {
        padding-left: 2px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: $bf-transition;
        justify-content: space-between;
      }
    }
  }
  @media screen and (max-width: $bf-screen-sm) {
    width: 40vw;
    min-width: 120px;

    &-img {
      width: 100%;
      aspect-ratio: 1/1.7;
    }
    &-info {
      &__text {
        &-title {
          font-size: $bf-text-size-small;
        }
        &-subtitle {
          font-size: $bf-text-size-xxSmall;
        }
      }
    }
  }
}
</style>
