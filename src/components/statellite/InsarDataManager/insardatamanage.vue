<template>
    <div class="content">
        <div class="area">
            <h3>安徽xxx公路边坡</h3>
            <el-table :data="tableData" :border="true" style="width:40vw;" max-height="500">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4" style="margin-left: 10px;">
                            <div class="sar">
                                <h3>卫星信息</h3>
                                <p>时间覆盖范围: {{ props.row.time_around }}</p>
                                <p>极化: {{ props.row.polar }}</p>
                                <p>中心频率: {{ props.row.address }}</p>
                                <p>空间分辨率: {{ props.row.spatial_resolution }}</p>
                            </div>
                            <div class="insar_tiff" style="position: absolute;top:10px;right: 20px;">
                                <h3>InSAR成果图</h3>
                                <img src="../../../image/statellite_insardatamanage.png" style="width: 200px;height: 200px;">
                            </div>
                            <div class="parameter_message" style="margin-top: 60px;">
                                <h3>参数信息</h3>
                                <el-table :data="props.row.family" :border="true">
                                    <el-table-column label="参数名称" prop="name" />
                                    <el-table-column label="值" prop="value" />
                                </el-table>
                            </div>


                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date" />
                <el-table-column label="Name" prop="name" />
                <el-table-column fixed="right" label="Operations" min-width="40">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click.prevent="deleteqinghai(scope.$index)">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="area">
            <h3>安徽xxx公路边坡</h3>
            <el-table :data="tableData" :border="true" style="width:40vw;" max-height="500">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4" style="margin-left: 10px;">
                            <div class="sar">
                                <h3>卫星信息</h3>
                                <p>时间覆盖范围: {{ props.row.time_around }}</p>
                                <p>极化: {{ props.row.polar }}</p>
                                <p>中心频率: {{ props.row.address }}</p>
                                <p>空间分辨率: {{ props.row.spatial_resolution }}</p>
                            </div>
                            <div class="insar_tiff" style="position: absolute;top:10px;right: 20px;">
                                <h3>InSAR成果图</h3>
                                <img src="../../../image/statellite_insardatamanage.png" style="width: 200px;height: 200px;">
                            </div>
                            <div class="parameter_message" style="margin-top: 60px;">
                                <h3>参数信息</h3>
                                <el-table :data="props.row.family" :border="true">
                                    <el-table-column label="参数名称" prop="name" />
                                    <el-table-column label="值" prop="value" />
                                </el-table>
                            </div>


                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date" />
                <el-table-column label="Name" prop="name" />
            </el-table>
        </div>
        <div class="area">
            <h3>安徽xxx公路边坡</h3>
            <el-table :data="tableData" :border="true" style="width:40vw;" max-height="500">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4" style="margin-left: 10px;">
                            <div class="sar">
                                <h3>卫星信息</h3>
                                <p>时间覆盖范围: {{ props.row.time_around }}</p>
                                <p>极化: {{ props.row.polar }}</p>
                                <p>中心频率: {{ props.row.address }}</p>
                                <p>空间分辨率: {{ props.row.spatial_resolution }}</p>
                            </div>
                            <div class="insar_tiff" style="position: absolute;top:10px;right: 20px;">
                                <h3>InSAR成果图</h3>
                                <img src="../../../image/statellite_insardatamanage.png" style="width: 200px;height: 200px;">
                            </div>
                            <div class="parameter_message" style="margin-top: 60px;">
                                <h3>参数信息</h3>
                                <el-table :data="props.row.family" :border="true">
                                    <el-table-column label="参数名称" prop="name" />
                                    <el-table-column label="值" prop="value" />
                                </el-table>
                            </div>


                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date" />
                <el-table-column label="Name" prop="name" />
            </el-table>
        </div>
        <div class="area">
            <h3>安徽xxx公路边坡</h3>
            <el-table :data="tableData" :border="true" style="width:40vw;" max-height="500">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4" style="margin-left: 10px;">
                            <div class="sar">
                                <h3>卫星信息</h3>
                                <p>时间覆盖范围: {{ props.row.time_around }}</p>
                                <p>极化: {{ props.row.polar }}</p>
                                <p>中心频率: {{ props.row.address }}</p>
                                <p>空间分辨率: {{ props.row.spatial_resolution }}</p>
                            </div>
                            <div class="insar_tiff" style="position: absolute;top:10px;right: 20px;">
                                <h3>InSAR成果图</h3>
                                <img src="../../../image/statellite_insardatamanage.png" style="width: 200px;height: 200px;">
                            </div>
                            <div class="parameter_message" style="margin-top: 60px;">
                                <h3>参数信息</h3>
                                <el-table :data="props.row.family" :border="true">
                                    <el-table-column label="参数名称" prop="name" />
                                    <el-table-column label="值" prop="value" />
                                </el-table>
                            </div>


                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date" />
                <el-table-column label="Name" prop="name" />
            </el-table>
        </div>
        <div class="area">
            <h3>安徽xxx公路边坡</h3>
            <el-table :data="tableData" :border="true" style="width:40vw;" max-height="500">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4" style="margin-left: 10px;">
                            <div class="sar">
                                <h3>卫星信息</h3>
                                <p>时间覆盖范围: {{ props.row.time_around }}</p>
                                <p>极化: {{ props.row.polar }}</p>
                                <p>中心频率: {{ props.row.address }}</p>
                                <p>空间分辨率: {{ props.row.spatial_resolution }}</p>
                            </div>
                            <div class="insar_tiff" style="position: absolute;top:10px;right: 20px;">
                                <h3>InSAR成果图</h3>
                                <img src="../../../image/statellite_insardatamanage.png" style="width: 200px;height: 200px;">
                            </div>
                            <div class="parameter_message" style="margin-top: 60px;">
                                <h3>参数信息</h3>
                                <el-table :data="props.row.family" :border="true">
                                    <el-table-column label="参数名称" prop="name" />
                                    <el-table-column label="值" prop="value" />
                                </el-table>
                            </div>


                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date" />
                <el-table-column label="Name" prop="name" />
            </el-table>
        </div>
        <div class="area">
            <h3>安徽xxx公路边坡</h3>
            <el-table :data="tableData" :border="true" style="width:40vw;" max-height="500">
                <el-table-column type="expand">
                    <template #default="props">
                        <div m="4" style="margin-left: 10px;">
                            <div class="sar">
                                <h3>卫星信息</h3>
                                <p>时间覆盖范围: {{ props.row.time_around }}</p>
                                <p>极化: {{ props.row.polar }}</p>
                                <p>中心频率: {{ props.row.address }}</p>
                                <p>空间分辨率: {{ props.row.spatial_resolution }}</p>
                            </div>
                            <div class="insar_tiff" style="position: absolute;top:10px;right: 20px;">
                                <h3>InSAR成果图</h3>
                                <img src="../../../image/statellite_insardatamanage.png" style="width: 200px;height: 200px;">
                            </div>
                            <div class="parameter_message" style="margin-top: 60px;">
                                <h3>参数信息</h3>
                                <el-table :data="props.row.family" :border="true">
                                    <el-table-column label="参数名称" prop="name" />
                                    <el-table-column label="值" prop="value" />
                                </el-table>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Date" prop="date" />
                <el-table-column label="Name" prop="name" />
            </el-table>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';


