<template>
    <div class="container_message">
        <div class="warning_chart">
            <div class="warning_style">
                <span>预警监测</span>
            </div>
            <div class="warning_table">
                <el-table :data="tableData" style="width: 450px" :row-class-name="tableRowClassName">
                    <el-table-column prop="grade" label="等级" width="70" />
                    <el-table-column prop="type" label="类型" width="120" />
                    <el-table-column prop="trigger_time" label="触发时间" />
                    <el-table-column prop="description" label="触发事件" width="80" />
                </el-table>
            </div>
        </div>
        <div class="loading_chart">
            <div class="loading_style">
                <span>设备运行监测</span>
            </div>
            <div class="loading_table" id="loading_message">

            </div>
        </div>
        <div class="video_chart">
            <div class="video_style">
                <span>视频监控</span>
            </div>
            <div class="video_area">
                <div class="video_btn">
                    <button style="margin-left: 15px; margin-top: 5px;">公路边坡1</button>
                    <button style="margin-left: 32px;">公路边坡2</button>
                    <button style="margin-left: 32px;">公路边坡3</button>
                </div>
                <div class="video_show">
                    <div class="video_01">
                        <img src="../../image/MessageChart_监控1.png">
                        <span>摄像头 #3521</span>
                    </div>
                    <div class="video_02">
                        <img src="../../image/MessageChart_监控2.png">
                        <span>摄像头 #3521</span>
                    </div>
                    <div class="video_03">
                        <img src="../../image/MessageChart_监控3.png">
                        <span>摄像头 #3521</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

const tableData = [
    {
        grade: '低',
        type: '设备运行正常',
        trigger_time: '2024/11/29',
        description: '运行正常',
    },
    {
        grade: '无',
        type: '设备运行正常',
        trigger_time: '2024/11/29',
        description: '运行正常',
    },
    {
        grade: '中',
        type: '设备运行正常',
        trigger_time: '2024/11/29',
        description: '运行正常',
    },
    {
        grade: '高',
        type: '设备运行正常',
        trigger_time: '2024/11/29',
        description: '运行正常',
    },
]
const tableRowClassName = ({ rowIndex }: { rowIndex: number }) => {
    return rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
}
onMounted(() => {
    let loading_message = echarts.init(document.getElementById('loading_message'));
    let option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: 15,
            left: 'right',
            right: 5,
            orient: 'vertical',
            textStyle: {
                color: 'white' // 设置图例字体颜色为白色
            },
            itemWidth: 30, // 增加图例项的宽度
            itemHeight: 30
        },

        series: [
            {
                name: '传感器监查',
                type: 'pie',
                center: ['40%', '50%'],
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                padAngle: 5,
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: false,
                    position: 'left'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: '边坡位移监测' },
                    { value: 735, name: 'GNSS监测' },
                    { value: 580, name: '测斜仪监测' },
                    { value: 484, name: '裂缝监测' },
                    { value: 300, name: '雷达监测' }
                ]
            }
        ]
    };

    option && loading_message.setOption(option);
})


</script>

<style scoped>
.container_message {
    .warning_chart {
        .warning_style {
            background: url("../../image/statellite_组2.png");
            width: 366.31px;
            height: 40px;

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

        .warning_table {
            width: 400px;
            background-image: url("../../image/MessageChart_ChartBack.png");
            background-size: 100% 100%;
            padding: 10px;
        }
    }

    .loading_chart {
        margin-top: 10px;

        .loading_style {
            background: url("../../image/statellite_组2.png");
            width: 366.31px;
            height: 40px;

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

        .loading_table {
            width: 400px;
            height: 240px;
            background-color: rgba(21, 95, 161, 0.2);
            background-image: url("../../image/MessageChart_ChartBack.png");
            background-size: 100% 100%;
            padding: 10px;
        }
    }

    .video_chart {
        margin-top: 10px;

        .video_style {
            background: url("../../image/statellite_组2.png");
            width: 366.31px;
            height: 40px;

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

        .video_area {
            width: 400px;
            height: 150px;
            background-color: rgba(21, 95, 161, 0.2);
            background-image: url("../../image/MessageChart_ChartBack.png");
            background-size: 100% 100%;
            padding: 10px;

            .video_btn {
                button {
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    /* 字体加粗 */
                    font-style: italic;
                    /* 字体斜体 */
                    text-transform: uppercase;
                    /* 字母大写 */
                    width: 100px;
                    height: 40px;
                    background-color: rgba(21, 95, 161, 0.2);
                    border-radius: 5px;
                }

                button:hover {
                    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
                }
            }

            .video_show {
                display: flex;

                .video_01 {
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    /* 字体加粗 */
                    font-style: italic;
                    margin-top: 20px;
                    width: 130px;
                    display: flex;
                    flex-direction: column;
                    align-items: center
                }

                .video_02 {
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    /* 字体加粗 */
                    font-style: italic;
                    margin-top: 20px;
                    margin-left: 5px;
                    width: 130px;
                    display: flex;
                    flex-direction: column;
                    align-items: center
                }

                .video_03 {
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    /* 字体加粗 */
                    font-style: italic;
                    margin-top: 20px;
                    margin-left: 5px;
                    width: 130px;
                    display: flex;
                    flex-direction: column;
                    align-items: center
                }
            }

        }
    }
}

:deep(.el-table) {
    --el-table-header-bg-color: transparent;
    --el-table-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    color: white;
    --el-table-header-text-color: rgb(222, 196, 82);
    --el-table-row-hover-bg-color: gray;
    /* background-image: url("/image/ChartBack.png");
    background-size: 100% 100%; */
    --el-table-border-color: transparent;
}

:deep(.el-table .even-row) {
    background: rgba(21, 95, 161, 0.2);
}

:deep(.el-table .odd-row) {
    background: transparent;
}
</style>