<template>
  <div class="container">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  data() {
    return {
      filterOn: false,
    };
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 0;
}
.container {
  width: 1400px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &__title {
    text-align: left;
  }
  &__info {
    display: flex;
    align-items: flex-start;
  }
  &__nav {
    display: flex;
    align-items: flex-start;
  }
  &__filter {
    display: block;
  }
}

//transition

.filter-enter-active,
.filter-leave-active {
  transition: all 0.25s ease-out;
}

.filter-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.filter-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
