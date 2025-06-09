<template>
    <div class="containerdem">
        <div class="center">
            <div class="center-left">
                <div class="dem-chosice">
                    <button @click="choseFiles">
                        <span>1:选择文件</span>
                    </button>
                    <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" />
                </div>
                <div class="dem-updata">
                    <button @click="dem_file">
                        <span>2:文件上传</span>
                    </button>
                    <div class="progress">
                        <el-progress v-if="dem_file_progress" type="dashboard" :percentage="percentage"
                            :color="colors" />
                    </div>
                </div>
            </div>
            <div class="center-middle">
                <img src="../../../image/statellite_组.png" class="img-1">
            </div>
            <div class="center-right">
                <div class="dem-mosaic">
                    <button @click="Mosaic_dem">
                        <span>3:DEM拼接</span>
                    </button>
                    <div class="progress">
                        <el-progress v-if="dem_progress" type="dashboard" :percentage="percentage" :color="colors" />
                    </div>
                </div>
                <div class="dem-result">
                    <button @click="demresult_show = true">
                        <span>4:查看结果</span>
                    </button>
                    <el-dialog v-model="demresult_show" title="DEM拼接后信息" width="450">
                        <div class="dem-message">
                            <span>DEM拼接信息:</span>
                            <div style="margin-top: 20px;display: block;">
                                <span style="margin-right: 20px;">坐标系:</span>
                                <span style="">GCS_WGS_1984</span>
                            </div>
                            <div class="basicdem_message">
                                <span>XY坐标系:</span>
                                <span style="margin-left: 35px;;">GCS_WGS_1984</span>
                                <br>
                                <span>角度单位:</span>
                                <span style="margin-left: 40px">Degree (0.0174532925199433)</span>
                                <br>
                                <span>基准面:</span>
                                <span style="margin-left: 55px">D_WGS_1984</span>
                                <br>
                                <span>列数与行数:</span>
                                <span style="margin-left: 25px">7201, 7201</span>
                            </div>
                            <span class="demonstration" style="display: block; margin-top: 20px;">DEM拼接后影像</span>
                            <img style="width:250px; height: 250px;margin-top: 10px;" src="../../../image/insar_tif1.jpg" />
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
        <div class="bottom">
            <!-- <div class="dem-name">
            <div class="message-filename">
                <span class="title">文件名称</span>
                <span class="filename">文件名称</span>
            </div>
            
        </div> -->
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const fileInput = ref<HTMLInputElement | null>(null)
const demresult_show = ref(false)
// DEM进度条
const percentage = ref(0)
const dem_progress = ref(false)
const dem_file_progress = ref(false)
// 进度条
const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
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
// DEM拼接
const Mosaic_dem = () => {
    dem_progress.value = true
    const timer = setInterval(() => {
        if (percentage.value >= 100) {
            clearInterval(timer);
            alert("DEM拼接完成")
            dem_progress.value = false
            percentage.value = 0
        } else {
            percentage.value = percentage.value + 10
        }
    }, 500)
}
const dem_file = () => {
    dem_file_progress.value = true
    const timer = setInterval(() => {
        if (percentage.value >= 100) {
            clearInterval(timer);
            alert("文件上传成功")
            dem_progress.value = false
            percentage.value = 0
        } else {
            percentage.value = percentage.value + 10
        }
    }, 500)
}
</script>

<style scoped>
.containerdem {
    .center {
        border-radius: 0px 0px 0px 0px;
        margin-left: 2.8vw;
        margin-right: 2.8vw;
        height: 390px;
        display: flex;

        .center-left {
            margin-left: 5vw;

            .dem-chosice {
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

            .dem-updata {
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

            .dem-mosaic {
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

            .dem-result {
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

                .dem-message {
                    span {
                        color: white;
                    }

                    .basicdem_message {
                        border: 1px solid skyblue;
                        margin-top: 20px;
                        padding: 20px;
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

        .dem-name {
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

:deep(.el-dialog) {
    background: #001421;
}

:deep(.el-dialog__titl)e {
    color: white;
    font-size: var(--el-dialog-title-font-size);
    line-height: var(--el-dialog-font-line-height);
}

:deep(.el-progress__text) {
    color: white;
}
</style>