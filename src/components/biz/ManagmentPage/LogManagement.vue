<template>
    <div class="log-management">
        <h2>日志管理</h2>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input v-model="searchQuery" placeholder="搜索日志" clearable></el-input>
            </el-col>
            <el-col :span="6">
                <el-select v-model="logLevel" placeholder="选择日志级别">
                    <el-option label="全部" value=""></el-option>
                    <el-option label="DEBUG" value="DEBUG"></el-option>
                    <el-option label="INFO" value="INFO"></el-option>
                    <el-option label="WARN" value="WARN"></el-option>
                    <el-option label="ERROR" value="ERROR"></el-option>
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" @click="fetchLogs">查询</el-button>
                <el-button type="success" @click="exportLogs">导出日志</el-button>
            </el-col>
        </el-row>
        <el-table :data="logs" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="timestamp" label="时间" width="180"></el-table-column>
            <el-table-column prop="level" label="级别" width="100"></el-table-column>
            <el-table-column prop="message" label="消息"></el-table-column>
        </el-table>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const logLevel = ref('');
const logs = ref([
    { timestamp: '2023-10-01 12:00:00', level: 'INFO', message: '用户登录成功' },
    { timestamp: '2023-10-01 12:05:00', level: 'DEBUG', message: '请求参数: { "id": 1 }' },
    { timestamp: '2023-10-01 12:10:00', level: 'ERROR', message: '数据库连接失败' },
]);

const fetchLogs = () => {
    // 这里可以调用后端接口获取日志
    console.log('查询日志', searchQuery.value, logLevel.value);
};

const exportLogs = () => {
    // 这里可以调用后端接口导出日志
    console.log('导出日志');
};
</script>
<style scoped>
.log-management {
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

.el-row {
    margin-bottom: 20px;
}

.el-input,
.el-select {
    width: 100%;
}

.el-button {
    margin-left: 10px;
}

.el-table {
    flex-grow: 1;
    overflow: auto;
}
</style>