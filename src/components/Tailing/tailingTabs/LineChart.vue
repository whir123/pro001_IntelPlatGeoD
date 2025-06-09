<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>;

const chartContainer = ref<HTMLDivElement>();
let myChart = null;

// 示例数据
const data = [
  {
    id: 1,
    name: "点位1",
    data: [
      { date: "2021-01-01", value: 10 },
      { date: "2021-01-02", value: -20 },
      { date: "2021-01-03", value: 30 },
      { date: "2021-01-04", value: -40 },
      { date: "2021-01-05", value: -20 },
      { date: "2021-01-06", value: 50 },
      { date: "2021-01-07", value: -60 },
      { date: "2021-01-08", value: 70 },
      { date: "2021-01-09", value: -80 },
    ],
  },
  {
    id: 2,
    name: "点位2",
    data: [
      { date: "2021-01-01", value: 10 },
      { date: "2021-01-02", value: -10 },
      { date: "2021-01-03", value: 20 },
      { date: "2021-01-04", value: -30 },
      { date: "2021-01-05", value: 25 },
      { date: "2021-01-06", value: 10 },
      { date: "2021-01-07", value: -20 },
      { date: "2021-01-08", value: 30 },
      { date: "2021-01-09", value: -50 },
    ],
  },
  {
    id: 3,
    name: "点位3",
    data: [
      { date: "2021-01-01", value: -10 },
      { date: "2021-01-02", value: -10 },
      { date: "2021-01-03", value: -20 },
      { date: "2021-01-04", value: 30 },
      { date: "2021-01-05", value: -5 },
      { date: "2021-01-06", value: -10 },
      { date: "2021-01-07", value: 20 },
      { date: "2021-01-08", value: 32 },
      { date: "2021-01-09", value: -10 },
    ],
  },
];

// 处理数据并生成图表配置
const generateOptions = () => {
  const series: LineSeriesOption[] = [];
  const legendData: string[] = [];
  const xAxisData: string[] = data[0].data.map((point) => point.date);
  data.forEach((item) => {
    legendData.push(item.name);

    const seriesData = item.data.map((point) => ({
      name: point.date,
      value: [point.date, point.value],
    }));

    series.push({
      name: item.name,
      type: "line",
      data: seriesData,
    });
  });

  const option: EChartsOption = {
    title: {
      text: "形变曲线图mm/s",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {
      data: legendData,
    },
    grid: {
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxisData,
    },
    yAxis: {
      type: "value",
    },
    series: series,
  };

  return option;
};

onMounted(() => {
  if (chartContainer.value) {
    myChart = echarts.init(chartContainer.value);
    myChart.setOption(generateOptions());
    // window.addEventListener("resize", function () {
    //   myChart.resize();
    // });
  }
});
</script>

<style scoped>
.chart-container {
  width: 550px;
  height: 400px;
}
</style>