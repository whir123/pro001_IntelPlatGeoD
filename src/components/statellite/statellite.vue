<template>
  <div class="background">
    <div class="button-group">
      <button @click="activeName = 'insartime'" :class="{ active: activeName === 'insartime' }">InSAR时序分析</button>
      <button @click="activeName = 'insarmanage'" :class="{ active: activeName === 'insarmanage' }">遥感数据管理</button>
      <button @click="activeName = 'insardataquery'"
        :class="{ active: activeName === 'insardataquery' }">成果数据查询</button>
      <button @click="activeName = 'insardatamanage'"
        :class="{ active: activeName === 'insardatamanage' }">成果数据管理</button>
      <!-- <button @click="activeName = 'fifth'" :class="{ active: activeName === 'fifth' }">Task</button> -->
    </div>

    <div>
      <insartime2 v-if="activeName === 'insartime'" />
      <insarmanage2 v-if="activeName === 'insarmanage'" />
      <insardataquery v-if="activeName === 'insardataquery'" />
      <insardatamanage v-if="activeName === 'insardatamanage'" />
      <!-- <insartime v-if="activeName === 'fifth'" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import insardataquery from './InsarDataQuery/insardataquery.vue';
import insardatamanage from './InsarDataManager/insardatamanage.vue'
import insartime2 from './InsarTime/insartime2.vue'
import insarmanage2 from './InsarManage/insarmanage2.vue'
const activeName = ref('insartime')

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
  background: url("../../image/statellite_background.png") no-repeat center center;
  background-size: cover;


  .button-group {
    width: 60vw;
    margin-left: 25%;
    margin-right: 20%;
    display: flex;
    margin-bottom: 50px;

    button {
      background: linear-gradient(180deg, rgba(14, 86, 158, 0) 0%, rgba(18, 144, 161, 0.95) 100%);
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      color: white;
      margin-right: 13px;
      margin-top: 35px;
    }

    button.active {
      color: white;
      background: rgba(0, 113, 93, 0.6);
    }

    button :last-child {
      margin-right: 0px;
    }
  }
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
</style>