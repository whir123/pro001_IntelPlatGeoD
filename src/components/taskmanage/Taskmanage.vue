<template>
  <div class="background">
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="总监控信息" name="first">
        <div class="video-container1" style="height:900px;overflow-y: auto;">
          <div class="video_2" style="margin-top: 20px;">
            <span class="font_style" style="margin: 20px 0 0px 20px;">XXX公路边坡:</span>
            <taskmange_video></taskmange_video>
          </div>
          <div class="video_3" style="margin-top: 20px;">
            <span class="font_style" style="margin: 20px 0 0px 20px;">XXX公路边坡:</span>
            <taskmange_video></taskmange_video>
          </div>
          <div class="video_4" style="margin-top: 20px;">
            <span class="font_style" style="margin: 20px 0 0px 20px;">XXX公路边坡:</span>
            <taskmange_video></taskmange_video>
          </div>
          <div style="height: 30px;"> </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公路边坡基本信息管理" name="fourth">
        <div style="margin-top: 0px;">
          <div class="video-monitoring-container">
            <!-- Sidebar Menu -->
            <el-menu class="sidebar-menu" background-color="#001f3f" text-color="#ffffff" active-text-color="#409EFF"
              :default-openeds="['1']" default-active="1-1">
              <el-menu-item>
                <el-input style="width: 240px" placeholder="查找边坡">
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <search />
                    </el-icon>
                  </template>
                </el-input>
              </el-menu-item>
              <el-sub-menu index="1">
                <template #title>
                  <span>公路边坡</span>
                </template>
                <el-menu-item index="1-1" @click="selectCamera('a号线公路边坡')">a号线公路边坡</el-menu-item>
                <el-menu-item index="1-2" @click="selectCamera('b号线公路边坡')">b号线公路边坡</el-menu-item>
                <el-menu-item index="1-3" @click="selectCamera('c号线公路边坡')">c号线公路边坡</el-menu-item>
                <el-menu-item index="1-4" @click="selectCamera('d号线公路边坡')">d号线公路边坡</el-menu-item>
              </el-sub-menu>
            </el-menu>

            <!-- Main Content -->
            <div class="main-content" style="overflow: auto;">
              <div>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                  <el-menu-item index="2" @click="Remote_message">
                    <el-icon>
                      <document />
                    </el-icon>
                    <span>裂缝信息</span>
                  </el-menu-item>
                  <el-menu-item index="1" @click="miner_message">
                    <el-icon>
                      <document />
                    </el-icon>
                    <span>边坡基本信息</span>
                  </el-menu-item>
                  <el-menu-item index="3" @click="viedo_message">
                    <el-icon>
                      <VideoCameraFilled />
                    </el-icon>
                    <span>监控信息</span>
                  </el-menu-item>
                </el-menu>
              </div>
              <div v-if="miner_message_show">
                <div class="miner_message" style="display: flex;justify-content: space-around;margin-top: 8px;">
                  <div class="miner_message_info">
                    <h2>{{ mine.name }}</h2>
                    <p><strong>位置：</strong>{{ mine.location }}</p>
                    <p><strong>面积：</strong>{{ mine.area }} 平方公里</p>
                    <p><strong>深度：</strong>{{ mine.depth }} 米</p>
                    <p><strong>主要矿产：</strong>{{ mine.methods }}</p>
                    <p><strong>开采方式：</strong>{{ mine.envirenment }}</p>
                  </div>
                  <div class="miner_message_info">
                    <h2>{{ designInfo.name }} - 矿井设计信息</h2>
                    <p><strong>设计深度：</strong>{{ designInfo.depth }} 米</p>
                    <p><strong>台阶高度：</strong>{{ designInfo.benchHeight }} 米</p>
                    <p><strong>最终边坡角：</strong>{{ designInfo.slopeAngle }}°</p>
                    <p><strong>运输方式：</strong>{{ designInfo.transportMethod }}</p>
                    <p><strong>排水系统：</strong>{{ designInfo.drainageSystem }}</p>
                    <p><strong>年采剥总量：</strong>{{ designInfo.annualOutput }} 万吨</p>
                  </div>
                  <div class="miner_message_info">
                    <h2>{{ constructionInfo.name }} - 矿井施工信息</h2>
                    <p><strong>施工开始时间：</strong>{{ constructionInfo.startDate }}</p>
                    <p><strong>预计完工时间：</strong>{{ constructionInfo.endDate }}</p>
                    <p><strong>施工单位：</strong>{{ constructionInfo.company }}</p>
                    <p><strong>施工进度：</strong>
                      <progress :value="constructionInfo.progress" max="100"></progress>
                      {{ constructionInfo.progress }}%
                    </p>
                    <p><strong>施工方法：</strong>{{ constructionInfo.method }}</p>
                  </div>
                </div>
                <div class="miner_message" style="display: flex;justify-content: space-around;margin-top: 10px;">
                  <div class="miner_message_info">
                    <h2>{{ productionInfo.name }} - 矿井生产信息</h2>
                    <p><strong>生产开始时间：</strong>{{ productionInfo.startDate }}</p>
                    <p><strong>当前日产量：</strong>{{ productionInfo.dailyOutput }} 吨</p>
                    <p><strong>累计产量：</strong>{{ productionInfo.totalOutput }} 吨</p>
                    <p><strong>主要矿种：</strong>{{ productionInfo.mainMinerals }}</p>
                    <p><strong>生产设备：</strong>{{ productionInfo.equipment.join(", ") }}</p>
                    <p><strong>工作班次：</strong>{{ productionInfo.shifts }} 班/日</p>
                  </div>
                  <div class="miner_message_info">
                    <h2>{{ techMeasures.name }} - 生产投产技术措施</h2>
                    <p><strong>投产日期：</strong>{{ techMeasures.productionDate }}</p>
                    <p><strong>主要技术措施：</strong>{{ techMeasures.keyMeasures }}</p>
                    <p><strong>环保措施：</strong>{{ techMeasures.environmentalMeasures }}</p>
                    <p><strong>安全生产管理：</strong>{{ techMeasures.safetyManagement }}</p>
                  </div>
                  <div class="miner_message_info">
                    <h2>{{ drainageInfo.name }} - 露天矿山排水措施</h2>
                    <p><strong>排水目标：</strong>{{ drainageInfo.goals }}</p>
                    <p><strong>排水方式：</strong>{{ drainageInfo.methods }}</p>
                    <p><strong>环保措施：</strong>{{ drainageInfo.environmental }}</p>
                    <p><strong>维护管理计划：</strong>{{ drainageInfo.maintenancePlan }}</p>
                  </div>
                </div>
              </div>
              <div v-if="viedo_message_show">
                <div
                  style="padding: 10px;display: grid;grid-template-columns: repeat(2, 1fr);gap: 10px;overflow: auto;">
                  <div v-for="item in data" style="margin-right: 20px;">
                    <span style="margin-bottom: 10px;display: block;">{{ item.message }}:</span>
                    <video-player style="width: 550px;height: 330px;padding: 20px" :options=item.options
                      @play="onPlay" />
                  </div>
                </div>
              </div>
              <div v-if="remote_message_show">
                <taskmange_remote></taskmange_remote>
              </div>
            </div>
          </div>

        </div>
      </el-tab-pane>
    </el-tabs>

  </div>

