<template>
  <div class="stars-row">
    <i
      class="fa-solid fa-star"
      v-for="index in fullStars"
      :key="index + 'full'"
    ></i>
    <i
      class="fa-regular fa-star"
      v-for="n in emptyStars"
      :key="n + 'empty'"
    ></i>
    <!-- <i class="fa-regular fa-star"></i> -->
  </div>
</template>

<script>
export default {
  name: "StarsValutation",
  data() {
    return {
      fullStars: 0,
      emptyStars: 0,
    };
  },
  props: {
    vote_average: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    let vote = ((this.vote_average / 10) * 5).toFixed(0);
    console.log(vote);
    this.fullStars = vote;
    console.log(this.fullStars);
    this.emptyStars = 5 - vote;
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
