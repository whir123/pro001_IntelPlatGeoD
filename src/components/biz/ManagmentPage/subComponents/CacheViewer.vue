<template>
    <div class="cache-viewer">
        <h3>查看缓存</h3>
        <el-table :data="caches" style="width: 100%; margin-top: 20px;">
            <el-table-column prop="key" label="键" width="180"></el-table-column>
            <el-table-column prop="value" label="值"></el-table-column>
            <el-table-column prop="expiry" label="过期时间" width="180"></el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const caches = ref([
    { key: 'user:1', value: '{ "name": "John Doe", "age": 30 }', expiry: '2023-10-01 12:00:00' },
    { key: 'product:101', value: '{ "name": "Product A", "price": 19.99 }', expiry: '2023-10-01 12:05:00' },
]);
</script>

<style scoped>
.cache-viewer {
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