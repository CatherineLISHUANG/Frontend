<script>
import { Chart, registerables } from "chart.js";

export default {
  name: "ChartComponent",
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    Chart.register(...registerables); // NOTE: We can register one by one, but we are lazy...

    const dataKeys = this.chartData.data.map((d) => d.key);
    const dataValues = this.chartData.data.map((d) => d.value);

    const chartId = this.chartData.name;
    const chartType = this.chartData.type;
    const backgroundColor = this.chartData.backgroundColor;
    const borderColor = this.chartData.borderColor;
    const yMin = this.chartData.yMin;
    const yMax = this.chartData.yMax;
    const yTitle = this.chartData.yTitle;
    const xTitle = this.chartData.xTitle;

    const data = {
      labels: dataKeys,
      datasets: [
        {
          label: chartId,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          data: dataValues,
        },
      ],
    };

    const config = {
      type: chartType,
      data: data,
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: yTitle,
            },
            min: yMin,
            max: yMax,
          },
          x: {
            title: {
              display: true,
              text: xTitle,
            },
          },
        },
      },
    };

    new Chart(document.getElementById(chartId), config);
  },
};
</script>

<template>
  <div>
    <canvas :id="chartData.name" class="chart"></canvas>
  </div>
</template>


<style scoped>
.chart {
  width: 100%;
}
</style>