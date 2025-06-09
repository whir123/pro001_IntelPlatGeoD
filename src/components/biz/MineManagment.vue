<template>
  <div class="background">
    <div class="UtilizationRate">
      <GaugeChart name="集群使用率" />
      <GaugeChart name="主服务使用率" />
      <GaugeChart name="业务功能使用率" />
      <GaugeChart name="PUA访问率" />
      <GaugeChart name="本机负荷率" />
      <GaugeChart name="网络状态" />
    </div>
    <div class="data-container">
      <el-tabs tab-position="top" style="height: auto" class="demo-tabs">
        <el-tab-pane label="运维管理">
          <OperationManagement />
        </el-tab-pane>
        <el-tab-pane label="管理人员配置">
          <AdminPage />
        </el-tab-pane>
        <el-tab-pane label="SSO登陆管理">
          <SSOManagmentPage />
        </el-tab-pane>
        <el-tab-pane label="缓存管理">
          <CacheManagement />
        </el-tab-pane>
        <el-tab-pane label="日志模块管理">
          <LogManagement />
        </el-tab-pane>
        <el-tab-pane label="平台配置">
          <PlatformConfiguration />
        </el-tab-pane>
        <el-tab-pane label="数据字典">
          <DataDictionary />
        </el-tab-pane>
        <!-- <el-tab-pane label="接口定义">
                    <ApiDefinition />
                </el-tab-pane> -->
        <!--<el-tab-pane label="标准定义">
                    <StandardDefinition />
                </el-tab-pane>
                <el-tab-pane label="权限管理">
                    <PermissionManagement />
                </el-tab-pane>-->
        <el-tab-pane label="功能菜单分配">
          <FunctionMenuAllocation />
        </el-tab-pane>
        <!-- <el-tab-pane label="用户管理">
                    <UserManagement />
                </el-tab-pane>
                -->
        <el-tab-pane label="Swagger接口测试管理">
          <SwaggerTestManagement />
        </el-tab-pane>
        <el-tab-pane label="备份管理">
          <BackupManagement />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import GaugeChart from "./dataComponents/GaugeChart.vue";
import AdminPage from "./ManagmentPage/AdminPage.vue";
import SSOManagmentPage from "./ManagmentPage/SSOManagmentPage.vue";
import OperationManagement from "./ManagmentPage/OperationManagement.vue";
import CacheManagement from "./ManagmentPage/CacheManagement.vue";

import LogManagement from "./ManagmentPage/LogManagement.vue";
import PlatformConfiguration from "./ManagmentPage/PlatformConfiguration.vue";
import DataDictionary from "./ManagmentPage/DataDictionary.vue";
// import ApiDefinition from "./ManagementPage/ApiDefinition.vue";
// import StandardDefinition from "./ManagementPage/StandardDefinition.vue";
// import PermissionManagement from "./ManagementPage/PermissionManagement.vue";
import FunctionMenuAllocation from "./ManagmentPage/FunctionMenuAllocation.vue";
// import UserManagement from "./ManagementPage/UserManagement.vue";
import BackupManagement from "./ManagmentPage/BackupManagement.vue";
import SwaggerTestManagement from "./ManagmentPage/SwaggerTestManagement.vue";
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
}

.UtilizationRate {
  width: 86vw;
  background-color: #e5ecf3;
  border-radius: 5px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}

.data-container {
  background-color: #e5ecf3;
  border-radius: 5px;
  margin: 5px;
}

:deep(.el-tabs__header) {
  margin: 0;
}

:deep(.demo-tabs .el-tabs__item) {
  margin-left:15px;
  min-width: 120px;        /* 设置每个 tab 的最小宽度 */
  text-align: center;      /* 文本居中 */
  font-size: 14px;         /* 字体大小 */
  border-radius: 4px 4px 0 0;
}
</style>