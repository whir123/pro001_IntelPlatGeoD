<template>
    <div class="cintainer">
        <div class="time_select">
            <div class="time_style">
                <div class="parameter_style">
                    <span class="demonstration" style="margin-right: 10px;">开始时间</span>
                    <el-date-picker v-model="starttime" type="datetime" placeholder="Select date and time" />
                </div>
                <div class="parameter_style">
                    <span class="demonstration" style="margin: 0 10px;">结束时间</span>
                    <el-date-picker v-model="endtime" type="datetime" placeholder="Select date and time" />
                </div>
            </div>
        </div>
        <div class="area_select">
            <div class="area_style">
                <span>请选择区域</span>
                <el-select v-model="value" placeholder="Select" size="large" style="width: 240px;margin-left: 10px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
                <el-select v-model="value1" placeholder="Select" size="large" style="width: 240px;margin-left: 10px">
                    <el-option v-for="item in options_1" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
        </div>
        <div class="insar_analysis">
            <div class="insar_style">
                <button @click="InSAR_analy">
                    <span>InSAR时序分析处理</span>
                </button>
                <button @click="InSAR_Data_check" style="margin-left: 50px;">
                    <span>查看结果</span>
                </button>
                <div style="margin-top: 50px;position: relative;">
                    <el-progress v-if="InSAR_progress" type="dashboard" :percentage="percentage" :color="colors" />
                </div>
                <el-dialog v-model="InSAR_process" title="InSAR时序分析处理" width="1150">
                    <div style="margin-top: 20px; position: relative;">
                        <span style="color: white;">地理编码信息与InSAR形变数据:</span>
                        <el-table border style="margin: 10px 0;width: 650px;" :data="InSAR_Data">
                            <el-table-column prop="number" label="编号" width="150" />
                            <el-table-column prop="name" label="文件名" />
                        </el-table>
                        <div style="position: absolute;right: 50px;top: 10px;">
                            <img style="width:300px; height: 300px;margin-top: 10px;" src="../../../image/statellite_insardatamanage.png" />
                        </div>
                    </div>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const starttime = ref('');
const endtime = ref('');
const value = ref('');
const value1 = ref('');
const InSAR_progress = ref(false);
const percentage = ref(0)
const InSAR_process = ref(false)
const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]
const options = [
    {
        value: '西藏省',
        label: '西藏省',
    },
    {
        value: '青海省',
        label: '青海省',
    }
]
const options_1 = [
    {
        value: '西藏XXXX尾矿库',
        label: '西藏XXXX尾矿库',
    },
    {
        value: '西藏XXXX露天矿',
        label: '西藏XXXX露天矿',
    },
    {
        value: '青海XXXX尾矿库',
        label: '青海XXXX尾矿库',
    },
    {
        value: '青海XXXX露天矿',
        label: '青海XXXX露天矿',
    },

]
const InSAR_Data = [
    {
        number: '1',
        name: 'G_SI_velocity_geo',
    },
    {
        number: '2',
        name: 'G_v5d0_h5d0_c0d2_0.shp',
    },
    {
        number: '3',
        name: 'G_disp_first_geo.series',
    },
    {
        number: '4',
        name: 'G_disp_first_geo.series',
    },
    {
        number: '5',
        name: 'G_FI_dem',
    },
    {
        number: '6',
        name: 'G_disp_geo_meta',
    },
]
const InSAR_analy = () => {
    InSAR_progress.value = true

    const timer = setInterval(() => {
        if (percentage.value >= 100) {
            clearInterval(timer);
            alert("InSAR时序分析处理完成")
            InSAR_progress.value = false
            percentage.value = 0
        } else {
            percentage.value = percentage.value + 10
        }
    }, 500)
}
const InSAR_Data_check = () => {
    InSAR_process.value = true
}
</script>

<style scoped>
.cintainer {
    margin-left: 8vw;

    .time_select {
        .time_style {
            display: flex;
            align-items: center;

            .parameter_style {
                color: white;
                display: flex;
                align-items: center;
                height: 50px;
                margin-left: 12vw;
            }
        }
    }

    .area_select {
        margin-top: 40px;
        margin-left: 18vw;

        span {
            color: white;
        }

    }

    .insar_analysis {
        margin-left: 15vw;

        .insar_style {
            margin-top: 53px;

            button {
                background: url("../../../image/statellite_组3.png");
                width: 366.31px;
                height: 100px;

                span {
                    color: #D8F0FF;
                    font-size: 30px;
                    font-weight: bold;
                    /* 字体加粗 */
                    font-style: italic;
                    /* 字体斜体 */
                    text-transform: uppercase;
                    /* 字母大写 */
                    line-height: 30px;
                }
            }
        }
    }
}

:deep(.el-dialog) {
    background: #001421;
}

:deep(.el-dialog__titl)e {
    color: white;
    font: bold 18px 微软雅黑;

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