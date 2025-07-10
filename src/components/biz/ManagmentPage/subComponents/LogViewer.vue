<template>
    <div class="log-viewer">
        <h3>日志查看</h3>
        <el-input v-model="searchQuery" placeholder="搜索日志" clearable></el-input>
        <el-table :data="filteredLogs" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="time" label="时间" width="180"></el-table-column>
            <el-table-column prop="level" label="级别" width="100"></el-table-column>
            <el-table-column prop="message" label="消息"></el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const logs = ref([
    { time: '2023-10-01 12:00:00', level: 'INFO', message: '系统启动' },
    { time: '2023-10-01 12:05:00', level: 'WARNING', message: '内存使用率过高' },
    { time: '2023-10-01 12:10:00', level: 'ERROR', message: '数据库连接失败' },
]);

const searchQuery = ref('');

const filteredLogs = computed(() => {
    return logs.value.filter(log =>
        log.message.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>

<style scoped>
.log-viewer {
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

.el-input {
    margin-bottom: 20px;
}
</style>