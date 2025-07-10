<template>
    <div class="background">
        <div id="cesium-container"></div>
        <div class="top">
            <span>
                高速公路滑坡灾害智能监测预警示范工程与管控平台
            </span>
            <div style="width: 100%;height: 13px"></div>
        </div>
        <div class="right-bar">
            <el-tree @node-click="" ref="treeRef" style="max-width: 300px" :data="data" check-strictly show-checkbox
                node-key="id" highlight-current :props="defaultProps" @check-change="handleCheckChange"></el-tree>
        </div>
        <div class="bottom-bar">
            <div class="position">
                <span>
                    {{ formattedPosition[0] }}
                </span>
                <div style="height: 100% ;width: 20px"></div>
                <span>
                    {{ formattedPosition[1] }}
                </span>
                <div style="height: 100% ;width: 20px"></div>
                <span>
                    {{ formattedPosition[2] }}
                </span>
            </div>
            <div id="time"></div>
        </div>
        <div class="measure-control" v-if="true">
            <MeasureControl @insarClicked="handleInsarClicked"></MeasureControl>
        </div>

        <!-- <div class="chart">
            <Chart></Chart>
        </div> -->
        <div class="charts" ref="charts">
            <div id="trendChart"></div>
            <div class="btn">
                <el-button :icon="Delete" color="white" circle @click="cancel"></el-button>
            </div>
        </div>
        <div class="message_chart">
            <message_chart></message_chart>
            <div class="realtime-clock">{{ currentTime }}</div>
        </div>

    </div>
</template>


<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import { ElTree } from "element-plus";
import { initViewer } from "../class/function/initViewer.ts";
import { CesiumIonKey } from "../class/config/cesium.ts";
import { cesiumSource, earth } from "../class/bean/earth.ts";
import { initEarthBean } from "../class/bean/earth.ts";
import { useEarthStore } from "../store/useEarthStore.ts";
import { onMounted, onUnmounted, ref, watch, computed } from "vue";
import { updateCurrentTime } from "../class/function/utils.ts";
import message_chart from "./map/MessageChart.vue";
import * as Cesium from 'cesium'
import { debounce } from "lodash";
import MeasureControl from './map/MeasureControl.vue'
import Chart from "./map/chart.vue";
import{loadwms_layers} from "./map/loadinsar"
//引入时序分析
import TimeExtract from './map/TimeExtract';


const currentTime = ref('');

const updateClock = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  currentTime.value = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

onMounted(() => {
  updateClock();
  setInterval(updateClock, 1000); // 每秒更新一次
});

const drawdeformation = TimeExtract()
const earthStore = useEarthStore()
const formattedPosition = computed(() => earthStore.getFormattedPosition());
let viewer: Cesium.Viewer
let charts = ref()
let handler:any
const handleCheckChange = (data: { id: any; }, checked: boolean, indeterminate: any) => {
    switch (data.id) {
        case 21: {
            cesiumSource.geoJson["anhui"].show = checked
            break
        }
        case 31: {
            // cesiumSource.pointCloud["test"].show = checked
            if (checked) {
                // let m = cesiumSource.addCloudPoint("/insar/1/tileset.json", "test")
                // earth.getViewer().zoomTo(m)
                if(viewer){
                    loadwms_layers(viewer,'http://8.137.123.23:8080/geoserver/Foshan_SBAS_test01/wms','Foshan_SBAS_test01:G_v5d0_h5d0_c0d4_0')
                }
            } else {
                // cesiumSource.pointCloud["test"].show = false
                // 获取所有图层
                for (let i = viewer.imageryLayers.length - 1; i >= 0; i--) {
                    const layer = viewer.imageryLayers.get(i);
                    if (layer.imageryProvider instanceof Cesium.WebMapServiceImageryProvider) {
                        const url = layer.imageryProvider.url;
                        if (url.includes('http://8.137.123.23:8080/geoserver/Foshan_SBAS_test01/wms')) {
                            viewer.imageryLayers.remove(layer);
                            console.log("已删除");
                        }
                    }
                }
            }
            break
        }
        case 11: {
            cesiumSource.addTdtImageryProvider()
            break
        }
        case 12: {
            cesiumSource.addBingMapImageryProvide()
            break
        }

    }
}

interface Tree {
    id: number
    label: string
    children?: Tree[]
}

const treeRef = ref<InstanceType<typeof ElTree>>()
const setChecked = () => {
    const keys = [21, 23]; // IDs of the nodes you want to check
    treeRef.value?.setCheckedKeys(keys);
}

// const setUnChecked = () => {
//     const allCheckedKeys = treeRef.value?.getCheckedKeys(); // 获取当前所有选中的节点 keys
//     const nodeToUncheck = 2; // ID of the node you want to uncheck
//     const newCheckedKeys = allCheckedKeys?.filter(key => key !== nodeToUncheck); // 移除不想选中的节点
//     treeRef.value?.setCheckedKeys(newCheckedKeys); // 更新选中的节点
// }
const defaultProps = {
    children: 'children',
    label: 'label',
}
const removeFirstLabelCheckBox = () => {
    const iconElement = document.querySelectorAll('i.el-icon.el-tree-node__expand-icon');
    if (iconElement) {
        iconElement.forEach((item) => {
            if (item) {
                item.parentElement.querySelector('label')?.remove()
            }
        })
    }

}

