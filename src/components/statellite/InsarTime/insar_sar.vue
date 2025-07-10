<template>
    <div class="containersar">
        <div class="center">
            <div class="center-left">
                <div class="sar-timearound">
                    <button @click="time_select_show">
                        <span>1:数据时间范围</span>
                    </button>
                    <el-dialog v-model="time_select" title="时间选择" width="750">
                        <div class="time_style">
                            <div class="parameter_style">
                                <span class="demonstration" style="margin-right: 10px;">开始时间</span>
                                <el-date-picker v-model="starttime" type="datetime"
                                    placeholder="Select date and time" />
                            </div>
                            <div class="parameter_style">
                                <span class="demonstration" style="margin: 0 10px;">结束时间</span>
                                <el-date-picker v-model="endtime" type="datetime" placeholder="Select date and time" />
                            </div>
                        </div>
                    </el-dialog>
                </div>
                <div class="sar-areafile">
                    <button @click="choseFiles">
                        <span>2:研究区边界文件</span>
                    </button>
                    <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" />
                </div>
            </div>
            <div class="center-middle">
                <img src="../../../image/statellite_组.png" class="img-1">
            </div>
            <div class="center-right">
                <div class="sar-dataprocess">
                    <button @click="S1_import">
                        <span>3:SAR数据处理</span>
                    </button>
                    <div class="progress">
                        <el-progress v-if="sar_progress" type="dashboard" :percentage="percentage" :color="colors" />
                    </div>
                </div>
                <div class="sar-result">
                    <button @click="sar_import_data">
                        <span>4:查看处理结果</span>
                    </button>
                    <el-dialog v-model="sar_message" title="SAR数据预处理信息" width="450">
                        <div class="sar-message">
                            <el-table border style="margin: 10px 0;width: 600px;" :data="SARtableData">
                                <el-table-column prop="number" label="编号" width="150" />
                                <el-table-column prop="name" label="文件名" />
                            </el-table>
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const fileInput = ref<HTMLInputElement | null>(null)
const percentage = ref(0)
const sar_progress = ref(false)
const sar_message = ref(false)
const time_select = ref(false)
const starttime = ref('');
const endtime = ref('');
const SARtableData = [
    {
        number: '1',
        name: 'SAR_11_20180106_103338103_IW_A_VV_slc_list',
    },
    {
        number: '2',
        name: 'SAR_11_20180130_103337377_IW_A_VV_slc_list',
    },
    {
        number: '3',
        name: 'SAR_11_20180211_103337254_IW_A_VV_slc_list',
    },
    {
        number: '4',
        name: 'SAR_11_20180223_103337028_IW_A_VV_slc_list',
    },
]
const choseFiles = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
}
const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        // 处理选择的文件
        console.log('Selected file:', file);
        // 例如，可以将文件上传到服务器
        // uploadFile(file);
    }
}
const S1_import = () => {
    sar_progress.value = true
    const timer = setInterval(() => {
        if (percentage.value >= 100) {
            clearInterval(timer);
            alert("SAR数据预处理完成")
            sar_progress.value = false
            percentage.value = 0
        } else {
            percentage.value = percentage.value + 10
        }
    }, 500)

}
const sar_import_data = () => {
    sar_message.value = true
}
const time_select_show = () => {
    time_select.value = true
}
</script>

<style scoped>
.containersar {
    .center {
        border-radius: 0px 0px 0px 0px;
        margin-left: 2.8vw;
        margin-right: 2.8vw;
        height: 390px;
        display: flex;

        .center-left {
            margin-left: 5vw;

            .sar-timearound {
                margin-top: 83px;

                button {
                    background: url("../../../image/statellite_组2.png");
                    width: 300px;
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

                .time_style {
                    display: flex;
                    align-items: center;

                    .parameter_style {
                        color: white;
                        display: flex;
                        align-items: center;
                        height: 50px;
                    }
                }
            }

            .sar-areafile {
                margin-top: 53px;

                button {
                    background: url("../../../image/statellite_组3.png");
                    width: 300px;
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

        .center-middle {
            width: 529.54px;
            height: 390px;
            position: relative;
            margin-left: 72px;

            .img-1 {
                width: 200px;
                height: 220px;
                position: absolute;
                top: 10vh;
                left: 9vw;
                z-index: 1;
            }
        }

        .center-right {
            margin-left: 55px;

            .sar-dataprocess {
                margin-top: 83px;

                button {
                    background: url("../../../image/statellite_组2.png");
                    width: 300px;
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

            .sar-result {
                margin-top: 53px;

                button {
                    background: url("../../../image/statellite_组3.png");
                    width: 300px;
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
}

.progress {
    position: absolute;
    ;
    top: 85%;
    left: 45%;
}

:deep(.el-table) {
    color: white;
    --el-table-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    --el-table-header-bg-color: transparent;
    --el-table-header-text-color: white;
    --el-table-row-hover-bg-color: gray;
}

:deep(.el-dialog) {
    background: #001421;
}

:deep(.el-dialog__titl)e {
    color: white;
    font: bold 18px 微软雅黑;

}

:deep(.el-progress__text) {
    color: white;
}
</style>