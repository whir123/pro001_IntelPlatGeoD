<template>
    <div class="system-monitor">
        <h3>系统监控</h3>
        <div class="monitor-items">
            <div class="item">
                <span>CPU 使用率:</span>
                <el-progress :percentage="cpuUsage" status="success"></el-progress>
            </div>
            <div class="item">
                <span>内存使用率:</span>
                <el-progress :percentage="memoryUsage" status="warning"></el-progress>
            </div>
            <div class="item">
                <span>磁盘使用率:</span>
                <el-progress :percentage="diskUsage" status="exception"></el-progress>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cpuUsage = ref(30);
const memoryUsage = ref(60);
const diskUsage = ref(80);
</script>

<style scoped>
.system-monitor {
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

h3 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #333;
}

.monitor-items {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>