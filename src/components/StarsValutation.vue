<template>
  <div class="stars-row">
    <i
      class="fa-solid fa-star"
      v-for="index in fullStars"
      :key="index + 'full'"
    ></i>
    <i
      class="fa-regular fa-star"
      v-for="index in emptyStars"
      :key="index + 'empty'"
    ></i>
    <i class="fa-regular fa-star"></i>
  </div>
</template>

<script>
export default {
  name: "StarsValutation",
  data() {
    return {
      vote: 0,
      fullStars: [],
      emptyStars: [],
    };
  },
  props: {
    vote_average: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.vote = ((this.vote_average / 10) * 5).toFixed(0);
    for (let i = 1; i <= this.vote; i++) {
      this.fullStars.push(i);
    }
    for (let i = 1; i < 5 - this.vote; i++) {
      this.emptyStars.push(i);
    }
  },
};
</script>

<style lang="scss" scoped>
.stars-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
}
</style>
