import * as Cesium from 'cesium'

let viewer:Cesium.Viewer
let handler:Cesium.ScreenSpaceEventHandler
function initViewer(domId: string, ionKey: string){
    Cesium.Ion.defaultAccessToken = ionKey;
    viewer= new Cesium.Viewer(domId, {
        timeline: false,//是否显示时间轴
        animation: false,//是否创建动画小控件，左下角仪表
        sceneModePicker: false,//是否显示2D，3D选择器
        baseLayerPicker: false,//是否显示图层选择器
        navigationHelpButton: false,//是否显示右上角的帮助按钮
        homeButton: false,//是否显示Home按钮
        geocoder: false,//是否显示geocoder小器件，右上角查询按钮
        fullscreenButton: false,//是否显示全屏按钮
        infoBox: false,//选中实体时所显示的信息框
        shouldAnimate:false,
    })
    viewer.cesiumWidget.creditContainer.remove();  //移除版权标识
    viewer.selectedEntityChanged.addEventListener(function (_: any) {
        viewer.selectedEntity = undefined;
    });
    viewer.clock.shouldAnimate = false
    viewer.scene.globe.depthTestAgainstTerrain = false;
    // viewer.scene.logarithmicDepthBuffer = false;
    handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
}

export {
    initViewer,
    viewer,
    handler
}
