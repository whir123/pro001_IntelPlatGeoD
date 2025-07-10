<template>
    <div class="container_manage">
        <div class="top">
            <div class="DEM-file">
                <div class="title">
                    <span class="title-span">原始DEM文件</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="280" :data="dem_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="search" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

            </div>
            <div class="S1-file">
                <div class="title">
                    <span class="title-span">原始卫星文件</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="280" :data="S1_infomation" style="width:550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="KML-file">
                <div class="title">
                    <span class="title-span">原始KML文件</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="280" :data="KML_infomation" style="width:550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <div class="middle">
            <div class="dem-mosaic">
                <div class="title">
                    <span class="title-span">DEM拼接处理数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="Mosaic_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="sar-data">
                <div class="title">
                    <span class="title-span">SAR预处理数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="SAR_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="search" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="connect-data">
                <div class="title">
                    <span class="title-span">连接图处理数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="Connection_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="interstacking-data">
                <div class="title">
                    <span class="title-span">干涉工作流处理数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="interferogram_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="inversion-data">
                <div class="title">
                    <span class="title-span">第一、二反演处理数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="inversion_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="geocoding-data">
                <div class="title">
                    <span class="title-span">地理编码数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="geocoding_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <div class="SAR-info">
            <div class="S1-info">
                <div class="title">
                    <span class="title-span">监测区在轨SAR数据参数</span>
                </div>
                <div class="info-table">
                    <el-table max-height="500" :data="Sentinel1_infomation" style="width: 450px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column prop="Dataset" label="属性" width="200" />
                        <el-table-column prop="SM" label="信息" width="300" />
                    </el-table>
                </div>
            </div>
            <div class="InSAR-info">
                <div class="title">
                    <span class="title-span">监测区ISAR数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="350" :data="Timeanalysis_infomation" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="dixing-table">
                <div class="title">
                    <span class="title-span">地形数据</span>
                </div>
                <div class="remote-table">
                    <el-table max-height="300" :data="Dixing_Data" style="width: 550px"
                        :row-class-name="tableRowClassName"
                        :header-cell-style="{ border: 'none', color: 'white', fontSize: '14px', background: 'rgba(2, 16, 23, 0.9)' }">
                        <el-table-column type="index" width="50" />
                        <el-table-column label="工作名称" prop="file_title" />
                        <el-table-column label="文件名" prop="file_name" />
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="searchs1" size="small" placeholder="请输入工作名称" />
                            </template>
                            <template #default="scope">
                                <el-button size="small" @click="handleEdit()">编辑</el-button>
                                <el-button size="small" type="danger" @click="handleDelete()">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue'

