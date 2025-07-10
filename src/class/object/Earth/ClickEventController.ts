import {Earth} from "./Earth.ts";
import * as Cesium from 'cesium'
export class ClickEventController extends Earth{
    private Handler: Cesium.ScreenSpaceEventHandler;
    private leftClickHandlers: ((click: any) => void)[];
    private leftClickHandlersName: string[]
    private rightClickHandlers: ((click: any) => void)[];
    private rightClickHandlersName: string[]

    constructor() {
        super();
        this.Handler = super.getHandler();
        this.leftClickHandlers = [];
        this.rightClickHandlers = [];
        this.leftClickHandlersName = [];
        this.rightClickHandlersName = []
        this.initializeClickHandlers();
    }

    private initializeClickHandlers() {
        this.Handler.setInputAction((click: any) => {
            this.leftClickHandlers.forEach((handler) => {
                handler(click);
            });
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        this.Handler.setInputAction((click: any) => {
            this.rightClickHandlers.forEach((handler) => {
                handler(click);
            });
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    }

    public addLeftClickHandler(handler: (click: any) => void) {
        const handlerName = handler.name.toString()
        console.log(handlerName)
        if (handlerName == "oneTimeHandler") {
            this.leftClickHandlers.push(handler);
            return;
        }
        const handlerNameIndex = this.leftClickHandlersName.indexOf(handlerName)
        if (handlerNameIndex !== -1) {
            return
        } else {
            this.leftClickHandlers.push(handler);
            this.leftClickHandlersName.push(handlerName)
        }
    }

    public addRightClickHandler(handler: (click: any) => void) {
        const handlerName = handler.name.toString()
        if (handlerName == "oneTimeHandler") {
            this.rightClickHandlers.push(handler);
            return;
        }
        const handlerNameIndex = this.rightClickHandlersName.indexOf(handlerName)
        if (handlerNameIndex !== -1) {
            return
        } else {
            this.rightClickHandlers.push(handler);
            this.rightClickHandlersName.push(handlerName)
        }
    }

    public removeLeftClickHandler(handler: (click: any) => void) {
        const handlerName: string = handler.name.toString()
        const handlerNameIndex: number = this.leftClickHandlersName.indexOf(handlerName)
        const index = this.leftClickHandlers.indexOf(handler);
        if (index !== -1) {
            this.leftClickHandlers.splice(index, 1);
        }
        if (handlerNameIndex !== -1) {
            this.leftClickHandlersName.splice(index, 1)
        }
    }

    public removeRightClickHandler(handler: (click: any) => void) {
        const handlerName: string = handler.name.toString()
        const index = this.rightClickHandlers.indexOf(handler);
        if (index !== -1) {
            this.rightClickHandlers.splice(index, 1);
        }
        const handlerNameIndex: number = this.rightClickHandlersName.indexOf(handlerName)
        if (handlerNameIndex !== -1) {
            this.rightClickHandlersName.splice(handlerNameIndex, 1)
        }
    }


    public addOneTimeLeftClickHandler(handler: (click: any) => void): boolean {
        const handlerName = handler.name.toString() + "_oneTime"
        const index = this.leftClickHandlersName.indexOf(handlerName)
        if (index !== -1) {
            return false
        }
        const oneTimeHandler = (click: any) => {
            handler(click);
            let handlerNameIndex = this.leftClickHandlersName.indexOf(handlerName)
            this.leftClickHandlersName.splice(handlerNameIndex, 1)
            this.removeLeftClickHandler(oneTimeHandler);
        };
        this.addLeftClickHandler(oneTimeHandler);
        this.leftClickHandlersName.push(handlerName)
        return true;
    }

    public addOneTimeRightClickHandler(handler: (click: any) => void): boolean {
        const handlerName = handler.name.toString() + "_oneTime"
        console.log(handlerName)
        const index = this.rightClickHandlersName.indexOf(handlerName)
        if (index !== -1) {
            return false
        }
        const oneTimeHandler = (click: any) => {
            handler(click);
            let handlerNameIndex = this.rightClickHandlersName.indexOf(handlerName)
            this.rightClickHandlersName.splice(handlerNameIndex, 1)
            this.removeRightClickHandler(oneTimeHandler);
        };
        this.addRightClickHandler(oneTimeHandler);
        this.rightClickHandlersName.push(handlerName)
        return true
    }

    public removeOneTimeLeftClickHandler(handler: (click: any) => void) {
        const handlerName = handler.name.toString() + "_oneTime";
        const handlerNameIndex = this.leftClickHandlersName.indexOf(handlerName);
        if (handlerNameIndex !== -1) {
            this.leftClickHandlersName.splice(handlerNameIndex, 1);
            // 查找并移除对应的一次性处理函数
            const handlerIndex = this.leftClickHandlers.findIndex((h) => h.name === handlerName);
            if (handlerIndex !== -1) {
                this.leftClickHandlers.splice(handlerIndex, 1);
            }
        }
    }

    public removeOneTimeRightClickHandler(handler: (click: any) => void) {
        const handlerName = handler.name.toString() + "_oneTime";
        const handlerNameIndex = this.rightClickHandlersName.indexOf(handlerName);
        if (handlerNameIndex !== -1) {
            this.rightClickHandlersName.splice(handlerNameIndex, 1);
            // 查找并移除对应的一次性处理函数
            const handlerIndex = this.rightClickHandlers.findIndex((h) => h.name === handlerName);
            if (handlerIndex !== -1) {
                this.rightClickHandlers.splice(handlerIndex, 1);
            }
        }
    }

    public removeAllLeftClickEvent(){
        this.leftClickHandlers = []
        this.leftClickHandlersName = []
    }

    public removeAllRightClickEvent(){
        this.rightClickHandlers = []
        this.rightClickHandlersName = []
    }

    public removeAllClickEvent(){
        this.removeAllLeftClickEvent()
        this.removeAllRightClickEvent()
    }
}