</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Hls from 'hls.js';
import { ElMessage } from 'element-plus';
import { Document, VideoCameraFilled } from '@element-plus/icons-vue'
import taskmange_video from './taskmange_video.vue';
import taskmange_remote from './taskmanage_remote.vue';
import { Search } from '@element-plus/icons-vue'
const activeName = ref('first')
const miner_message_show = ref(false)
const viedo_message_show = ref(false)
const remote_message_show = ref(true)
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const mine = {
  name: "西藏XXX露天矿",
  location: "位于西藏省XX市XX县，地理坐标：纬度 34°N， 经度 112°E",
  area: 12.5,
  depth: 300,
  mainResources: "铁矿石、铜矿石",
  methods: '露天开采，分阶段逐步推进',
  envirenment: '矿区周围为山地环境，属于典型的生态脆弱区，矿山已完成环境影响评估（EIA）并采取了相关环保措施'
}
const designInfo = {
  name: "安徽XXX高速公路",
  depth: 500, // 矿井设计深度
  benchHeight: 12, // 台阶高度
  slopeAngle: 45, // 最终边坡角
  transportMethod: "卡车运输", // 运输方式
  drainageSystem: "中央排水系统", // 排水系统
  annualOutput: 1500, // 年采剥总量（万吨）
}
const constructionInfo = {
  name: "苏州XXX填埋场",
  startDate: "2024-01-15", // 开始时间
  endDate: "2025-06-30", // 预计完工时间
  company: "XXX工程有限公司", // 施工单位
  progress: 65, // 施工进度（百分比）
  method: "分阶段爆破+卡车运输开挖", // 施工方法
}
const productionInfo = {
  name: "浙江XXX尾矿", // 矿井名称
  startDate: "2023-05-01", // 生产开始时间
  dailyOutput: 8000, // 当前日产量（吨）
  totalOutput: 1200000, // 累计产量（吨）
  mainMinerals: "铁矿石、铜矿石", // 主要矿种
  equipment: ["电铲", "卡车", "破碎机"], // 生产设备
  shifts: 3, // 每日工作班次
}
const techMeasures = {
  name: "成都XXX露天矿", // 矿井名称
  productionDate: "2024-03-15", // 投产日期
  keyMeasures:
    "采用分阶段爆破工艺，优化矿石运输路线，提升生产效率", // 主要技术措施
  environmentalMeasures:
    "建设粉尘控制系统，优化废水排放处理工艺", // 环保措施
  safetyManagement:
    "完善应急预案，实施全天候生产监控，加强员工安全培训", // 安全生产管理
}
const drainageInfo = {
  name: "宁波XXX高速路", // 矿井名称
  goals: "防止矿坑积水，保障矿山正常生产运行", // 排水目标
  methods:
    "采用分级排水系统，结合自然排水和机械排水，确保雨季排水能力", // 排水方式
  equipment: [
    "高效水泵（型号：XJH-300）",
    "排水管道（材质：PVC，直径：400mm）",
  ], // 设备配置
  environmental:
    "设置沉淀池减少泥沙排放，水质达标后再排入自然水系", // 环保措施
  maintenancePlan:
    "每季度检查排水设备运行状态，定期清理排水管道和沉淀池", // 维护管理计划
}
const data = ref(([
  {
    message: "边坡角监控",
    options: {
      src: "http://example.com/video2.m3u8", //视频源
      poster: '', //封面
      controls: true
    }
  },
  {
    message: "片帮角监控",
    options: {
      src: "http://example.com/video2.m3u8", //视频源
      poster: '', //封面
      controls: true
    }
  },
  {
    message: "溜槽高度监控",
    options: {
      src: "http://example.com/video2.m3u8", //视频源
      poster: '', //封面
      controls: true
    }
  },
  {
    message: "排土场监控",
    options: {
      src: "http://example.com/video2.m3u8", //视频源
      poster: '', //封面
      controls: true
    }
  }
]))
const onPlay = (ev: any) => {
  console.log('播放')
}

