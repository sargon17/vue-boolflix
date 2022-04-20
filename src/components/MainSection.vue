<template>
  <div class="main-section">
    <ItemsList />
  </div>
</template>

<script>
import ItemsList from "./ItemsList.vue";
export default {
  name: "HeaderComponent",
  components: {
    ItemsList,
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #141414 7.48%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -200px;
}
</style>
