import {Earth} from "../object/Earth/Earth.ts";
import {CesiumSource} from "../object/Earth/CesiumSource.ts";
import {ClickEventController} from "../object/Earth/ClickEventController.ts";

let earth:Earth,
    cesiumSource:CesiumSource,
    clickEventController:ClickEventController

export function initEarthBean(){
    earth = new Earth()
    cesiumSource = new CesiumSource()
    clickEventController = new ClickEventController()
}

export {
    earth,cesiumSource,clickEventController
}


