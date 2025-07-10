<template>
    <div class="container">
        <div class="top">
            <div class="btn-group">
                <div class="button-container btn_dem">
                    <button class="btn btndem" :class="{ 'active': isActivedem }" @click="activateButton('dem')">
                        <img src="../../../image/statellite_路径1.png">
                    </button>
                    <span :class="{ 'text-white': isActivedem, 'text-blue': !isActivedem }">1:DEM预处理</span>
                </div>

                <div class="button-container btn_s1">
                    <button class="btn btns1" :class="{ 'active': isActives1 }" @click="activateButton('s1')">
                        <img src="../../../image/statellite_路径2.png">
                    </button>
                    <span :class="{ 'text-white': isActives1, 'text-blue': !isActives1 }">2:卫星数据下载</span>
                </div>
                <div class="button-container btn_sar">
                    <button class="btn btnsar" :class="{ 'active': isActivesar }" @click="activateButton('sar')">
                        <img src="../../../image/statellite_路径3.png">
                    </button>
                    <span :class="{ 'text-white': isActivesar, 'text-blue': !isActivesar }">3:SAR数据预处理</span>
                </div>
                <div class="button-container btn_time">
                    <button class="btn btntime" :class="{ 'active': isActivetime }" @click="activateButton('time')">
                        <img src="../../../image/statellite_路径4.png">
                    </button>
                    <span :class="{ 'text-white': isActivetime, 'text-blue': !isActivetime }">4:时序分析</span>
                </div>
                <div class="button-container btn_oneprocess">
                    <button class="btn btnoneprocess" :class="{ 'active': isActiveoneprocess }"
                        @click="activateButton('oneprocess')">
                        <img src="../../../image/statellite_路径4.png">
                    </button>
                    <span :class="{ 'text-white': isActiveoneprocess, 'text-blue': !isActiveoneprocess }">一键处理</span>
                </div>
                <div class="insar_fielname">
                    <div class="file_title">
                        <span class="title">InSAR时序处理工作名称</span>
                        <!-- <span class="filename">请输入工作名称</span>
                        <el-input
                            v-model="filename"
                            style="width: 230px;margin-left: 10px;"
                            maxlength="20"
                            show-word-limit
                            
                            type="text"
                        /> -->
                        <el-input v-model="filename" style="width: 350px;margin-top: 20px;" maxlength="20"
                            placeholder="请输入工作名称" show-word-limit type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showComponent === 'insar_dem'">
            <insar_dem></insar_dem>
        </div>
        <div v-if="showComponent === 'insar_s1'">
            <insar_s1></insar_s1>
        </div>
        <div v-if="showComponent === 'insar_sar'">
            <insar_sar></insar_sar>
        </div>
        <div v-if="showComponent === 'insar_time'">
            <insar_time></insar_time>
        </div>
        <div v-if="showComponent === 'insar_oneprocess'">
            <insar_oneprocess></insar_oneprocess>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import insar_dem from './insar_dem.vue';
import insar_s1 from './insar_s1.vue';
import insar_sar from './insar_sar.vue';
import insar_time from './insar_time.vue';
import insar_oneprocess from './insar_oneprocess.vue';
const filename = ref('AnHui_Road')

const isActivedem = ref(true);
const isActives1 = ref(false);
const isActivesar = ref(false);
const isActivetime = ref(false);
const isActiveoneprocess = ref(false);
// 切换页面
const showComponent = ref('insar_dem');
const activateButton = (button: string) => {
    isActivedem.value = false;
    isActives1.value = false;
    isActivesar.value = false;
    isActivetime.value = false;
    isActiveoneprocess.value = false;
    switch (button) {
        case 'dem':
            isActivedem.value = true;
            showComponent.value = 'insar_dem';
            break;
        case 's1':
            isActives1.value = true;
            showComponent.value = 'insar_s1';
            break;
        case 'sar':
            isActivesar.value = true;
            showComponent.value = 'insar_sar';
            break;
        case 'time':
            isActivetime.value = true;
            showComponent.value = 'insar_time';
            break;
        case 'oneprocess':
            isActiveoneprocess.value = true;
            showComponent.value = 'insar_oneprocess';
            break;
    }
};
</script>

<style scoped>
.container {
    height: 80vh;

    .top {
        height: 153px;
        border-radius: 0px 0px 0px 0px;
        margin-left: 4vw;
        margin-right: 2.8vw;
        margin-top: 100px;
        margin-bottom: 100px;

        .btn-group {
            display: flex;

            .button-container {
                margin-top: 13px;

                text-align: center;
                /* 使 span 左右居中 */

                .btn {
                    width: 90px;
                    height: 90px;
                    background: #001421;
                    border-radius: 0px 0px 0px 0px;
                    transition: background 0.3s;
                }

                .btn.active {
                    background: radial-gradient(50% 50% at 50% 50%, rgba(1, 181, 229, 0.5) 0%, rgba(0, 197, 227, 0) 100%);
                }

                .text-blue {
                    display: block;
                    /* 使 span 占用一行 */
                    margin-top: 10px;
                    /* 调整按钮与 span 之间的间距 */
                    color: #9CD6FF;
                }

                .text-white {
                    display: block;
                    /* 使 span 占用一行 */
                    margin-top: 10px;
                    /* 调整按钮与 span 之间的间距 */
                    color: white;
                }
            }

            .insar_fielname {
                background-image: url("../../../image/statellite_组1.png");
                width: 500px;
                height: 125px;
                margin-left: 40px;
                margin-right: 40px;
                margin-top: 30px;

                .file_title {
                    margin-left: 2vw;
                    margin-top: 29px;

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

                    input {
                        display: inline-block;
                    }
                }

            }

            .btn_dem {
                margin: 40px;
            }

            .btn_s1 {
                margin: 40px;
            }

            .btn_sar {
                margin: 40px;
            }

            .btn_time {
                margin: 40px;
            }

            .btn_oneprocess {
                margin: 40px;
            }

        }
    }
}
</style>