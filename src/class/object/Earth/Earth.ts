import * as Cesium from 'cesium'
import {viewer, handler} from "../../function/initViewer.ts";


export class Earth {
    private readonly _viewer: Cesium.Viewer = viewer
    private readonly handler: Cesium.ScreenSpaceEventHandler = handler

    constructor() {
        this.handler = new Cesium.ScreenSpaceEventHandler(this._viewer.scene.canvas)
    }

    public getCesium(): typeof Cesium {
        return Cesium;
    }

    public getViewer(): Cesium.Viewer {
        return this._viewer;
    }


    public getHandler(): Cesium.ScreenSpaceEventHandler {
        return this.handler
    }


    //获取相机姿态
    public getCameraPosition() {
        let head = this._viewer.scene.camera.heading
        let pitch = this._viewer.scene.camera.pitch
        let roll = this._viewer.scene.camera.roll
        let info = {'head': head, 'pitch': pitch, 'roll': roll};
        // 获取位置 wgs84的地心坐标系，x,y坐标值以弧度来表示
        let position = this._viewer.scene.camera.positionCartographic
        let longitude = Cesium.Math.toDegrees(position.longitude).toFixed(6)
        let latitude = Cesium.Math.toDegrees(position.latitude).toFixed(6)
        let height = position.height
        return {lng: longitude, lat: latitude, h: height, mat: info}
    }

    //获取两个点的中点
    public calculateMidpoint(longitude1: number, latitude1: number, longitude2: number, latitude2: number): [number, number] {
        // 将经纬度转换为Cartographic对象
        let point1 = Cesium.Cartographic.fromDegrees(longitude1, latitude1);
        let point2 = Cesium.Cartographic.fromDegrees(longitude2, latitude2);
        // 使用Cesium的EllipsoidGeodesic计算中点
        let ellipsoidGeodesic = new Cesium.EllipsoidGeodesic(point1, point2);
        let midpointCartographic = ellipsoidGeodesic.interpolateUsingFraction(0.5);
        // 将中点转换回经纬度
        let midpointLongitude = Cesium.Math.toDegrees(midpointCartographic.longitude);
        let midpointLatitude = Cesium.Math.toDegrees(midpointCartographic.latitude);
        return [midpointLongitude, midpointLatitude];
    }

    //获取指定地点的地形高度
    public async getTerrainHeight(longitude: number, latitude: number) {
        let terrainProvider = this._viewer.terrainProvider;
        let positions = [Cesium.Cartographic.fromDegrees(longitude, latitude)];
        return Cesium.sampleTerrainMostDetailed(terrainProvider, positions)
            .then(function (updatedPositions: any) {
                // updatedPositions[0].height 会包含高度信息
                if (updatedPositions[0].height < 0) {
                    return 0
                } else {
                    return parseFloat(updatedPositions[0].height.toFixed(2));
                }
            });
    }


    public getTileTerrainHeight(longitude: number, latitude: number): number {
        return this._viewer.scene.sampleHeight(
            new Cesium.Cartographic(Cesium.Math.toRadians(longitude), Cesium.Math.toRadians(latitude))
        )
    }

    //获取点击时的位置
    public getClickPosition(click: any): [number, number] {
        const pickedObject = this._viewer.scene.pick(click.position);
        let cartesian;
        if (Cesium.defined(pickedObject)) {
            cartesian = this._viewer.scene.pickPosition(click.position);
        } else {
            const ray: any = this._viewer.camera.getPickRay(click.position);
            cartesian = this._viewer.scene.globe.pick(ray, this._viewer.scene);
        }
        if (cartesian) {
            const cartographic: Cesium.Cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            const longitude: number = Cesium.Math.toDegrees(cartographic.longitude);
            const latitude: number = Cesium.Math.toDegrees(cartographic.latitude);
            return [longitude, latitude]
        } else {
            throw Error
        }
    }


    //计算距离
    public calculateDistance(inputPointB: [number, number] | [number, number, number], inputPointA: [number, number] | [number, number, number]): number {
        // @ts-ignore
        let coord1 = Cesium.Cartesian3.fromDegrees(...inputPointA);
        // @ts-ignore
        let coord2 = Cesium.Cartesian3.fromDegrees(...inputPointB);
        return Cesium.Cartesian3.distance(coord1, coord2)
    }


}