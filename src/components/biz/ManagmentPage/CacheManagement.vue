<template>
    <div class="cache-management">
        <!-- <h2>缓存管理</h2> -->
        <el-tabs tab-position="left" style="height: 600px;">
            <el-tab-pane label="查看缓存">
                <CacheViewer />
            </el-tab-pane>
            <el-tab-pane label="清除缓存">
                <CacheClearer />
            </el-tab-pane>
            <el-tab-pane label="设置缓存">
                <CacheSetter />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup lang="ts">
import CacheViewer from './subComponents/CacheViewer.vue';
import CacheClearer from './subComponents/CacheClearer.vue';
import CacheSetter from './subComponents/CacheSetter.vue';
</script>
<style scoped>
.cache-management {
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