const tableData: any[] = reactive([
    {
        date: '2016.05.03——2020.01.25',
        name: 'xxxInSAR处理',
        polar: '双极化(VV+VH)',
        time_around: '12 天',
        frequency: '5.405 GHz 的 C 波段',
        spatial_resolution: '5 x 20 米',
        family: [
            {
                name: '时间基线',
                value: '36',
            },
            {
                name: '空间基线',
                value: '2',
            },
            {
                name: '距离向视数',
                value: '0.2',
            },
            {
                name: '方位向视数',
                value: '0.2',
            },
            {
                name: '干涉工作流中解缠相关系数阈值',
                value: '0.2',
            },
            {
                name: '第一次反演解缠相干系数阈值',
                value: '0.2',
            },
            {
                name: '第二次反演相关系数阈值',
                value: '0.2',
            },
            {
                name: '产品时间一致性阈值',
                value: '0.2',
            },
        ]
    },
    {
        date: '2018.05.03——2023.01.25',
        name: 'xxxInSAR处理',
        polar: '双极化(VV+VH)',
        time_around: '12 天',
        frequency: '5.405 GHz 的 C 波段',
        spatial_resolution: '5 x 20 米',
        family: [
            {
                name: '时间基线',
                value: '36',
            },
            {
                name: '空间基线',
                value: '2',
            },
            {
                name: '距离向视数',
                value: '0.2',
            },
            {
                name: '方位向视数',
                value: '0.3',
            },
            {
                name: '干涉工作流中解缠相关系数阈值',
                value: '0.2',
            },
            {
                name: '第一次反演解缠相干系数阈值',
                value: '0.3',
            },
            {
                name: '第二次反演相关系数阈值',
                value: '0.2',
            },
            {
                name: '产品时间一致性阈值',
                value: '0.2',
            },
        ]
    },
    {
        date: '2018.05.03——2020.06.25',
        name: 'xxxInSAR处理',
        polar: '双极化(VV+VH)',
        time_around: '12 天',
        frequency: '5.405 GHz 的 C 波段',
        spatial_resolution: '5 x 20 米',
        family: [
            {
                name: '时间基线',
                value: '36',
            },
            {
                name: '空间基线',
                value: '2',
            },
            {
                name: '距离向视数',
                value: '0.2',
            },
            {
                name: '方位向视数',
                value: '0.3',
            },
            {
                name: '干涉工作流中解缠相关系数阈值',
                value: '0.2',
            },
            {
                name: '第一次反演解缠相干系数阈值',
                value: '0.3',
            },
            {
                name: '第二次反演相关系数阈值',
                value: '0.2',
            },
            {
                name: '产品时间一致性阈值',
                value: '0.2',
            },
        ]
    },
    {
        date: '2018.01.03——2021.03.21',
        name: 'xxxInSAR处理',
        polar: '双极化(VV+VH)',
        time_around: '12 天',
        frequency: '5.405 GHz 的 C 波段',
        spatial_resolution: '5 x 20 米',
        family: [
            {
                name: '时间基线',
                value: '36',
            },
            {
                name: '空间基线',
                value: '2',
            },
            {
                name: '距离向视数',
                value: '0.2',
            },
            {
                name: '方位向视数',
                value: '0.3',
            },
            {
                name: '干涉工作流中解缠相关系数阈值',
                value: '0.2',
            },
            {
                name: '第一次反演解缠相干系数阈值',
                value: '0.3',
            },
            {
                name: '第二次反演相关系数阈值',
                value: '0.2',
            },
            {
                name: '产品时间一致性阈值',
                value: '0.2',
            },
        ]
    },
    {
        date: '2019.05.03——2020.11.12',
        name: 'xxxInSAR处理',
        polar: '双极化(VV+VH)',
        time_around: '12 天',
        frequency: '5.405 GHz 的 C 波段',
        spatial_resolution: '5 x 20 米',
        family: [
            {
                name: '时间基线',
                value: '36',
            },
            {
                name: '空间基线',
                value: '2',
            },
            {
                name: '距离向视数',
                value: '0.2',
            },
            {
                name: '方位向视数',
                value: '0.3',
            },
            {
                name: '干涉工作流中解缠相关系数阈值',
                value: '0.2',
            },
            {
                name: '第一次反演解缠相干系数阈值',
                value: '0.3',
            },
            {
                name: '第二次反演相关系数阈值',
                value: '0.2',
            },
            {
                name: '产品时间一致性阈值',
                value: '0.2',
            },
        ]
    },
    {
        date: '2020.02.13——2023.01.25',
        name: 'xxxInSAR处理',
        polar: '双极化(VV+VH)',
        time_around: '12 天',
        frequency: '5.405 GHz 的 C 波段',
        spatial_resolution: '5 x 20 米',
        family: [
            {
                name: '时间基线',
                value: '36',
            },
            {
                name: '空间基线',
                value: '2',
            },
            {
                name: '距离向视数',
                value: '0.2',
            },
            {
                name: '方位向视数',
                value: '0.3',
            },
            {
                name: '干涉工作流中解缠相关系数阈值',
                value: '0.2',
            },
            {
                name: '第一次反演解缠相干系数阈值',
                value: '0.3',
            },
            {
                name: '第二次反演相关系数阈值',
                value: '0.2',
            },
            {
                name: '产品时间一致性阈值',
                value: '0.2',
            },
        ]
    },
])
const deleteqinghai = (index: number) => {
    tableData.splice(index, 1)
}

</script>

<style scoped>
.content {
    overflow: auto;
    height: 75vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* 创建两个等宽的列 */
    gap: 10px;
    color: white;
    margin-left: 20px;

    .area {
        margin-top: 10px;
        margin-left: 10px;
    }
}

:deep(.el-table) {
    --el-table-header-bg-color: transparent;
    --el-table-bg-color: transparent;
    --el-table-tr-bg-color: transparent;
    color: white;
    --el-table-header-text-color: white;
    --el-table-row-hover-bg-color: gray;
}

:deep(.el-table__expanded-cell) {
    background-color: transparent;
}
</style>