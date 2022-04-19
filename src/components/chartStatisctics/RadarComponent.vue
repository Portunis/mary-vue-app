<template>
  <div class="chart-radar">
    <h3 class="chart-radar__title">Design Process Weightage</h3>
    <RadarChart
      :chartData="radarChart"
      :width="700"
      :height="300"
      :options="radarOption"
    />
    <div class="badge-radar">
      1. Hover over a Design Process from the Radar Chart to display values<br />
      2. Click a Company to display individual chart
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RadarChart } from "vue-chart-3";
import { radarChart, radarOption } from "@/charts/RadarConfig";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default defineComponent({
  name: "RadarComponent",
  components: {
    RadarChart,
  },
  data() {
    return {
      radarChart: {} as Record<string, unknown>,
      radarOption: {} as Record<string, unknown>,
    };
  },
  created() {
    this.initChart();
  },
  methods: {
    initChart(): void {
      this.radarChart = radarChart;
      this.radarOption = radarOption;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "src/assets/scss/mixins";
.chart-radar {
  width: 970px;
  height: 446px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  background: #fff;
  margin: 24px 24px;
  &__title {
    @include fontTitle;
    padding-top: 16px;
    padding-left: 16px;
    letter-spacing: 0.5px;

    color: #212121;
  }
}
.badge-radar {
  width: 500px;
  height: 38px;
  background: rgba(255, 187, 56, 0.3);
  border-radius: 4px;
  padding: 4px 8px;
  @include descriptionText;
  color: #c07f02;
  text-align: left;
  margin: 16px 16px;
}
</style>
