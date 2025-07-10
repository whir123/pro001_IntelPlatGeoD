<template>
    <div class="geocoding_message">
        <div class="geocoding_style">
            <div style="margin-right: 10px;">相关性阈值</div>
            <el-input v-model="correlation2_num" style="width: 150px;margin-right:30px;"></el-input>
        </div>
        <div style="margin-top: 30px;">
            <el-button type="primary" size="default" style="margin-right:40px;width: 200px;" @click ="S1_geocoding">数据处理
            </el-button>
            <el-button type="primary" size="default" style="width: 200px;margin-left: 20px;" @click="S1_geocoding_data" :disabled = "S1_geocoding_show">查看处理结果
            </el-button>
        </div>
        <div style="margin-top: 20px;display: flex;justify-content: center;">
            <el-progress v-if="s1geocoding_progress" type="dashboard" :percentage="percentage" :color="colors"/>
        </div>
        <div style="margin-top: 20px; position: relative;" v-if="geocoding_message">
            <span style="color: white;">地理编码信息与InSAR形变数据:</span>
            <el-table border style="margin: 10px 0;width: 650px;" :data="geocoding_Data">
                <el-table-column prop="number" label="编号" width="150"/>
                <el-table-column prop="name" label="文件名"/>
            </el-table>
            <div style="position: absolute;right: 50px;top: 10px;">
                <img style="width:300px; height: 300px;margin-top: 10px;" src="../../../../image/statellite_insardatamanage.png"/>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const correlation2_num =ref(0.2)
const s1geocoding_progress =ref(false)
const S1_geocoding_show =ref(true)
const geocoding_message =ref(false)
const percentage =ref(0)
const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]
const geocoding_Data =[
  {
    number: '1',
    name: 'G_SI_velocity_geo',
  },
  {
    number: '2',
    name: 'G_v5d0_h5d0_c0d2_0.shp',
  },
  {
    number: '3',
    name: 'G_disp_first_geo.series',
  },
  {
    number: '4',
    name: 'G_disp_first_geo.series',
  },
  {
    number: '5',
    name: 'G_FI_dem',
  },
  {
    number: '6',
    name: 'G_disp_geo_meta',
  },
]
const S1_geocoding =() =>{
    s1geocoding_progress.value = true
    geocoding_message.value =false
    const timer =setInterval(() => {
        if(percentage.value>=100){
            clearInterval(timer);
            alert("地理编码完成")
            s1geocoding_progress.value = false
            percentage.value = 0
            S1_geocoding_show.value = false
        }else{
            percentage.value = percentage.value + 10
        }
    }, 500)
}
const S1_geocoding_data =()=>{
    geocoding_message.value =true
}
</script>

<style scoped>
.geocoding_style{
    color: white;
    display: flex;
    align-items: center;
    height:50px;
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