<template>
  <div id="card" class="card">
    <div class="card-img">
      <img :src="getPoster(poster)" alt="" />
    </div>
    <div class="card-info">
      <div class="card-info-bg"></div>
      <div class="card-info__text">
        <h2 class="card-info__text-title">{{ title }}</h2>
        <h6 class="card-info__text-subtitle">Subtitle</h6>
        <div class="card-info__additional">
          <h6 class="card-info__additional-valutation">voto : 5</h6>
          <p class="card-info__additional-lang">lang</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
  methods: {
    getPoster(poster) {
      return `https://image.tmdb.org/t/p/w780${poster}`;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/general.scss";
.card {
  width: 160px;
  min-width: 160px;
  aspect-ratio: 1/1.8;
  border-radius: 8px;
  z-index: 2;
  position: relative;
  margin: 0 20px;
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
    width: 160px;
    aspect-ratio: 1/1.8;
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
      bottom: 0;
      left: 2%;
      width: 100%;
      z-index: 2;
      padding-left: 2px;

      &-title {
        font-size: $bf-text-size-medium;
        font-weight: $bf-text-bold;
        transition: $bf-transition;
      }
      &-subtitle {
        font-size: $bf-text-size-xSmall;
        font-weight: $bf-text-bold;
        margin-bottom: 50px;
        transition: $bf-transition;
      }

      .card-info__additional {
        padding-left: 2px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: $bf-transition;
        position: absolute;
        width: 100%;
        height: 20px;
        bottom: 2px;
        left: 0;
      }
    }
  }
}
</style>
