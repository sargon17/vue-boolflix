<template>
  <div id="header" class="header">
    <div class="header__navigation">
      <div class="header__navigation__logo">Boolflix</div>
      <nav class="header__navigation__nav">
        <ul class="header__navigation__nav-list">
          <li
            class="header__navigation__nav-list__item header__navigation__nav-list__item-active"
          >
            <a href="#">Start</a>
          </li>
          <li class="header__navigation__nav-list__item">
            <a href="#">Shows</a>
          </li>
          <li class="header__navigation__nav-list__item">
            <a href="#">Movies</a>
          </li>
          <li class="header__navigation__nav-list__item">
            <a href="#">New</a>
          </li>
          <li class="header__navigation__nav-list__item">
            <a href="#">MyList</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__toolbox">
      <button class="icon-btn">
        <img :src="searchIcon" alt="search icon" />
      </button>
      <button class="icon-btn">
        <img :src="bellIcon" alt="bell icon" />
      </button>
    </div>
  </div>
</template>

<script>
import searchIcon from "../img/icons/search.svg";
import bellIcon from "../img/icons/bell.svg";

export default {
  name: "HeaderComponent",
  data() {
    return {
      searchIcon,
      bellIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.header {
  //   width: 100%;
  min-height: 68px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;

  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      font-size: 1.5rem;
      font-weight: $bf-text-bold;
      color: $bf-netflix-color;
      text-transform: uppercase;
      letter-spacing: 0.15rem;
    }

    &__nav {
      &-list {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__item {
          font-size: $bf-text-size-xSmall;
          font-weight: $bf-text-thin;
          color: $bf-text-color;
          margin-left: 1rem;

          a {
            text-decoration: none;
          }

          &-active {
            font-weight: $bf-text-bold;
          }
        }
      }
    }
  }

  &__toolbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
}
</style>
