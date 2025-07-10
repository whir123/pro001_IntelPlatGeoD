<template>
  <div class="background">
    <div class="left">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#001f3f" text-color="#ffffff" active-text-color="#409EFF">
        <el-menu-item>
          <el-input style="width: 240px" placeholder="查找边坡">
            <template #prefix>
              <el-icon class="el-input__icon">
                <search />
              </el-icon>
            </template>
          </el-input>
        </el-menu-item>
        <el-menu-item v-for="item in data" :key="item.id" :index="String(item.id)">
          <el-icon>
            <location />
          </el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <TaillingTabs></TaillingTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
// import {} from "vue"
import TaillingTabs from "../Tailing/tailingTabs/TailingTabs.vue";
import { ref } from "vue";
import { Location, Search } from "@element-plus/icons-vue";

interface Data {
  id: number;
  name: string;
}
const data = ref<Data[]>([
  {
    id: 1,
    name: "a号公路边坡",
  },
  {
    id: 2,
    name: "b号公路边坡",
  },
  {
    id: 3,
    name: "c号公路边坡",
  }
])
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.background {
  position: absolute;
  left: 200px;
  top: 15px;
  border-radius: 10px;
  overflow: auto;
  width: calc(100% - 220px);
  height: calc(100% - 30px);
  background-color: white;
  display: flex;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 100%;
}

.right {
  flex: auto;
  overflow: auto;
}
</style>
