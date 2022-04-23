<template>
  <div
    id="header"
    :class="
      !isTop || searchValue.length > 0 ? 'header header-active' : 'header'
    "
  >
    <div class="header__navigation">
      <div class="header__navigation__logo">Boolflix</div>
      <div class="header__navigation__logo header__navigation__logo-short">
        B
      </div>
      <nav class="header__navigation__nav">
        <ul class="header__navigation__nav-list">
          <li
            v-if="searchValue.length === 0"
            @click="$emit('navigation-click', 'start')"
            :class="
              isMovieShown && isSeriesShown
                ? 'header__navigation__nav-list__item header__navigation__nav-list__item-active'
                : 'header__navigation__nav-list__item'
            "
          >
            <button class="nav-btn">Home</button>
          </li>
          <li
            v-if="searchValue.length === 0"
            @click="$emit('navigation-click', 'shows')"
            :class="
              isSeriesShown && !isMovieShown
                ? 'header__navigation__nav-list__item header__navigation__nav-list__item-active'
                : 'header__navigation__nav-list__item'
            "
          >
            <button class="nav-btn">Series</button>
          </li>
          <li
            v-if="searchValue.length === 0"
            @click="$emit('navigation-click', 'movies')"
            :class="
              isMovieShown && !isSeriesShown
                ? 'header__navigation__nav-list__item header__navigation__nav-list__item-active'
                : 'header__navigation__nav-list__item'
            "
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
        <button @click="handleCloseSearch" class="icon-btn">
          <img :src="closeIcon" alt="close icon" />
        </button>
      </div>
      <button class="icon-btn search-icon" @click="handleSearchDisplay">
        <img :src="searchIcon" alt="search icon" />
      </button>
      <button class="icon-btn bell-icon">
        <img :src="bellIcon" alt="bell icon" />
      </button>
    </div>
  </div>
</template>

<script>
import searchIcon from "../img/icons/search.svg";
import bellIcon from "../img/icons/bell.svg";
import closeIcon from "../img/icons/x-circle-fill.svg";

export default {
  name: "HeaderComponent",
  data() {
    return {
      searchIcon,
      bellIcon,
      closeIcon,
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
      // console.log(this.searchValue);
      this.$emit("search-value", this.searchValue);
    },
    handleCloseSearch() {
      this.$emit("search-display");
      this.searchValue = "";
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
  max-width: 100%;
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

      &-short {
        display: none;
      }
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
          &-active {
            button {
              font-weight: $bf-text-bold;
            }
          }
        }
      }
    }
    @media screen and (max-width: $bf-screen-sm) {
      &__logo {
        display: none;
        &-short {
          display: block;
        }
      }
      &__nav {
        &-list {
          display: none;
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
      background: #2d2d2df6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: $bf-border-radius;
      &__input {
        padding: 0rem 1rem;
        background: none;
        width: 100%;
        height: 40px;
        border: none;
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
  @media screen and (max-width: $bf-screen-sm) {
    padding: 0 16px;
    &__toolbox {
      gap: 0;

      .bell-icon {
        display: none;
      }
    }
  }
}
</style>
