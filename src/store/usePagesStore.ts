import {defineStore} from "pinia";

export const usePagesStore = defineStore("PagesStore", {
    state: () => ({
        isPagesMap: true as boolean,
        isPagesSatellite: false as boolean,
        isPagesControl: false as boolean,
        isPagesBiz: false as boolean,
        isPagesRz: false as boolean,
        isPapesZzManamgent: false as boolean,
        isPagesTailing: false as boolean,
        isPagesRuleBook: false as boolean,
    }),
    actions: {
        closeAllPages() {
            this.isPagesMap = false
            this.isPagesSatellite = false
            this.isPagesControl = false
            this.isPagesBiz = false
            this.isPagesRz = false
            this.isPapesZzManamgent = false
            this.isPagesTailing = false
            this.isPagesRuleBook = false
        },
        openPage(index: number): void {
            this.closeAllPages()
            switch (index) {
                case 0: {
                    this.isPagesMap = true
                    break
                }
                case 1: {
                    this.isPagesSatellite = true
                    break
                }
                case 2: {
                    this.isPagesControl = true
                    break
                }
                case 3: {
                    this.isPagesBiz = true
                    break
                }
                case 4: {
                    this.isPagesRz = true
                    break
                }
                case 5: {
                    this.isPapesZzManamgent = true
                    break
                }
                case 6: {
                    this.isPagesTailing = true
                    break
                }
                case 7: {
                    this.isPagesRuleBook = true
                    break
                }
                default: {
                    throw Error("没有页面的Index值")
                }
            }
        }
    }
})