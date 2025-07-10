<template>
    <div class="cache-setter">
        <h3>设置缓存</h3>
        <el-form label-width="100px">
            <el-form-item label="缓存键">
                <el-input v-model="cacheKey" placeholder="输入缓存键" clearable></el-input>
            </el-form-item>
            <el-form-item label="缓存值">
                <el-input v-model="cacheValue" placeholder="输入缓存值" clearable></el-input>
            </el-form-item>
            <el-form-item label="过期时间">
                <el-date-picker v-model="expiryTime" type="datetime" placeholder="选择过期时间"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="setCache">设置缓存</el-button>
            </el-form-item>
        </el-form>
        <p v-if="setResult">{{ setResult }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cacheKey = ref('');
const cacheValue = ref('');
const expiryTime = ref('');
const setResult = ref('');

const setCache = () => {
    if (cacheKey.value && cacheValue.value && expiryTime.value) {
        // 这里可以调用后端接口设置缓存
        setResult.value = `缓存键 ${cacheKey.value} 设置成功，过期时间为 ${expiryTime.value}`;
        cacheKey.value = '';
        cacheValue.value = '';
        expiryTime.value = '';
    } else {
        setResult.value = '请填写所有必填项';
    }
};
</script>

<style scoped>
.cache-setter {
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

.el-form {
    width: 300px;
}

.el-form-item {
    margin-bottom: 10px;
}
</style>