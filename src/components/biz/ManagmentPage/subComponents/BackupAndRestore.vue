<template>
    <div class="backup-and-restore">
        <h3>备份与恢复</h3>
        <div>
            <el-button type="primary" @click="backupData">备份数据</el-button>
        </div>
        <div>
            <el-button type="warning" @click="restoreData">恢复数据</el-button>
        </div>
        <p v-if="backupResult">{{ backupResult }}</p>
        <p v-if="restoreResult">{{ restoreResult }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const backupResult = ref('');
const restoreResult = ref('');

const backupData = () => {
    // 这里可以调用后端接口进行数据备份
    backupResult.value = '数据备份已完成';
};

const restoreData = () => {
    // 这里可以调用后端接口进行数据恢复
    restoreResult.value = '数据恢复已完成';
};
</script>

<style scoped>
.backup-and-restore {
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h3 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #333;
}

.el-button {
    margin-left: 0px;
    margin-top: 40px;
    margin-bottom: 10px;

}
</style>