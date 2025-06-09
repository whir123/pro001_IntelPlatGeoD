<template>
  <div ref="chartContainer" style="width: 100%; height: 100%">
    <!-- 其他内容 -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

// 初始化 ECharts
echarts.use([GaugeChart, CanvasRenderer]);

const chartContainer = ref(null);
let chartInstance: any = null;

const props = defineProps<{
  name: string;
}>();
const initChart = () => {
  const option = {
    series: [
      {
        type: "gauge",
        axisLine: {
          lineStyle: {
            width: 10,
            color: [
              [0.3, "#67e0e3"],
              [0.7, "#37a2da"],
              [1, "#fd666d"],
            ],
          },
        },
        pointer: {
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: "#fff",
            width: 2,
          },
        },
        splitLine: {
          distance: -10,
          length: 10,
          lineStyle: {
            color: "#fff",
            width: 4,
          },
        },
        axisLabel: {
          color: "inherit",
          distance: 12,
          fontSize: 12,
        },
        detail: {
          valueAnimation: true,
          formatter: "{value} %",
          color: "inherit",
          fontSize: 16,
          offsetCenter: [0, "50%"],
        },
        data: [
          {
            name: props.name,
            value: +(Math.random() * 100).toFixed(2),
          },
        ],
      },
    ],
  };

  if (!chartInstance && chartContainer.value) {
    const myChart = echarts.init(chartContainer.value);
    myChart.setOption(option);
    chartInstance = myChart;

    setInterval(() => {
      myChart.setOption({
        series: [
          {
            data: [
              {
                name: props.name,
                value: +(Math.random() * 100).toFixed(2),
              },
            ],
          },
        ],
      });
    }, 2000);
  }
};

onMounted(() => {
  initChart();
});
</script>

<style scoped>
.gauge-container {
  width: 120px;   /* 或者 100px，根据你想要的大小 */
  height: 120px;
}
</style>