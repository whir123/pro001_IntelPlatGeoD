<template>
  <el-tabs type="border-card">
    <el-tab-pane label="监测数据分析">
      <img class="tailing-image" src="../../../image/tailing_精准检测图表.png">
    </el-tab-pane>
    <el-tab-pane label="裂缝信息">
      <img class="tailing-image" src="../../../image/tailing_边坡裂缝.png" >
    </el-tab-pane>
    <el-tab-pane label="无人机识别影像">
      <img class="tailing-image" src="../../../image/tailing_无人机识别裂缝走向.png" >
    </el-tab-pane>
    <el-tab-pane label="激光雷达影像">
      <img class="tailing-image" src="../../../image/tailing_激光雷达.png">
    </el-tab-pane>
    <el-tab-pane label="精准监测">
      <img class="tailing-image" src="../../../image/tailing_传感器位置和监测内容.jpg">
    </el-tab-pane>
  </el-tabs>

  <el-dialog v-model="dialogVisible" title="编辑信息">
    <el-form :model="form">
      <el-form-item label="测点名称" label-width="100px">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="分组名称" label-width="100px">
        <el-input v-model="form.classification" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="测点ID" label-width="100px">
        <el-input v-model="form.id" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="测点key" label-width="100px">
        <el-input v-model="form.key" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="监测编码" label-width="100px">
        <el-input v-model="form.code" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="数据来源" label-width="100px">
        <el-input v-model="form.source" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="维护状态" label-width="100px">
        <el-select v-model="form.status" placeholder="请选择维护状态">
          <el-option label="运行" value="运行"></el-option>
          <el-option label="停止" value="停止"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import LineChart from './LineChart.vue'

// const duicun = [
//   {
//     id: 1,
//     name: "坝上放矿管道",
//     imageUrl: "https://example.com/image1.jpg",
//     description: "这是坝上放矿管道的详细描述。",
//   },
//   {
//     id: 2,
//     name: "尾矿初期坝",
//     imageUrl: "https://example.com/image2.jpg",
//     description: "这是尾矿初期坝的详细描述。",
//   },
//   {
//     id: 3,
//     name: "尾矿后期坝",
//     imageUrl: "https://example.com/image3.jpg",
//     description: "这是尾矿后期坝的详细描述。",
//   },
//   {
//     id: 4,
//       name: "浸润线观测",
//     imageUrl: "https://example.com/image4.jpg",
//     description: "这是侵润线观测的详细描述。",
//   },
//   {
//     id: 5,
//     name: "位移观测",
//     imageUrl: "https://example.com/image5.jpg",
//     description: "这是位移观测的详细描述。",
//   },
//   {
//     id: 6,
//     name: "排渗设施",
//     imageUrl: "https://example.com/image6.jpg",
//     description: "这是排渗设施的详细描述。",
//   },
// ];

// const paihong = [
//   {
//     id: 1,
//     name: "截洪沟",
//     imageUrl: "https://example.com/image7.jpg",
//     description: "这是截洪沟的详细描述。",
//   },
//   {
//     id: 2,
//     name: "溢洪道",
//     imageUrl: "https://example.com/image8.jpg",
//     description: "这是溢洪道的详细描述。",
//   },
//   {
//     id: 3,
//     name: "排水井",
//     imageUrl: "https://example.com/image9.jpg",
//     description: "这是排水井的详细描述。",
//   },
//   {
//     id: 4,
//     name: "排水管",
//     imageUrl: "https://example.com/image10.jpg",
//     description: "这是排水管的详细描述。",
//   },
//   {
//     id: 5,
//     name: "排水隧道",
//     imageUrl: "https://example.com/image11.jpg",
//     description: "这是排水隧道的详细描述。",
//   },
// ];

// const huishui = [
//   {
//     id: 1,
//     name: "库内排洪井",
//     imageUrl: "https://example.com/image12.jpg",
//     description: "利用库内排洪井将澄清水引入下游回水泵站，再扬至高位水池。",
//   },
//   {
//     id: 2,
//     name: "库内排洪管",
//     imageUrl: "https://example.com/image13.jpg",
//     description: "利用库内排洪管将澄清水引入下游回水泵站，再扬至高位水池。",
//   },
//   {
//     id: 3,
//     name: "活动泵站",
//     imageUrl: "https://example.com/image14.jpg",
//     description: "在库内水面边缘设置活动泵站，直接抽取澄清水，扬至高位水池。",
//   }
// ];

// const damDisplacement = ref({
//   currentPosition: 12.5,
//   trend: "稳定"
// });

// const infiltrationLine = ref({
//   currentHeight: 3.2,
//   trend: "上升"
// });

// const reservoirWaterLevel = ref({
//   currentLevel: 15.8,
//   trend: "下降"
// });

// const dryBeachLength = ref({
//   currentLength: 250,
//   trend: "增加"
// });

// const rainfall = ref({
//   currentRainfall: 10.3,
//   trend: "减少"
// });
const tableData = [
  {
    name: "p1-3",
    classification: "GNSS",
    id: "1",
    key: "15645lsifnfasi",
    code: "123456",
    source: "设备采集",
    status: "运行",
  },
  {
    name: "p1-4",
    classification: "坡度角器",
    id: "2",
    key: "15645lsifnfasi",
    code: "123456",
    source: "设备采集",
    status: "运行",
  },
  {
    name: "p1-5",
    classification: "裂缝计",
    id: "3",
    key: "15645lsifnfasi",
    code: "123456",
    source: "设备采集",
    status: "运行",
  },
  {
    name: "p1-6",
    classification: "裂缝计",
    id: "4",
    key: "15645lsifnfasi",
    code: "123456",
    source: "设备采集",
    status: "运行",
  }
]

const dialogVisible = ref(false);
const form = ref({
  name: '',
  classification: '',
  id: '',
  key: '',
  code: '',
  source: '',
  status: ''
});

const handleEdit = (row: any) => {
  dialogVisible.value = true;
  form.value = { ...row };
};

const saveEdit = () => {
  const index = tableData.findIndex(item => item.id === form.value.id);
  if (index !== -1) {
    tableData.splice(index, 1, { ...form.value });
  }
  dialogVisible.value = false;
};

const handleDelete = (row: any) => {
  const index = tableData.findIndex(item => item.id === row.id);
  if (index !== -1) {
    tableData.splice(index, 1);
  }
};

const handleMaintenance = (row: any) => {
  // 这里可以添加维护逻辑
  console.log('维护:', row);
};

</script>

<style scoped>
.tailing-image {
  object-fit: contain;
  display: block;
  margin-top:2vh;
  margin-left:2vw;
  width:70vw;
  height: 85vh;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header span {
  font-size: 22px;
  font-weight: bold;
}

.card-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.monitor-value {
  text-align: center;
  width: 100%;
}

.video-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>