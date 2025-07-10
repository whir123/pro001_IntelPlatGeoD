<template>
    <div class="platform-configuration">
        <h2>平台配置</h2>
        <el-form :model="form" label-width="120px">
            <el-form-item label="平台名称">
                <el-input v-model="form.platformName"></el-input>
            </el-form-item>
            <el-form-item label="平台版本">
                <el-input v-model="form.platformVersion"></el-input>
            </el-form-item>
            <el-form-item label="API密钥">
                <el-input v-model="form.apiKey" type="password" show-password></el-input>
            </el-form-item>
            <el-form-item label="启用状态">
                <el-switch v-model="form.enabled"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveConfiguration">保存配置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
    platformName: '',
    platformVersion: '',
    apiKey: '',
    enabled: false
});

const saveConfiguration = () => {
    // 这里可以调用后端接口保存配置
    console.log('保存配置', form.value);
};
</script>
<style scoped>
.platform-configuration {
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

.el-form {
    flex-grow: 1;
}

.el-form-item {
    margin-bottom: 20px;
}

.el-button {
    margin-top: 20px;
}
</style>