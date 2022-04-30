<template>
  <div>
    <div class="chip">
      <div class="network" v-if="img">
        <p>Watch it on:</p>
        <img v-if="img" :src="img" alt="" />
      </div>
      <font-awesome-icon v-if="icon && !img" :icon="iconRender(icon)" />
      <span v-if="!img" :class="valueStyles">{{ valueToRender }}</span>
      <span v-if="unitM && !img">{{ unitM }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChipElement",
  data() {
    return {
      unitM: "",
      icon: "",
      valueToRender: "",
      img: "",
    };
  },
  props: {
    value: {
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "",
    },
    isDeletable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    type() {
      this.setUnits(this.type);
    },
    value() {
      this.setUnits(this.type);
    },
  },
  mounted() {
    this.setUnits(this.type);
  },
  computed: {
    valueStyles() {
      let val = parseFloat(this.value);
      return {
        "valutation-low": this.type === "vote_average" && val < 4,
        "valutation-medium":
          this.type === "vote_average" && val >= 4 && val < 7,
        "valutation-high": this.type === "vote_average" && val >= 7,
      };
    },
  },
  methods: {
    setUnits(type) {
      switch (type) {
        case "runtime":
          this.unitM = "min";
          this.icon = "fa-clock";
          this.valueToRender = this.value;
          break;
        case "release_date":
          this.unitM = "";
          this.icon = "fa-calendar";
          this.valueToRender = this.dateType(this.value);
          break;
        case "vote_average":
          this.unitM = "";
          this.icon = "fa-star";
          this.valueToRender = this.value;
          break;
        case "number_of_seasons":
          this.unitM = this.value === "1" ? "season" : "seasons";
          this.icon = "fa-tv";
          this.valueToRender = this.value;
          break;
        case "networks":
          this.unitM = "";
          // this.icon = "fa-tv";
          this.img = this.getNetworkLogo(this.value[0]);
          this.valueToRender = this.value[0].name;

          break;
        default:
          this.unitM = "";
          this.icon = "";
      }
    },
    iconRender(icon) {
      return `fa-solid ${icon}`;
    },
    dateType(date) {
      return date.split("-").reverse().join("/");
    },
    getNetworkLogo(network) {
      return `https://image.tmdb.org/t/p/w92${network.logo_path}`;
    },
  },
};
// type= [runtime, year, valutation, year, seasons, episodes]
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.chip {
  display: inline-block;
  padding: 5px 10px;
  margin: 2px;
  background-color: $bf-chips-bg;
  border-radius: $bf-border-radius;
  font-size: $bf-text-size-xs;
  font-weight: $bf-text-bold;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  cursor: default;
  flex-wrap: nowrap;

  & * {
    transition: $bf-transition;
    color: $bf-text-secondary-color;
  }
  .network {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    img {
      // width: 20px;
      height: 14px;
      object-fit: cover;
      opacity: 0.8;
    }
  }

  &:hover * {
    color: $bf-text-color;
  }
  &:hover img {
    opacity: 1;
  }
  &:hover .valutation-low {
    color: $bf-valutation-low-hover;
  }
  &:hover .valutation-medium {
    color: $bf-valutation-medium-hover;
  }
  &:hover .valutation-high {
    color: $bf-valutation-high-hover;
  }
}

.valutation {
  &-low {
    color: $bf-valutation-low;
  }
  &-medium {
    color: $bf-valutation-medium;
  }
  &-high {
    color: $bf-valutation-high;
  }
}
</style>