const videoSources = ref([
  { url: 'http://example.com/video2.m3u8' },
  { url: 'http://example.com/video2.m3u8' },
  { url: 'http://example.com/video3.m3u8' },
  { url: 'http://example.com/video3.m3u8' },
]);

// 用于存放 <video> 标签的引用
const videoRefs = ref([]);

// 模拟使用 HLS.js 处理 HLS 视频流
const initializeVideoStreams = () => {
  videoSources.value.forEach((video, index) => {
    const videoElement = videoRefs.value[index];
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(video.url);
      hls.attachMedia(videoElement);
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = video.url;
    }
  });
};
// 当组件挂载时初始化视频流
onMounted(() => {
  initializeVideoStreams();
});
// Reactive data for videos
const videoStreams = ref([]); // List of video streams

// Mock camera selection function
const selectCamera = (location: string | number) => {
  // Example video URLs for selected cameras
  const videos = {
    '西藏a煤矿': 'http://example.com/video2.m3u8',
    '青海a煤矿': 'https://example.com/video2.m3u8',
    '西藏b煤矿': 'https://example.com/video3.m3u8',
    '青海b煤矿': 'https://example.com/video4.m3u8',
  };
  videoStreams.value = [{ url: videos[location] }];
  ElMessage.success(`切换到 ${location}`);
};
const activeIndex = ref('2')

const miner_message = () => {
  console.log("信息管理");
  miner_message_show.value = true
  viedo_message_show.value = false
  remote_message_show.value = false
}
const viedo_message = () => {
  console.log("监控管理");
  miner_message_show.value = false
  viedo_message_show.value = true
  remote_message_show.value = false
}
const Remote_message = () => {
  console.log("遥感影像展示");
  remote_message_show.value = true
  miner_message_show.value = false
  viedo_message_show.value = false
}
</script>

<style scoped>
.background {
  position: absolute;
  left: 200px;
  top: 15px;
  border-radius: 10px;
  overflow: hidden;
  /* 防止内部元素溢出 */
  width: calc(100% - 220px);
  height: calc(100% - 30px);
  /*background-color: #ccd9e7;*/
  background-color: white;
}

video {
  width: 400px;
  height: 250px;
}

.font_style {
  line-height: 1.5em;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 19px;
  color: #ffffff;
  background: #005b7f;
}

:deep(.el-tabs__nav-scroll) {
  background-color: transparent;
}

:deep(.el-tabs__item.is-active, .el-tabs__item:hover) {
  color: #2267c0;
  font-size: larger;
  font-weight: bold;
}

:deep(#tab-first) {
  /*color: #2267c0 ;*/
  font-weight: bold;
}

:deep(#tab-third) {
  /*color: #2267c0 ;*/
  font-weight: bold;
}

:deep(#tab-second) {
  /*color: #2267c0 ;*/
  font-weight: bold;
}

:deep(#tab-fourth) {
  /*color: #2267c0 ;*/
  font-weight: bold;
}

.video-monitoring-container {
  display: flex;
  height: 100vh;
}

.sidebar-menu {
  width: 200px;
  background-color: #001f3f;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f0f2f5;
  width: 95vw;
}

.video-container {
  background-color: #000;
  border: 2px solid #409eff;
  padding: 5px;
}

.miner_message_info {
  padding: 10px;
  width: 25vw;
  height: 350px;
  border: 0.5px gray solid;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: 400px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.miner_message_info h2 {
  margin-bottom: 10px;
  color: #333;
}

.miner_message_info p {
  margin: 5px 0;
  line-height: 1.6;
  color: #555;
}
</style>
