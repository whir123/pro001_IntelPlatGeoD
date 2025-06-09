<template>
    <div class="operation-management">
        <!-- <h2>运维管理</h2> -->
        <el-tabs tab-position="left" style="height: 600px;">
            <el-tab-pane label="系统监控">
                <SystemMonitor />
            </el-tab-pane>
            <el-tab-pane label="日志查看">
                <LogViewer />
            </el-tab-pane>
            <el-tab-pane label="性能优化">
                <PerformanceOptimization />
            </el-tab-pane>
            <el-tab-pane label="备份与恢复">
                <BackupAndRestore />
            </el-tab-pane>
            <el-tab-pane label="告警管理">
                <AlertManagement />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup lang="ts">
import SystemMonitor from './subComponents/SystemMonitor.vue';
import LogViewer from './subComponents/LogViewer.vue';
import PerformanceOptimization from './subComponents/PerformanceOptimization.vue';
import BackupAndRestore from './subComponents/BackupAndRestore.vue';
import AlertManagement from './subComponents/AlertManagement.vue';
</script>
<style scoped>
.operation-management {
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}

.el-tabs {
    flex-grow: 1;
    overflow: auto;
}
</style>