<template>
  <div class="wrapper-chart">
    <div>
      <SkillsComponent />
      <DoughnutComponent />
    </div>
    <div>
      <RadarComponent />
      <HobbiesInfo />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DoughnutComponent from "@/components/chartStatisctics/DoughnutComponent.vue";
import SkillsComponent from "@/components/chartStatisctics/SkillsComponent.vue";
import RadarComponent from "@/components/chartStatisctics/RadarComponent.vue";
import HobbiesInfo from "@/components/cardInfo/HobbiesInfo.vue";
export default defineComponent({
  name: "ChartView",
  components: {
    HobbiesInfo,
    RadarComponent,
    SkillsComponent,
    DoughnutComponent,
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/variables";
@import "../assets/scss/mixins";
.wrapper-chart {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 0;
  margin: 50px 0;
}
</style>
