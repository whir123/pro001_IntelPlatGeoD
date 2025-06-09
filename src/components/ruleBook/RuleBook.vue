<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class="background">
        <el-tabs type="border-card" style="height: 100%;" class="demo-tabs">
            <el-tab-pane label="GB 16423-2020 金属非金属矿山安全规程">
                <iframe class="pdf-iframe" src="../../PDF/GB 16423-2020 金属非金属矿山安全规程.pdf"></iframe>
            </el-tab-pane>
            <el-tab-pane label="xxxx规范">
            </el-tab-pane>
            <el-tab-pane label="xxxx通知">
            </el-tab-pane>
            <el-tab-pane label="xxxx质量检验技术规程">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped>
.background {
    position: absolute;
    left: 200px;
    top: 15px;
    border-radius: 10px;
    overflow: hidden;
    /* 防止内部元素溢出 */
    width: calc(100% - 220px);
    height: calc(100% - 30px);
    background-color: white;
}
.pdf-iframe {
    width: 100%;
    height: 92vh;
    /* border: none; */
}
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
}
</style>