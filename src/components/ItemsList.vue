<template>
  <div class="items-list">
    <div class="items-list__title">
      <div @click="moreClicked">
        <h2>{{ title }}</h2>
        <img :src="moreIcon" alt="" class="more-icon" />
      </div>
    </div>
    <div class="items-list__items">
      <button
        class="items-list__cards__nav-btn items-list__cards__nav-btn--prev"
        @click="scrollLeft"
        @touchend="scrollLeft"
      >
        <img :src="caretLeft" alt="" />
      </button>
      <div class="items-list__card-list" :id="id">
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
          } in movieList"
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
      <button
        class="items-list__cards__nav-btn items-list__cards__nav-btn--next"
        @click="scrollRight"
        @touchend="scrollRight"
      >
        <img :src="caretRight" alt="" />
      </button>
    </div>
    <more-like-this
      v-if="mltIsOpen"
      :data="requestData"
      :title="title"
      @closePage="moreClicked"
    />
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import moreIcon from "../img/icons/chevron-right-thin.svg";
import caretRight from "../img/icons/caret-right-fill.svg";
import caretLeft from "../img/icons/caret-left-fill.svg";
import selected_networks from "../data/selected_networks";
import MoreLikeThis from "./MoreLikeThis.vue";

export default {
  name: "ItemsList",
  components: {
    CardComponent,
    MoreLikeThis,
  },
  data() {
    return {
      moreIcon,
      caretRight,
      caretLeft,
      selected_networks,
      isDataComplete: false,
      // more like this (mlt)
      mltIsOpen: false,
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
    requestData: {
      type: Object,
      // required: true,
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
    takeCardData(data) {
      // console.log(data);
      this.$emit("handleCardClick", data);
    },
    moreClicked() {
      this.mltIsOpen = !this.mltIsOpen;
      // this.$emit("moreClicked");
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
    // height: 46px;
    cursor: pointer;
    // z-index: 4;

    // &:hover .more-icon {
    //   transform: translate(50px, 0px);
    // }
    & div {
      display: flex;
      align-items: center;
      gap: 16px;
      z-index: 4;

      &:hover {
        .more-icon {
          transform: translate(50px, 0px);
        }
      }
    }
    .more-icon {
      transition: $bf-transition;
    }

    h2 {
      font-size: $bf-text-size-md;
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
      background: rgba(255, 255, 255, 0.105);
      border: none;
      outline: none;
      cursor: pointer;
      transition: $bf-transition;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      opacity: 0.8;

      &:hover {
        background: $bf-secondary-btn-color;
        opacity: 1;
      }

      &--prev {
        left: 0px;
        border-radius: 0 10px 10px 0;
      }

      &--next {
        right: 0px;
        border-radius: 10px 0 0 10px;
      }
    }
  }
  @media screen and (max-width: $bf-screen-sm) {
    &__title {
      margin-left: 20px;
      h2 {
        font-size: $bf-text-size-sm;
      }
      img {
        width: 20px;
      }
    }
    &__card-list {
      padding: 20px;
      padding-left: 20px;
      padding-right: 20px;
      overflow: auto;
    }
    .items-list__items {
      .items-list__cards__nav-btn {
        display: none;
      }
    }
  }
}
</style>