const data = ref<Tree[]>([
    {
        id: 1,
        label: '地图底图',
        children: [
            {
                id: 11,
                label: '天地图',
            }
        ],
    },
    {
        id: 2,
        label: '矢量数据',
        children: [
            {
                id: 21,
                label: '安徽省界.shp',
            },
            {
                id: 22,
                label: '时序结果.shp',
            },

        ],
    },
    {
        id: 3,
        label: '遥感数据',
        children: [
            {
                id: 31,
                label: 'InSAR观测数据示例.3dtiles',
            },
            {
                id: 32,
                label: 'InSAR.KML',
            },
            {
                id: 33,
                label: 'InSAR结果.KMZ',
            },
            {
                id: 34,
                label: 'InSAR结果2.tif',
            },
            {
                id: 35,
                label: 'InSAR结果3.GeoTIFF',
            }
        ],
    },
])

const handleInsarClicked = () => {
    let viewerhandler = drawdeformation (viewer)
    console.log(viewerhandler);
}
const cancel = ()=>{
    console.log(charts);
    charts.value.style.display = 'none'
    
}

onMounted(async () => {
    removeFirstLabelCheckBox()
    initViewer("cesium-container", CesiumIonKey)
    initEarthBean()
    setChecked()

    const updateTimer = setInterval(updateCurrentTime, 100) 
    await cesiumSource.addDefaultTerrain()
    // let viewer = earth.getViewer()
    viewer = earth.getViewer()
    let handler = earth.getHandler()
    await cesiumSource.addGeoJson("/geojson/安徽.geojson", "anhui", Cesium.Color.BLUE)
    // await cesiumSource.addCloudPoint("/insar/1/tileset.json", "test")
    // earth.getViewer().zoomTo()
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(117.51222, 31.679444, 2600000),
    })
    const refreshPosition = debounce(async (movement: any) => {
        const cartesian = viewer.camera.pickEllipsoid(movement.endPosition, viewer.scene.globe.ellipsoid);
        if (cartesian) {
            const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            const longitude = Cesium.Math.toDegrees(cartographic.longitude);
            const latitude = Cesium.Math.toDegrees(cartographic.latitude);
            let height = 0
            try {
                height = await earth.getTerrainHeight(longitude, latitude)
            } catch (e) {

            }
            earthStore.pointerPosition = [longitude, latitude, height]
        }
    }, 50)

    // 添加监听鼠标位置事件
    earth.getHandler().setInputAction(async (movement: any) => {
        refreshPosition(movement)
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    // 添加广告牌1
    let area_1 = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(116.3275, 31.438611),
        billboard: {
            image: "src/image/earth_高速.png",
            width: 30,
            height: 30,
        },
        label: {
            //文字标签
            text: '安徽XX高速\n示范区',
            font: '16px sans-serif',
            style: Cesium.LabelStyle.FILL,
            // 对齐方式(水平和竖直)
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            pixelOffset: new Cesium.Cartesian2(20, -2),
            showBackground: true,
            backgroundColor: Cesium.Color.fromBytes(0, 70, 24),
        },
    });
    // 添加广告牌2
    let area_2 = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(118.193611, 30.7075),
        billboard: {
            image: "src/image/earth_山路.png",
            width: 30,
            height: 30
        },
        label: {
            //文字标签
            text: '安徽XX山路\n示范区',
            font: '16px sans-serif',
            style: Cesium.LabelStyle.FILL,
            // 对齐方式(水平和竖直)
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            pixelOffset: new Cesium.Cartesian2(20, -2),
            showBackground: true,
            backgroundColor: Cesium.Color.fromBytes(0, 70, 24),
        },
    });
    // 添加广告牌3
    let area_3 = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(118.293611, 31.048611),
        billboard: {
            image: "src/image/earth_露天矿山.png",
            width: 30,
            height: 30
        },
        label: {
            //文字标签
            text: '安徽XX露天矿\n示范区',
            font: '16px sans-serif',
            style: Cesium.LabelStyle.FILL,
            // 对齐方式(水平和竖直)
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            pixelOffset: new Cesium.Cartesian2(20, -2),
            showBackground: true,
            backgroundColor: Cesium.Color.fromBytes(0, 70, 24),
        },
    });

    //增加鼠标滑动事件，当鼠标滑动到billboard上时，显示更多label信息，包括状态、等级、负责人等等信息
    viewer.screenSpaceEventHandler.setInputAction(function (movement: { endPosition: any; }) {
        let pickedObject = viewer.scene.pick(movement.endPosition);
        if (Cesium.defined(pickedObject) && pickedObject.primitive instanceof Cesium.Billboard) {
            // 将鼠标拾取到的 billboard 放大
            let entity = pickedObject.id;
            if (entity && entity.billboard) {
                entity.billboard.scale = 1.5;
            }
        } else {
            // 遍历所有实体，将非拾取到的 billboard 缩放还原
            viewer.entities.values.forEach((entity: { billboard: { scale: number; }; }) => {
                if (entity.billboard) {
                    entity.billboard.scale = 1;
                }
            });
        }
    }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
    //点击事件
    handler.setInputAction(function (event: { position: any; }) {
        if (event && event.position) { // 检查 event 和 event.position 是否存在
            let pickedObject = viewer.scene.pick(event.position);
            if (Cesium.defined(pickedObject) && pickedObject.primitive instanceof Cesium.Billboard) {
                // cesiumSource.pointCloud["test"].show = true
                // 这里点击后让 case 31 节点选中
                console.log(treeRef.value);

                const keys = [31]; // IDs of the nodes you want to check
                treeRef.value.setCheckedKeys(keys);
                console.log(treeRef.value?.getCheckedKeys());

                //确保handleCheckChange 事件被正确触发
                treeRef.value.$emit('check-change', keys, true, false);
                //打印viewer中挂载了那些3dtiles
                console.log(viewer.scene.primitives)
            }
        } else {
            console.error('Event or event.position is undefined');
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

})

watch(data, () => {
    removeFirstLabelCheckBox()
})
</script>


<style scoped>
#time {
    color: white;
    position: absolute;
    left: 20px;
    display: flex;
    /*width: 200px;*/
    height: 100%;
    vertical-align: middle;
    font-weight: 700;
    white-space: nowrap;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.background {
    position: absolute;
    left: 200px;
    top: 15px;
    border-radius: 10px;
    overflow: hidden;
    /* 防止内部元素溢出 */
    width: calc(100% - 220px);
    height: calc(100% - 30px);
}

#cesium-container {
    width: 100%;
    height: 100%;
    border-radius: 100px;
}

.top {
    position: absolute;
    top: 0;
    /*background-color: #021b37;*/
    width: 100%;
    height: 42px;
    background-image: url("../image/earth1_Top.png");
    background-size: 100% 120%;

    font-family: "TitleFont", Arial, sans-serif;
    font-size: 30px;
    font-style: italic;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
}

.position {
    display: flex;
    align-items: center;
    justify-content: center;
    /*width: 600px;*/
    height: 100%;
    position: absolute;
    right: 18px;
    /*background-color: #0d3577;*/
    color: white;
    font-weight: 700;
    font-size: 18px;
}

.bottom-bar {
    position: absolute;
    bottom: 0;
    height: 35px;
    width: 100%;
    background-color: #1e333f;
}

.right-bar {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 280px;
    height: 95%;
    background: linear-gradient(270deg, rgba(0, 22, 42, 0) 0%, rgba(0, 22, 42, 0.6) 28%, #00162A 100%);
    border-radius: 8px 0px 0px 8px;
}

:deep(.el-tree-node__content:hover) {
    background-color: transparent;
}

:deep(.el-tree-node__content) {
    background-color: transparent;
    padding-left: 0 !important;
}

:deep(.el-tree) {
    background-color: transparent;
    --el-tree-node-hover-bg-color: transparent;
    --el-tree-node-content-height: 40px;
    color: white;
}

:deep(.el-tree--highlight-current .el-tree-node.is-current .el-tree-node__content) {
    background: linear-gradient(270deg, rgba(0, 22, 42, 0) 0%, rgba(0, 22, 42, 0.6) 28%, #021b37 100%);
    /*background-color: #021b37;*/
}

:deep(.el-tree-node__label) {
    font-size: 16px;
    font-weight: 500;
    font-family: "Microsoft YaHei", serif;
}

/* .chart {
    position: absolute;
    width: 510px;
    bottom: 20px;
    right: 0px;
} */
.charts{
    position: absolute;
    width: 460px;
    bottom: 30%;
    right: 10px;
    background-color:rgba(22, 59, 170, 0.76);

    border:1px solid #4185bd;
    border-bottom-right-radius:1em;
    border-bottom-left-radius:1em;
    border-top-right-radius:1em;
    border-top-left-radius:1em;
    display: none;
    .btn{
        button{
            height: 20px;
            width: 20px;
        }
    }
    #trendChart{
        width: 430px;
        height: 300px; 
    }
}

.load-file-btn {
    position: absolute;
    top: 80px;
    left: 280px;
}

.message_chart {
    position: absolute;
    width: 510px;
    height: 770px;
    bottom: 60px;
    left: 20px;
}

.measure-control{
    position: fixed;
    bottom: 150px; 
    right: 320px;  
    z-index: 1000;
}

.realtime-clock {
  position: absolute;
  bottom: -57.5px;
  left: 2px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 6px 12px;
  border-radius: 6px;
  z-index: 10;
}
</style>