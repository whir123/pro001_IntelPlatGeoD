<template>
  <div class="measure">
    <div class="avatar-outline">
      <div @click="toggleMenu" class="avatar" id="avatar">
        <img style="width: 40px; height: 40px" src="../../image/MeasureControl_tool.svg" alt="" />
      </div>
    </div>
    <transition name="expand">
      <div class="measure-menu" id="user-menu" v-if="isMeasureMenuExpand">
        <el-dropdown placement="bottom">
          <div class="measure-menu-button">
            <img
              style="width: 30px; height: 30px; filter: brightness(0.2) saturate(100%);"
              src="../../image/left_9measure.svg"
              alt=""
            />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>坐标测量</el-dropdown-item>
              <el-dropdown-item>距离测量</el-dropdown-item>
              <el-dropdown-item>面积测量</el-dropdown-item>
              <el-dropdown-item>清除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="separator"></div>
        <el-dropdown placement="bottom">
          <div class="measure-menu-button">
            <img
              style="width: 30px; height: 30px; filter: brightness(0.2) saturate(100%);"
              src="../../image/MeasureControl_draw.svg"
              alt=""
            />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>点标记</el-dropdown-item>
              <el-dropdown-item>线绘制</el-dropdown-item>
              <el-dropdown-item>面绘制</el-dropdown-item>
              <el-dropdown-item>圆绘制</el-dropdown-item>
              <el-dropdown-item>矩形绘制</el-dropdown-item>
              <el-dropdown-item>清除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="separator"></div>
        <el-dropdown placement="bottom">
          <div class="measure-menu-button">
            <img
              style="width: 30px; height: 30px; filter: brightness(0.2) saturate(100%);"
              src="../../image/MeasureControl_GISAnalyze.svg"
              alt=""
            />
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleSelect('InSAR时序分析')">InSAR时序分析</el-dropdown-item>
              <el-dropdown-item>可视域分析</el-dropdown-item>
              <el-dropdown-item>清除</el-dropdown-item>

            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="separator"></div>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="贴地"
          placement="top-start"
        >
          <div class="measure-menu-button">
            <img
              style="width: 30px; height: 30px; filter: brightness(0.2) saturate(100%);"
              src="../../image/MeasureControl_ground.svg"
              alt=""
            />
          </div>
        </el-tooltip>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isMeasureMenuExpand = ref(false);
function toggleMenu() {
  isMeasureMenuExpand.value = !isMeasureMenuExpand.value;
}

const emits = defineEmits(['insarClicked']);

const handleSelect = (option: string) => {
  if (option === 'InSAR时序分析') {
    emits('insarClicked');
  }
  // 可以在这里添加其他选项的处理逻辑
};
</script>


<style scoped>
.measure {
  position: absolute;
  top: 30px;
  right: 10px;
  display: inline-flex;
  flex-direction: row-reverse;
}
.measure-menu {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 0 5px;
}
.separator {
  width: 1px;
  height: 20px; /* 短竖线的高度 */
  background-color: #ccc;
  margin: 0 10px; /* 左右间距 */
}
.avatar {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}
.expand-enter-active,
.expand-leave-active {
  transition: width 0.5s ease;
  overflow: hidden;
}

/* 进入动画开始状态和离开动画结束状态 */
.expand-enter-from,
.expand-leave-to {
  width: 0px;
}

/* 进入动画结束状态和离开动画开始状态 */
.expand-enter-to,
.expand-leave-from {
  width: 180px; /* 这里的高度可以根据内容的实际高度来设置 */
}
</style>