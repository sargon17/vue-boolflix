<template>
  <div class="items-list">
    <div class="items-list__title">
      <h2>{{ title }}</h2>
      <img :src="moreIcon" alt="" />
    </div>
    <div class="items-list__items">
      <div
        class="items-list__cards__nav-btn items-list__cards__nav-btn--prev"
        @click="scrollLeft"
      >
        <img :src="caretLeft" alt="" />
      </div>
      <div class="items-list__card-list" :id="id">
        <CardComponent
          v-for="{
            title,
            id,
            poster_path,
            vote_average,
            original_title,
            language,
            origin_country,
          } in movieList"
          :title="title"
          :key="id + title + original_title + poster_path"
          :poster="poster_path"
          :vote_average="vote_average"
          :original_title="original_title"
          :language="language"
          :origin_country="origin_country"
        />
      </div>
      <div
        class="items-list__cards__nav-btn items-list__cards__nav-btn--next"
        @click="scrollRight"
      >
        <img :src="caretRight" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import moreIcon from "../img/icons/chevron-right-thin.svg";
import caretRight from "../img/icons/caret-right-fill.svg";
import caretLeft from "../img/icons/caret-left-fill.svg";

export default {
  name: "ItemsList",
  components: {
    CardComponent,
  },
  data() {
    return {
      moreIcon,
      caretRight,
      caretLeft,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    movieList: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollRight() {
      let element = document.getElementById(this.id);
      element.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    },
    scrollLeft() {
      let element = document.getElementById(this.id);
      element.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.items-list {
  margin-bottom: 20px;
  &__title {
    margin-left: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: -26px;

    h2 {
      font-size: $bf-text-size-medium;
      font-weight: $bf-text-bold;
    }
  }

  &__card-list {
    padding: 20px;
    padding-left: 64px;
    padding-right: 64px;
    z-index: 1;
    margin-top: 20px;
    max-width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    transition: $bf-transition;
    // height: 200px;
  }
  .items-list__items {
    transition: $bf-transition;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 16px;
    justify-content: flex-start;
    position: relative;
    align-items: center;
    // height: 200px;

    .items-list__cards__nav-btn {
      position: absolute;
      top: 12.5%;
      width: 32px;
      height: 80%;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      transition: $bf-transition;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      &--prev {
        left: 0px;
        border-radius: 0 10px 10px 0;
      }

      &--next {
        right: 0px;
        border-radius: 10px 0 0 10px;
      }

      &:hover {
        background: $bf-secondary-btn-color;
      }
    }
  }
}
</style>
