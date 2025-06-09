import {defineStore} from "pinia";
const toDegreesMinutesAndSeconds = (coordinate: number): string => {
    const absolute = Math.abs(coordinate);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.floor((minutesNotTruncated - minutes) * 60);
    return `${degrees}° ${minutes}' ${seconds}"`;
};
export const useEarthStore = defineStore("earthStore", {
    state: () => ({
        pointerPosition: [] as number[]
    }),
    getters: {
        getFormattedPosition(state) {

            return (): string[] => {
                return ["经度:" + toDegreesMinutesAndSeconds(state.pointerPosition[0]), "纬度:" + toDegreesMinutesAndSeconds(state.pointerPosition[1]), `高度:${state.pointerPosition[2]}` + "M"];
            }
        }
    },

})