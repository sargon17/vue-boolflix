<template>
  <div class="items-list">
    <div class="items-list__title">
      <h2>See again</h2>
      <img :src="moreIcon" alt="" />
    </div>
    <div class="items-list__card-list">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
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
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.items-list {
  margin-left: 64px;

  &__title {
    display: flex;
    align-items: center;
    gap: 16px;

    h2 {
      font-size: $bf-text-size-medium;
      font-weight: $bf-text-bold;
    }
  }

  &__card-list {
    margin-top: 20px;
    max-width: 100%;
    overflow-x: scroll;
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    justify-content: flex-start;
    height: 167px;
  }
}
</style>
