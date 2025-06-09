<template>
  <div class="content_insardata">
    <div class="top">
      <h3>InSAR成果数据查询</h3>
      <el-form-item label="查询区域选择" class="chick_area">
        <el-select v-model="form" placeholder="请选择区域">
          <el-option label="青海xxx矿区" value="青海xxx矿区" />
          <el-option label="西藏xxx矿区" value="西藏xxx矿区" />
        </el-select>
      </el-form-item>
      <div class="time_check">
        <span class="start_time">开始时间</span>
        <el-date-picker v-model="starttime" type="datetime" placeholder="Select date and time" />
        <span class="end_time">结束时间</span>
        <el-date-picker v-model="endtime" type="datetime" placeholder="Select date and time" />
      </div>
      <div class="data_query">
        <el-button type="primary" size="default" style="width: 200px;" @click="data_query">InSAR成果数据查询</el-button>
      </div>
      <div class="process_information" v-if="query_progress">
        <el-progress type="dashboard" :percentage="percentage" :color="colors" />
      </div>
    </div>
    <div class="center" v-if="data_query_show">
      <el-card style="max-width: 80vw">
        <template #header>
          <div class="data-header">
            <span>{{ form }}区域的InSAR成果详情</span>
          </div>
        </template>
        <div class="data_center">
          <div class="time_information">
            <h4>InSAR处理影像的在轨SAR卫星详细信息:</h4>
            <el-table border style="margin: 10px 0;width: 650px;" :data="SAR_message" max-height="450">
              <el-table-column prop="name" label="名称" width="150" />
              <el-table-column prop="message" label="信息" />
            </el-table>
          </div>
          <div class="data_parameter">
            <h4>InSAR处理详细文件与参数信息:</h4>
            <el-table border style="margin: 10px 0;width: 700px;" :data="data_parameter" max-height="450">
              <el-table-column prop="name" label="名称" width="200px" />
              <el-table-column prop="message" label="信息" width="300px" />
            </el-table>
          </div>
          <div class="data_tif">
            <h4>InSAR成果详细影像信息</h4>
            <img src="../../../image/statellite_insardatamanage.png" />
          </div>
        </div>
      </el-card>
    </div>
  </div>


</template>


<script setup lang="ts">
import { ref } from 'vue'
const form = ref()
const starttime = ref()
const endtime = ref()
const query_progress = ref(false)
const data_query_show = ref(false)
const percentage = ref(0)
// 进度条
const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
const data_query = () => {
  query_progress.value = true
  const timer = setInterval(() => {
    if (percentage.value >= 100) {
      clearInterval(timer);
      alert("数据查询完成")
      query_progress.value = false
      percentage.value = 0
      data_query_show.value = true
    } else {
      percentage.value = percentage.value + 10
    }
  }, 500)

}
const SAR_message = [
  {
    name: '国籍',
    message: '中国',
  },
  {
    name: '研发机构',
    message: '天仪研究院',
  },
  {
    name: '任务类型',
    message: '遥感（雷达）',
  },
  {
    name: '发射日期',
    message: '2023年06月07日',
  },
  {
    name: '质量',
    message: '300 kg',
  },
  {
    name: '国际卫星标识符',
    message: '2023-081D',
  },
  {
    name: 'NORAD',
    message: '56849',
  },
]
const data_parameter = [
  {
    name: '工作名称',
    message: 'XiZang20241129_SBASInSAR',
  },
  {
    name: 'InSAR处理开始时间',
    message: '12 天',
  },
  {
    name: 'InSAR处理结束时间',
    message: '2020-10-17',
  },

  {
    name: 'Dem文件',
    message: 'XiZang_Dem.tiff',
  },
  {
    name: 'kml文件',
    message: 'XiZang_SBASKMLMeikuang_kml.kml',
  },
  {
    name: '时间基线',
    message: '36',
  },
  {
    name: '空间基线',
    message: '2',
  },
  {
    name: '距离向视数',
    message: '0.2',
  },
  {
    name: '方位向视数',
    message: '0.2',
  },
  {
    name: '干涉工作流中 解缠相关系数阈值',
    message: '0.2',
  },
  {
    name: '第一次反演 解缠相干系数阈值',
    message: '0.2',
  },
  {
    name: '第二次反演 相关系数阈值',
    message: '0.2',
  },
  {
    name: '产品时间一致性阈值',
    message: '0.2',
  },
]
</script>


<style scoped>
span {
  color: white;
}

h3 {
  color: white;
}

h4 {
  color: white;
}

.content_insardata {
  overflow: auto;
}

.top {
  width: 900px;
  margin-top: -20px;
  margin-bottom: 30px;
  margin-left: 17vw;
  background-color: rgba(21, 95, 161, 0.1);
  padding: 15px;

  .chick_area {
    width: 350px;
  }

  .time_check {
    display: inline;

    .start_time {
      margin-right: 10px;
    }

    .end_time {
      margin: 0 10px;
    }
  }

  .data_query {
    margin-left: 20px;
    display: inline;
  }

  .process_information {
    position: fixed;
    bottom: 5vh;
    right: 50vw;
    width: 130px;
    height: 10vh;
    z-index: 9999;
  }
}

.center {
  width: 1600px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: transparent;

  .data_center {
    display: flex;
    justify-content: space-around;
    height: 45vh;

    .time_information {
      width: 300px;
    }

    .data_parameter {
      width: 400px;
    }

    .data_tif {
      img {
        width: 350px;
        height: 350px;
        margin-top: 0vh;
      }
    }
  }
}

:deep(.el-form-item__label) {
  color: white;
}

:deep(.el-progress__text) {
  color: white;
}

:deep(.el-card) {
  --el-card-bg-color: rgba(21, 95, 161, 0.1);
}

:deep(.el-table) {
  --el-table-header-bg-color: transparent;
  --el-table-bg-color: transparent;
  --el-table-tr-bg-color: transparent;
  color: white;
  --el-table-header-text-color: white;
  --el-table-row-hover-bg-color: gray;
}
</style>