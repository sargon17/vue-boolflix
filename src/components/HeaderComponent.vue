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
      <button>
        <i class="fa-regular fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/general.scss";

.header {
  width: 100%;
  min-height: 68px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
}
</style>
