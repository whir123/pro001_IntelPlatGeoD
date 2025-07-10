<template>
    <div class="cache-clearer">
        <h3>清除缓存</h3>
        <el-input v-model="cacheKey" placeholder="输入缓存键" clearable></el-input>
        <el-button type="danger" @click="clearCache">清除缓存</el-button>
        <p v-if="clearResult">{{ clearResult }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cacheKey = ref('');
const clearResult = ref('');

const clearCache = () => {
    if (cacheKey.value) {
        // 这里可以调用后端接口清除缓存
        clearResult.value = `缓存键 ${cacheKey.value} 已清除`;
        cacheKey.value = '';
    } else {
        clearResult.value = '请输入缓存键';
    }
};
</script>

<style scoped>
.cache-clearer {
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

.el-input {
    margin-bottom: 20px;
    width: 300px;
}

.el-button {
    margin-bottom: 20px;
}
</style>