<template>
    <div class="sar-message">
        <div class="connection_style">
            <div class="parameter_style">
                <div style="margin-right: 10px;">时间基线</div>
                <el-input v-model="time_line" style="width: 150px;margin-right:10px;"></el-input>
            </div>
            <div class="parameter_style">
                <div style="margin-right: 10px;">空间基线</div>
                <el-input v-model="space_line" style="width: 150px;margin-right:10px;"></el-input>
            </div>
            <div class="parameter_style">
                <span class="demonstration" style="margin-right: 10px;">开始时间</span>
                <el-date-picker v-model="starttime" type="datetime" placeholder="Select date and time" />
            </div>
            <div class="parameter_style">
                <span class="demonstration" style="margin: 0 10px;">结束时间</span>
                <el-date-picker v-model="endtime" type="datetime" placeholder="Select date and time" />
            </div>
        </div>
        <div style="margin-top: 30px;">
            <el-button type="primary" size="default" style="margin-right:40px;width: 200px;height: 50px;"
                @click="S1_connection">数据处理
            </el-button>
            <el-button type="primary" size="default" style="width: 200px;margin-left: 20px;height: 50px"
                @click="S1_connection_data" :disabled="S1_connection_show">查看处理结果
            </el-button>
        </div>
        <div class="progress">
            <el-progress v-if="s1connection_progress" type="dashboard" :percentage="percentage1" :color="colors" />
        </div>
        <div style="margin-top: 20px;" v-if="Connection_message">
            <span style="color: white;">生成连接图处理信息:</span>
            <el-table border style="margin: 10px 0;width: 650px;" :data="Connection_Data">
                <el-table-column prop="number" label="编号" width="150" />
                <el-table-column prop="name" label="文件名" />
            </el-table>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const time_line = ref(36)
const space_line = ref(2)
const starttime = ref('');
const endtime = ref('');
// 连接图处理
const S1_connection_show = ref(true)
const s1connection_progress = ref(false)
const percentage1 = ref(0)
const Connection_message = ref(false)

const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]
// 生成连接图数据
const Connection_Data = [
    {
        number: '1',
        name: 'CG_entire_report.txt',
    },
    {
        number: '2',
        name: 'CG_report.txt',
    },
    {
        number: '3',
        name: 'CG_SAR_11_20191109_103354206_IW_A_VV_slc_list_78_pwr',
    },
    {
        number: '4',
        name: 'CG_SAR_11_20191109_103354206_IW_A_VV_slc_list_78_pwr.dbf',
    },
]
const S1_connection = () => {
    s1connection_progress.value = true
    Connection_message.value = false
    const timer = setInterval(() => {
        if (percentage1.value >= 100) {
            clearInterval(timer);
            alert("生成连接图完成")
            s1connection_progress.value = false
            percentage1.value = 0
            S1_connection_show.value = false
        } else {
            percentage1.value = percentage1.value + 10
        }
    }, 500)
}
const S1_connection_data = () => {
    Connection_message.value = true
}
</script>

<style scoped>
.connection_style {
    display: flex;
    align-items: center;

    .parameter_style {
        color: white;
        display: flex;
        align-items: center;
        height: 50px;
    }
}

.progress {
    position: relative;
    ;
    top: 85%;
    left: 45%;
}

:deep(.el-button) {
    background: transparent;
}

:deep(.el-table) {
    color: white;
    --el-table-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-header-bg-color: transparent;
    --el-table-header-text-color: white;
    --el-table-row-hover-bg-color: gray;
}

:deep(.el-progress__text) {
    color: white;
}
</style>