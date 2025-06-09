<template>
<div class="inversion_message">
        <div class="inversion_style" style="display: flex;align-items: center;">
            <div class="parameter_style">
                <div style="margin-right: 10px;">解缠阈值</div>
                <el-input v-model="disentanglement2_num" style="width: 150px;margin-right:30px;"></el-input>
            </div>
            <div class="parameter_style">
                <div style="margin-right: 10px;">相关性阈值</div>
                <el-input v-model="correlation_num" style="width: 150px;margin-right:30px;"></el-input>
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
        </div>
        
        <div style="margin-top: 30px;">
            <el-button type="primary" size="default" style="margin-right:40px;width: 200px;" @click ="S1_inversion">数据处理
            </el-button>
            <el-button type="primary" size="default" style="width: 200px;margin-left: 20px;" @click="S1_inversion_data" :disabled = "S1_inversion_show">查看处理结果
            </el-button>
        </div>
        <div style="margin-top: 20px;display: flex;justify-content: center;">
            <el-progress v-if="s1inversion_progress" type="dashboard" :percentage="percentage" :color="colors"/>
        </div>
        <div style="margin-top: 20px;" v-if="inversion_message">
            <span style="color: white;">反演处理信息:</span>
            <el-table border style="margin: 10px 0;width: 650px;" :data="inversion_Data">
                <el-table-column prop="number" label="编号" width="150"/>
                <el-table-column prop="name" label="文件名"/>
            </el-table>
        </div>
</div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const disentanglement2_num =ref(0.2)
const correlation_num =ref(0.2)
const s1inversion_progress =ref(false)
const S1_inversion_show =ref(true)
const inversion_message =ref(false)
const percentage =ref(0)
const value1 = ref('')
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
  }
]
const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
const inversion_Data =[
  {
    number: '1',
    name: 'interf_tiff',
  },
  {
    number: '2',
    name: 'inversion',
  },
  {
    number: '3',
    name: 'FI_model_meta',
  },
  {
    number: '4',
    name: 'SI_disp.series',
  },
  {
    number: '5',
    name: 'SI_disp_first.series',
  },
  {
    number: '6',
    name: 'SI_disp_first_meta',
  },
]
const S1_inversion =() =>{
    s1inversion_progress.value = true
    inversion_message.value =false
    const timer =setInterval(() => {
        if(percentage.value>=100){
            clearInterval(timer);
            alert("反演处理完成")
            s1inversion_progress.value = false
            percentage.value = 0
            S1_inversion_show.value = false
        }else{
            percentage.value = percentage.value + 10
        }
    }, 500)
}
const S1_inversion_data =()=>{
    inversion_message.value =true
}
</script>

<style scoped>
.inversion_style{
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