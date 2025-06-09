<template>
<div class="interferogram_message">
    <div class="interferogram_style" style="display: flex;align-items: center;">
        <div class="parameter_style" >
            <div style="margin-right: 10px;">距离向视数</div>
            <el-input v-model="distance_num" style="width: 120px;margin-right:20px;"></el-input>
        </div>
        <div class="parameter_style">
            <div style="margin-right: 10px;">方位向视数</div>
            <el-input v-model="azimuthal_num" style="width: 120px;margin-right:20px;"></el-input>
        </div>
        <div class="parameter_style">
            <div style="margin-right: 10px;">解缠阈值</div>
            <el-input v-model="disentanglement_num" style="width: 120px;margin-right:20px;"></el-input>
        </div>
    </div>
    <div class="interferogram_style"  style="display: flex;align-items: center;">
        <div class="parameter_style">
            <div style="margin-right: 10px;">滤波算法</div>
            <el-select
                v-model="value"
                placeholder="请选择滤波算法"
                size="large"
                style="width: 150px;margin-right:20px"
                >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
        <div class="parameter_style">
            <div style="margin-right: 10px;">解缠方法</div>
            <el-select
                v-model="value1"
                placeholder="请选择解缠方法"
                size="large"
                style="width: 150px;margin-right:20px"
                >
                <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label"
                    :value="item.value1"
                />
            </el-select>
        </div>
        <div class="parameter_style">
            <div style="margin-right: 10px;">优化算法</div>
            <el-select
                v-model="value2"
                placeholder="请选择优化算法"
                size="large"
                style="width: 150px;margin-right:20px"
                >
                <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value2"
                />
            </el-select>
        </div>
        <div class="parameter_style">
            <div style="margin-right: 10px;">导入外部大气数据</div>
            <el-button type="primary" size="default" style="margin-right:40px;width: 150px;" @click="choseFiles">
                <span>导入数据</span>
            </el-button>
            <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" />
        </div>
    </div>
    <div style="margin-top: 30px;">
        <el-button type="primary" size="default" style="margin-right:40px;width: 200px;" @click ="S1_interferogram">数据处理
        </el-button>
        <el-button type="primary" size="default" style="width: 200px;margin-left: 20px;" @click="S1_interferogram_data" :disabled = "S1_interferogram_show">查看处理结果
        </el-button>
    </div>
    <div style="margin-top: 20px;display: flex;justify-content: center;">
        <el-progress v-if="s1interferogram_progress" type="dashboard" :percentage="percentage" :color="colors"/>
    </div>
    <div style="margin-top: 20px;" v-if="interferogram_message">
        <span style="color: white;">干涉处理信息:</span>
        <el-table border style="margin: 10px 0;width: 650px;" :data="interferogram_Data">
            <el-table-column prop="number" label="编号" width="150"/>
            <el-table-column prop="name" label="文件名"/>
        </el-table>
    </div>
</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const distance_num =ref(0.2)
const azimuthal_num =ref(0.2)
const disentanglement_num=ref(0.2)
const s1interferogram_progress =ref(false)
const interferogram_message =ref(false)
const S1_interferogram_show =ref(true)
const percentage =ref(0)
const fileInput = ref<HTMLInputElement | null>(null)
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const options = [
  {
    value: 'Goldstein',
    label: 'Goldstein',
  },
  {
    value: 'Wavelet Filter',
    label: 'Wavelet Filter',
  },
  {
    value: 'Adaptive',
    label: 'Adaptive',
  },
  {
    value: 'InSAR-BM3D',
    label: 'InSAR-BM3D',
  },
]
const options1 = [
  {
    value1: 'Region Growing',
    label: 'Region Growing',
  },
  {
    value1: 'Minimum Cost Flow',
    label: 'Minimum Cost Flow',
  },
  {
    value1: 'Delaunay MCF',
    label: 'Delaunay MCF',
  },
]
const options2 = [
  {
    value2: 'op1',
    label: '同质像元加权干涉相位滤波优化算法',
  },
  {
    value2: 'op2',
    label: '基于奇异值分解的DS相位优化算法',
  },
]
const choseFiles = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
}
const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        // 处理选择的文件
        console.log('Selected file:', file);
        // 例如，可以将文件上传到服务器
        // uploadFile(file);
    }
}
// 进度条
const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
const interferogram_Data =[
  {
    number: '1',
    name: 'interf_tiff',
  },
  {
    number: '2',
    name: 'IS_pwr_meta',
  },
  {
    number: '3',
    name: 'IS_pwr_meta.hdr',
  },
  {
    number: '4',
    name: 'IS_cc.series',
  },
]

const S1_interferogram =()=>{
    s1interferogram_progress.value = true
    interferogram_message.value = false
    const timer =setInterval(() => {
        if(percentage.value>=100){
            clearInterval(timer);
            alert("干涉处理完成")
            s1interferogram_progress.value = false
            percentage.value = 0
            S1_interferogram_show.value = false
        }else{
            percentage.value = percentage.value + 10
        }
    }, 500)
}
const S1_interferogram_data =()=>{
    interferogram_message.value =true
}
</script>

<style scoped>
.interferogram_style{
    display: flex;
    align-items: center;
    .parameter_style{
        color: white;
        display: flex;
        align-items: center;
        height:50px;
    }
    }
    .progress{
    position: relative;;
    top: 85%;
    left:45%;
}
:deep(.el-button){
    background: transparent;
}
:deep(.el-table){
    color: white;
    --el-table-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-header-bg-color: transparent;
    --el-table-header-text-color:white;
    --el-table-row-hover-bg-color:gray;
}
:deep(.el-progress__text){
    color: white;
}
</style>