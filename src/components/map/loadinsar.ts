import * as Cesium from 'cesium';
export async function loadwms_layers(viewer:Cesium.Viewer,wms_URL:string,wms_layers:string) {
        // 1. 构建 WMS 服务的 GetCapabilities 请求 URL
        const getCapabilitiesUrl = `${wms_URL}?service=WMS&request=GetCapabilities`;
    
        // 2. 获取 WMS 服务的 GetCapabilities 响应
        const response = await fetch(getCapabilitiesUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch GetCapabilities from ${wms_URL}`);
        }
        const xmlText = await response.text();
    
        // 3. 解析 XML 获取该图层的 BBOX 边界信息
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        console.log('xmlDoc',xmlDoc);
        
        // const layerNode = xmlDoc.querySelector(
        //   `Layer[Name="${wms_layers}"]`
        // );
    
        // if (!layerNode) {
        //   throw new Error(`Layer "${wms_layers}" not found in WMS service.`);
        // }
        // 尝试获取 EX_GeographicBoundingBox 或 BoundingBox
        const bboxNode = xmlDoc.querySelector('EX_GeographicBoundingBox');
        const boundingBoxNode = xmlDoc.querySelector('BoundingBox');
        console.log('boundingBoxNode',boundingBoxNode)
        let bbox: string | null = null;
    
        // 优先获取 EX_GeographicBoundingBox
        if (bboxNode) {
          bbox = `${bboxNode.querySelector('westBoundLongitude')?.textContent},` +
                 `${bboxNode.querySelector('southBoundLatitude')?.textContent},` +
                 `${bboxNode.querySelector('eastBoundLongitude')?.textContent},` +
                 `${bboxNode.querySelector('northBoundLatitude')?.textContent}`;
        } 
        // 如果 EX_GeographicBoundingBox 没有，则获取 BoundingBox
        else if (boundingBoxNode) {
          const minx = boundingBoxNode.getAttribute('minx');
          const miny = boundingBoxNode.getAttribute('miny');
          const maxx = boundingBoxNode.getAttribute('maxx');
          const maxy = boundingBoxNode.getAttribute('maxy');
          bbox = `${minx},${miny},${maxx},${maxy}`;
        }
    
        if (!bbox) {
          throw new Error(`Bounding box not found for layer "${wms_layers}".`);
        }
    
        // 4. 解析 BBOX 值 (xmin, ymin, xmax, ymax)
        const [xmin, ymin, xmax, ymax] = bbox.split(',').map(Number);
        // const wgs84 = Cesium.Ellipsoid.WGS84;
        console.log('bbox',bbox);
        
    
        // 5. 使用 WMS 的 BBOX 值设置 Cesium 视角
        // const southwest = Cesium.Cartesian3.fromDegrees(xmin, ymin);
        // const northeast = Cesium.Cartesian3.fromDegrees(xmax, ymax);
        const rectangle = Cesium.Rectangle.fromDegrees(xmin, ymin, xmax, ymax);
    
        // 飞行到 WMS 服务的区域
        viewer.camera.flyTo({
          destination: rectangle,
          duration: 2, // 飞行持续时间，单位秒
        });
    
        // 6. 添加 WMS 图层到 Cesium 中
        const wmsProvider = new Cesium.WebMapServiceImageryProvider({
          url: wms_URL,
          layers: wms_layers,
          parameters: {
            service: 'WMS',
            transparent: true,
            format: 'image/png',
          },
        });
    
        viewer.imageryLayers.addImageryProvider(wmsProvider);
    
        console.log(`WMS service ${wms_layers} loaded and camera flown to region.`);
}