<template>
  <div class="items-list">
    <div class="items-list__title">
      <h2>{{ title }}</h2>
      <img :src="moreIcon" alt="" />
    </div>
    <div class="items-list__card-list">
      <CardComponent
        v-for="{
          title,
          id,
          poster_path,
          vote_average,
          original_title,
          language,
        } in movieList"
        :title="title"
        :key="id"
        :poster="poster_path"
        :vote_average="vote_average"
        :original_title="original_title"
        :language="language"
      />
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import moreIcon from "../img/icons/chevron-right-thin.svg";

export default {
  name: "ItemsList",
  components: {
    CardComponent,
  },
  data() {
    return {
      moreIcon,
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
  },
  mounted() {
    console.log(this.movieList);
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
    // height: 200px;
  }
}
</style>
