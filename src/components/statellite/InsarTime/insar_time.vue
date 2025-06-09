<template>
    <div class="containertime">
        <div class="center">
            <div class="center-left">
                <div class="time-connention">
                    <button @click="time_connection">
                        <span>1:生成连接图</span>
                    </button>
                    <el-dialog v-model="connection_process" title="生成连接图处理" width="1100">
                        <insar_connection></insar_connection>
                    </el-dialog>
                </div>
                <div class="time-interstacking">
                    <button @click="interstacking">
                        <span>2:干涉处理</span>
                    </button>
                    <el-dialog v-model="interstacking_process" title="干涉处理" width="1100">
                        <time_interferogram></time_interferogram>
                    </el-dialog>
                </div>
            </div>
            <div class="center-middle">
                <img src="../../../image/statellite_组.png" class="img-1">
            </div>
            <div class="center-right">
                <div class="time-inversion">
                    <button @click="inversion">
                        <span>3:反演处理</span>
                    </button>
                    <el-dialog v-model="inversion_process" title="反演处理" width="1100">
                        <time_inversion></time_inversion>
                    </el-dialog>
                </div>
                <div class="time-geocoding">
                    <button @click="geocoding">
                        <span>4:地理编码</span>
                    </button>
                    <el-dialog v-model="geocoding_process" title="地理编码处理" width="1100">
                        <time_geocoding></time_geocoding>
                    </el-dialog>
                </div>
            </div>
        </div>
        <div class="bottom">
        </div>
    </div>
</template>

<script setup lang='ts'>
import insar_connection from './insar_time_process/time_connection.vue'
import time_interferogram from './insar_time_process/time_interferogram.vue';
import time_inversion from './insar_time_process/time_inversion.vue';
import time_geocoding from './insar_time_process/time_geocoding.vue';
import { ref } from 'vue';
// 连接图处理
const connection_process = ref(false)
// 干涉处理
const interstacking_process = ref(false)
// 解缠
const inversion_process = ref(false)
// 地理编码
const geocoding_process = ref(false)
const time_connection = () => {
    connection_process.value = true;
}
const interstacking = () => {
    interstacking_process.value = true;
}

const inversion = () => {
    inversion_process.value = true;
}
const geocoding = () => {
    geocoding_process.value = true;
}

</script>

<style scoped>
.containertime {
    .center {
        border-radius: 0px 0px 0px 0px;
        margin-left: 2.8vw;
        margin-right: 2.8vw;
        height: 390px;
        display: flex;

        .center-left {
            margin-left: 5vw;

            .time-connention {
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

            .time-interstacking {
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

            .time-inversion {
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

            .time-geocoding {
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

        .time-name {
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

:deep(.el-dialog) {
    background: #001421;
}

:deep(.el-dialog__titl)e {
    color: white;
    font: bold 18px 微软雅黑;

}
</style>