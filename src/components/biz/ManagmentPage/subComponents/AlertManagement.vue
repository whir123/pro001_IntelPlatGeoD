<template>
    <div class="alert-management">
        <h3>告警管理</h3>
        <el-table :data="alerts" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="time" label="时间" width="180"></el-table-column>
            <el-table-column prop="level" label="级别" width="100"></el-table-column>
            <el-table-column prop="message" label="消息"></el-table-column>
            <el-table-column label="操作" width="100">
                <template #default="scope">
                    <el-button size="small" @click="handleAcknowledge(scope.row)">确认</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const alerts = ref([
    { time: '2023-10-01 12:00:00', level: 'INFO', message: '系统启动' },
    { time: '2023-10-01 12:05:00', level: 'WARNING', message: '内存使用率过高' },
    { time: '2023-10-01 12:10:00', level: 'ERROR', message: '数据库连接失败' },
]);

const handleAcknowledge = (row: any) => {
    // 这里可以调用后端接口确认告警
    console.log('确认告警:', row);
};
</script>

<style scoped>
.alert-management {
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
</style>