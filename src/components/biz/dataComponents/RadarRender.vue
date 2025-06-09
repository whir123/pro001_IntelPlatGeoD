<template>
  <div ref="chartContainer" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TitleComponentOption,
  LegendComponent,
  LegendComponentOption,
} from "echarts/components";
import { RadarChart, RadarSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

// 初始化 ECharts
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);
const chartContainer = ref(null);
let chartInstance: any = null;
const initChart = () => {
  if (!chartInstance) {
    const chartDom = chartContainer.value;
    if (!chartInstance && chartDom) {
      const myChart = echarts.init(chartDom);
      const option: echarts.ComposeOption<
        TitleComponentOption | LegendComponentOption | RadarSeriesOption
      > = {
        color: ["#67F9D8", "#FFE434", "#56A3F1", "#FF917C"],
        title: {
          text: "Customized Radar Chart",
        },
        legend: {},
        radar: [
          {
            indicator: [
              { name: "主服务使用率" },
              { name: "集群使用率" },
              { name: "业务功能使用率" },
              { name: "访问PUA数据库使用率" },
              { name: "人员使用率" },
            ],
            center: ["20%", "50%"],
            radius: 80,
            startAngle: 90,
            splitNumber: 4,
            shape: "circle",
            axisName: {
              formatter: "【{value}%】",
              color: "#428BD4",
            },
            splitArea: {
              areaStyle: {
                color: ["#77EADF", "#26C3BE", "#64AFE9", "#428BD4"],
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowBlur: 10,
              },
            },
            axisLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgba(211, 253, 250, 0.8)",
              },
            },
          },
          {
            indicator: [
              { name: "111", max: 150 },
              { name: "Indicator2", max: 150 },
              { name: "Indicator3", max: 150 },
              { name: "Indicator4", max: 120 },
              { name: "Indicator5", max: 108 },
              { name: "Indicator6", max: 72 },
            ],
            center: ["75%", "50%"],
            radius: 120,
            axisName: {
              color: "#fff",
              backgroundColor: "#666",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
        ],
        series: [
          {
            type: "radar",
            emphasis: {
              lineStyle: {
                width: 4,
              },
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000],
                name: "Data A",
              },
              {
                value: [60, 5, 0.3, -100, 1500],
                name: "Data B",
                areaStyle: {
                  color: "rgba(255, 228, 52, 0.6)",
                },
              },
            ],
          },
          {
            type: "radar",
            radarIndex: 1,
            data: [
              {
                value: [120, 118, 130, 100, 99, 70],
                name: "Data C",
                symbol: "rect",
                symbolSize: 12,
                lineStyle: {
                  type: "dashed",
                },
                label: {
                  show: true,
                  formatter: function (params: any) {
                    return params.value as string;
                  },
                },
              },
              {
                value: [100, 93, 50, 90, 70, 60],
                name: "Data D",
                areaStyle: {
                  color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                    {
                      color: "rgba(255, 145, 124, 0.1)",
                      offset: 0,
                    },
                    {
                      color: "rgba(255, 145, 124, 0.9)",
                      offset: 1,
                    },
                  ]),
                },
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
      chartInstance = myChart;
    }
  }
};

onMounted(() => {
  initChart();
});
</script>

<style scoped>
/* 其他样式 */
</style>