const search = ref('')
const searchs1 = ref('')
const tableRowClassName = ({ rowIndex }: { rowIndex: number }) => {
    return rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
}
const dem_infomation = computed(() =>
    dem_Data.filter(
        (data) =>
            !search.value ||
            data.file_title.toLowerCase().includes(search.value.toLowerCase())
    )
)
const S1_infomation = computed(() =>
    S1_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const KML_infomation = computed(() =>
    KML_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const Mosaic_infomation = computed(() =>
    Mosaic_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const SAR_infomation = computed(() =>
    SAR_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const Connection_infomation = computed(() =>
    Connection_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const interferogram_infomation = computed(() =>
    interferogram_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const inversion_infomation = computed(() =>
    inversion_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const geocoding_infomation = computed(() =>
    geocoding_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)
const Timeanalysis_infomation = computed(() =>
    Timeanalysis_Data.filter(
        (data) =>
            !searchs1.value ||
            data.file_title.toLowerCase().includes(searchs1.value.toLowerCase())
    )
)

const handleEdit = () => {

}
const handleDelete = () => {

}

const dem_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'N22E112.SRTMGL1.hgt.zip',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'N22E113.SRTMGL1.hgt.zip',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'N23E112.SRTMGL1.hgt.zip',
    },
    {
        file_title: 'QinGHai_mine',
        file_name: 'N23E113.SRTMGL1.hgt.zip',
    },
    {
        file_title: 'QinGHai_mine',
        file_name: 'N23E114.SRTMGL1.hgt.zip',
    },
    {
        file_title: 'QinGHai_mine',
        file_name: 'N23E115.SRTMGL1.hgt.zip',
    },
]
const S1_Data = [
    {
        file_title: 'XiZang_mine_XXX',
        file_name: 'SAR_IW_SLC__1SDV_20180106T103338_20180106T103405_020033_02221D_FF5B',
    },
    {
        file_title: 'XiZang_mine_XXX',
        file_name: 'SAR_IW_SLC__1SDV_20180130T103337_20180130T103405_020383_022D39_BABF',
    },
    {
        file_title: 'QinGHai_mine_XXX',
        file_name: 'SAR_IW_SLC__1SDV_20180211T103337_20180211T103405_020558_0232D2_5B20',
    },
    {
        file_title: 'QinGHai_mine_XXX',
        file_name: 'SAR_IW_SLC__1SDV_20180223T103337_20180223T103404_020733_023867_637B',
    },
]
const KML_Data = [
    {
        file_title: 'XiZangxxx_mine',
        file_name: 'XiZang_mine_KML.kml',
    },
    {
        file_title: 'XiZangxxx_mine',
        file_name: 'XiZang_mine_KML.kml',
    },
    {
        file_title: 'XiZangxxx_mine',
        file_name: 'XiZang_mine_KML.kml',
    },
    {
        file_title: 'XiZangxxx_mine',
        file_name: 'XiZang_mine_KML.kml',
    },
    {
        file_title: 'XiZangxxx_mine',
        file_name: 'XiZang_mine_KML.kml',
    },
]
const Mosaic_Data = [
    {
        file_title: 'XiZang_mine_XXX',
        file_name: 'XiZang_Dem.tiff',
    },
    {
        file_title: 'XiZang_mine_XXX',
        file_name: 'XiZang_Dem.tiff',
    },
    {
        file_title: 'QinGHai_mine_XXX',
        file_name: 'QinGHai_Dem.tiff',
    },
    {
        file_title: 'QinGHai_mine_XXX',
        file_name: 'QinGHai_Dem.tiff',
    },
    {
        file_title: 'QinGHai_mine_XXX',
        file_name: 'QinGHai_Dem.tiff',
    },
]
const SAR_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'SAR_11_20180106_103338103_IW_A_VV_slc_list',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'SAR_11_20180130_103337377_IW_A_VV_slc_list',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'SAR_11_20180211_103337254_IW_A_VV_slc_list',
    },
    {
        file_title: 'QinGHai_mine',
        file_name: 'SAR_11_20180223_103337028_IW_A_VV_slc_list',
    },
]
const Connection_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'CG_entire_report.txt',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'CG_report.txt',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'CG_SAR_11_20191109_103354206_IW_A_VV_slc_list_78_pwr',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'CG_SAR_11_20191109_103354206_IW_A_VV_slc_list_78_pwr.dbf',
    },
]
const interferogram_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'interf_tiff',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'IS_pwr_meta',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'IS_pwr_meta.hdr',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'IS_cc.series',
    },
]
const inversion_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'interf_tiff',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'inversion',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'FI_model_meta',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'SI_disp.series',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'SI_disp_first.series',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'SI_disp_first_meta',
    },
]
const geocoding_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'G_SI_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'G_v5d0_h5d0_c0d2_0.shp',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'G_disp_first_geo.series',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'G_disp_first_geo.series',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'G_FI_dem',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'G_disp_geo_meta',
    },
]
const Sentinel1_infomation = [
    {
        Dataset: '国籍',
        SM: '中国',
    },
    {
        Dataset: '研发机构',
        SM: '天仪研究院',
    },
    {
        Dataset: '任务类型',
        SM: '遥感（雷达）',
    },
    {
        Dataset: '运载火箭',
        SM: '力箭一号',
    },
    {
        Dataset: '发射日期',
        SM: '2023年06月07日',
    },
    {
        Dataset: '质量',
        SM: '300 kg',
    },
    {
        Dataset: '国际卫星标识符',
        SM: '2023-081D',
    },
    {
        Dataset: 'NORAD',
        SM: '56849',
    },

]
const Timeanalysis_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: '2016_2017_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2017_2018_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2018_2019_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2019_2020_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2020_2021_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2021_2022_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2022_2023_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2023_2024_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2016_2017_velocity_geo',
    },
    {
        file_title: 'XiZang_mine',
        file_name: '2017_2018_velocity_geo',
    },
]
const Dixing_Data = [
    {
        file_title: 'XiZang_mine',
        file_name: 'XiZang_XXX_mine_terrain',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'XiZang_XXX_mine_terrain',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'XiZang_XXX_mine_terrain',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'XiZang_XXX_mine_terrain',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'XiZang_XXX_mine_terrain',
    },
    {
        file_title: 'XiZang_mine',
        file_name: 'XiZang_XXX_mine_terrain',
    },
]
</script>

<style scoped>
:deep(.el-table) {
    background: transparent;
    color: white;
}

:deep(.el-table .even-row) {
    background: rgba(21, 95, 161, 0.2);
}

:deep(.el-table .odd-row) {
    background: transparent;
}

.container_manage {
    height: 80vh;
    overflow: auto;
    color: white;
    overflow: auto;

    .top {
        height: 300px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;

        .DEM-file {
            margin-right: 39px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }

        .S1-file {
            margin-right: 39px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }
            }
        }

        .KML-file {
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }
    }

    .middle {
        height: 300px;
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;

        .dem-mosaic {
            margin-right: 39px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }

        .sar-data {
            margin-right: 39px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }
            }
        }

        .connect-data {
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }
    }

    .bottom {
        height: 300px;
        margin-top: 40px;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;

        .interstacking-data {
            margin-right: 39px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }

        .inversion-data {
            margin-right: 39px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }
            }
        }

        .geocoding-data {
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }
    }

    .SAR-info {
        margin-bottom: 260px;
        height: 300px;
        margin-top: 40px;
        margin-left: 20px;

        display: flex;

        .S1-info {
            width: 450px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;
                }
            }

            .info-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }

        .InSAR-info {
            margin-left: 140px;
            width: 550px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }

        .dixing-table {
            width: 550px;
            margin-left: 40px;

            .title {
                background: linear-gradient(180deg, #67B0FF 0%, rgba(38, 71, 128, 0.2) 100%);

                .title-span {
                    margin-left: 28px;
                    font-size: 18px;
                    font-weight: bold;

                }
            }

            .remote-table {
                >>>.el-table__row>td {
                    border: none;
                }

                .el-table__inner-wrapper:before {
                    bottom: 0;
                    height: 0px;
                    left: 0;
                }
            }
        }
    }
}

:deep(.el-table__inner-wrapper:before) {
    bottom: 0;
    height: 0px;
    left: 0;
}

:deep(.el-table) {
    --el-table-row-hover-bg-color: gray;
}
</style>