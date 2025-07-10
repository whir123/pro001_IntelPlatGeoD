<template>
    <div class="containers1">
        <div class="center">
            <div class="center-left">
                <div class="s1-timearound">
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
                <div class="s1-areafile">
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
                <div class="s1-download">
                    <button @click="S1_download">
                        <span>3:数据下载</span>
                    </button>
                    <div class="progress">
                        <el-progress v-if="s1_progress" type="dashboard" :percentage="percentage" :color="colors" />
                    </div>
                </div>
                <div class="s1-checkresult">
                    <button @click="S1_download_data">
                        <span>4:查看下载结果</span>
                    </button>
                    <el-dialog v-model="S1_message" title="卫星数据下载信息" width="450">
                        <div class="s1-message">
                            <el-table border style="margin: 10px 0;width: 600px;" :data="S1tableData">
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
import { ref } from 'vue'
const fileInput = ref<HTMLInputElement | null>(null)
const s1_progress = ref(false)
const percentage = ref(0)
const S1_message = ref(false)
const time_select = ref(false)
const starttime = ref('');
const endtime = ref('');
const S1tableData = [
    {
        number: '1',
        name: 'SAR_IW_SLC__1SDV_20180106T103338_20180106T103405_020033_02221D_FF5B',
    },
    {
        number: '2',
        name: 'SAR_IW_SLC__1SDV_20180130T103337_20180130T103405_020383_022D39_BABF',
    },
    {
        number: '3',
        name: 'SAR_IW_SLC__1SDV_20180211T103337_20180211T103405_020558_0232D2_5B20',
    },
    {
        number: '4',
        name: 'SAR_IW_SLC__1SDV_20180223T103337_20180223T103404_020733_023867_637B',
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
const S1_download = () => {
    s1_progress.value = true
    const timer = setInterval(() => {
        if (percentage.value >= 100) {
            clearInterval(timer);
            alert("卫星数据下载完成")
            s1_progress.value = false
            percentage.value = 0
        } else {
            percentage.value = percentage.value + 10
        }
    }, 500)

}
const S1_download_data = () => {
    S1_message.value = true
}
const time_select_show = () => {
    time_select.value = true
}
</script>

<style scoped>
.containers1 {
    .center {
        border-radius: 0px 0px 0px 0px;
        margin-left: 2.8vw;
        margin-right: 2.8vw;
        height: 390px;
        display: flex;

        .center-left {
            margin-left: 5vw;

            .s1-timearound {
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

            .s1-areafile {
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

            .s1-download {
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

            .s1-checkresult {
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

    .bottom {
        height: 125px;
        border-radius: 0px 0px 0px 0px;
        margin-left: 2.8vw;
        margin-right: 2.8vw;
        margin-top: 41px;
        display: flex;
        justify-content: center;

        .s1-name {
            background-image: url("../../../image/statellite_组1.png");
            width: 693px;
            height: 125px;

            .message-filename {
                height: 64.19px;
                margin-left: 30px;
                margin-top: 30px;

                .title {
                    font-size: 16px;
                    color: #9CD6FF;
                    display: block;
                }

                .filename {
                    margin-top: 20px;
                    font-size: 22px;
                    color: white;
                    display: inline-block;
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