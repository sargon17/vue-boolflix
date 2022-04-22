<template>
  <div id="header" :class="!isTop ? 'header header-active' : 'header'">
    <div class="header__navigation">
      <div class="header__navigation__logo">Boolflix</div>
      <nav class="header__navigation__nav">
        <ul class="header__navigation__nav-list">
          <li
            @click="$emit('navigation-click', 'start')"
            :class="
              isMovieShown && isSeriesShown
                ? 'header__navigation__nav-list__item header__navigation__nav-list__item--active'
                : 'header__navigation__nav-list__item'
            "
          >
            <button class="nav-btn">Start</button>
          </li>
          <li
            @click="$emit('navigation-click', 'shows')"
            class="header__navigation__nav-list__item"
          >
            <button class="nav-btn">Shows</button>
          </li>
          <li
            @click="$emit('navigation-click', 'movies')"
            class="header__navigation__nav-list__item"
          >
            <button class="nav-btn">Movies</button>
            <!-- <a href="#">Movies</a> -->
          </li>
        </ul>
      </nav>
    </div>
    <div class="header__toolbox">
      <div class="header__toolbox__search" v-if="isSearchShown">
        <input
          @keyup="handleSearch"
          type="text"
          class="header__toolbox__search__input"
          placeholder="Search"
          v-model="searchValue"
        />
      </div>
      <button class="icon-btn" @click="handleSearchDisplay">
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
      // isTop: true,
      searchValue: "",
    };
  },
  props: {
    isTop: {
      type: Boolean,
      required: true,
    },
    isMovieShown: {
      type: Boolean,
      required: true,
    },
    isSeriesShown: {
      type: Boolean,
      required: true,
    },
    isSearchShown: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleSearchDisplay() {
      this.$emit("search-display");
      // this.isSearchShown = !this.isSearchShown;
    },
    handleSearch() {
      console.log(this.searchValue);
      this.$emit("search-value", this.searchValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  z-index: 10;
  transition: $bf-transition;

  &-active {
    background: #141414f6;
  }

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

    &__search {
      &__input {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 4px;
        background: #2d2d2df6;
        padding: 0 16px;
        font-size: $bf-text-size-xSmall;
        font-weight: $bf-text-thin;
        color: $bf-text-color;
        transition: $bf-transition;

        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
