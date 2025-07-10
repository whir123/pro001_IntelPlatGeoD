import { Earth } from "./Earth.ts";
import * as Cesium from 'cesium'

export class CesiumSource extends Earth {
    private viewer: Cesium.Viewer
    public tiles: { [key: string]: Cesium.Cesium3DTileset } = {}
    public geoJson: { [key: string]: Cesium.GeoJsonDataSource } = {}
    public pointCloud: { [key: string]: Cesium.Cesium3DTileset } = {}

    constructor() {
        super();
        this.viewer = super.getViewer()
    }

    public async addDefaultTerrain() {
        super.getViewer().terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
            super.getCesium().IonResource.fromAssetId(1), {
            requestVertexNormals: true
        }
        )
    }

    public async addTile(url: string, tileName: string, matrix?: Cesium.Cartesian3) {
        for (let key in this.tiles) {
            if (key == tileName) {
                alert("tile名称不可以与已有tile相同")
                return
            }
        }
        try {
            const newTile: Cesium.Cesium3DTileset = await Cesium.Cesium3DTileset.fromUrl(url, {
                skipLevelOfDetail: false
            })
            newTile.tileFailed.addEventListener((): void => {
                return
            });
            if (matrix) {
                const translation: Cesium.Matrix4 = super.getCesium().Matrix4.fromTranslation(matrix)
                Cesium.Matrix4.multiply(newTile.modelMatrix, translation, newTile.modelMatrix)
            }
            this.tiles[tileName] = newTile
            await this.viewer.scene.primitives.add(newTile)
            await this.viewer.zoomTo(newTile)

        } catch (err) {
            console.log(err)
        }
    }

    public async addGeoJson(url: string, id: string, stroke: Cesium.Color = Cesium.Color.YELLOW) {

        let geoJson: Cesium.GeoJsonDataSource = await Cesium.GeoJsonDataSource.load(url, {
            stroke: stroke,
            fill: Cesium.Color.BLUE.withAlpha(0.1),
            strokeWidth: 8
        })
        this.geoJson[id] = geoJson
        await this.viewer.dataSources.add(geoJson);
    }

    public async addCloudPoint(url: string, id: string) {
        let tile = await Cesium.Cesium3DTileset.fromUrl(url)
        tile.maximumScreenSpaceError = 1
        tile.style = new Cesium.Cesium3DTileStyle({
            color: {
                conditions: [
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} >=6000', 'color("#10CECA")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <6000 && ${Intensity} >=5000', 'color("#0EC9B1")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <5000 && ${Intensity} >=4000', 'color("#0CC598")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <4000 && ${Intensity} >=3000', 'color("#0EC9B1")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <3000 && ${Intensity} >=2000', 'color("#02a900")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <2000 && ${Intensity} >=1500', 'color("#02a900")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <1500 && ${Intensity} >=1000', 'color("#02a900")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <1000 && ${Intensity} >=500', 'color("#02a900")'],
                    ['${Intensity}%10>=0 && ${Intensity}%10<=0  && ${Intensity} <500 && ${Intensity} >=0', 'color("#02a900")'],

                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}>=7000 ', 'color("#e90b0b")'],
                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<7000 && ${Intensity}>=6000 ', 'color("#891400")'],
                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<6000 && ${Intensity}>=5000 ', 'color("#b93c00")'],
                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<5000 && ${Intensity}>=4000 ', 'color("#996702")'],
                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<4000 && ${Intensity}>=3000 ', 'color("#8b7603")'],
                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<3000 && ${Intensity}>=2000 ', 'color("#9eec05")'],
                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<2000 && ${Intensity}>=1000 ', 'color("#5ab800")'],

                    ['${Intensity}%10>=1 && ${Intensity}%10<=1 && ${Intensity}<1000 && ${Intensity}>=1', 'color("#25de01")'],

                    ['true', 'color("#0bf032")']
                ]
            },
            pointSize: 4
        });
        this.pointCloud[id] = tile
        this.viewer.scene.primitives.add(tile)
        return tile;
    }

    public async addArcGisImageryProvider() {
        const provider = await Cesium.ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer")
        this.viewer.imageryLayers.removeAll()
        this.viewer.imageryLayers.addImageryProvider(provider)
    }

    public async addBingMapImageryProvide() {
        this.viewer.imageryLayers.removeAll()
        const layer = this.viewer.imageryLayers.addImageryProvider(
            await Cesium.IonImageryProvider.fromAssetId(2),
        );
        console.log(layer);
    }

    public async addTdtImageryProvider() {
        let TianDiTu = new Cesium.WebMapTileServiceImageryProvider({
            url: "http://t0.tianditu.gov.cn/img_w/wmts?tk=5a7162834fc0a292dcefaf6061f3ed7f",
            layer: 'img',
            style: 'default',
            tileMatrixSetID: 'w',
            format: 'tiles',
            maximumLevel: 18
        })
        this.viewer.imageryLayers.removeAll()
        this.viewer.imageryLayers.addImageryProvider(TianDiTu)
    }
}