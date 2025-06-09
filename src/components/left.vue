 <template>
    <div class="background">
        <div style="width: 100%; height: 5px; margin: 15px"></div>
        <div @click="() => {isMenuExpand = !isMenuExpand}"
            style="width: 150px;height: 50px; background-color: #1d4359;border-radius: 10px;display: flex;justify-content:center;align-items: center;z-index: 10">
            <img src="../image/left_1.png" alt=""><span style="color: aliceblue; font-size: larger; margin-left: 4px;">功能</span>
        </div>

        <transition name="menu_expand">
            <div class="menu" v-if="isMenuExpand">
                <div style="width: 100%;height:14px"></div>
                <div class="menu-button" @click="pagesStore.openPage(0)">
                    <div class="menu-button-inside" :class="{ 'menu-button-inside-back': pagesStore.isPagesMap }">
                        <img @mouseover=" isMapTooltipHovered = true" @mouseleave=" isMapTooltipHovered = false"
                            style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);" src="../image/left_2map_icon.svg" alt="">
                        <div class="tooltip">
                            <span>-三维地图</span>
                        </div>
                    </div>
                </div>
                <div style="width: 100%;height:14px" v-if="parsedPagesStoreValue.Permission !== 'company'"></div>
                <div class="menu-button" @click="pagesStore.openPage(1)"
                    v-if="parsedPagesStoreValue.Permission !== 'company'">
                    <div class="menu-button-inside" :class="{ 'menu-button-inside-back': pagesStore.isPagesSatellite }">
                        <img @mouseover=" isSatelliteTooltipHovered = true"
                            @mouseleave=" isSatelliteTooltipHovered = false" style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);"
                            src="../image/left_3satellite_icon.svg" alt="">
                        <div class="tooltip" :class="{ 'tooltip-show': isSatelliteTooltipHovered }">
                            <span>-遥感数据</span>
                        </div>
                    </div>
                </div>
                <div style="width: 100%;height:14px" v-if="parsedPagesStoreValue.Permission !== 'company'"></div>
                <div class="menu-button" @click="pagesStore.openPage(2)"
                    v-if="parsedPagesStoreValue.Permission !== 'company'">
                    <div class="menu-button-inside" :class="{ 'menu-button-inside-back': pagesStore.isPagesControl }">
                        <img @mouseover=" isControlTooltipHovered = true" @mouseleave=" isControlTooltipHovered = false"
                            style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);" src="../image/left_4control_img.svg" alt="">
                        <div class="tooltip" :class="{ 'tooltip-show': isControlTooltipHovered }">
                            <span>-边坡监控</span>
                        </div>
                    </div>
                </div>

                <div style="width: 100%;height:14px" v-if="parsedPagesStoreValue.Permission !== 'company'"></div>
                <div class="menu-button" v-if="parsedPagesStoreValue.Permission !== 'company'">
                    <div class="menu-button-inside" @click="pagesStore.openPage(6)"
                        :class="{ 'menu-button-inside-back': pagesStore.isPagesTailing }">
                        <img @mouseover=" isTailingTooltipHovered = true" @mouseleave=" isTailingTooltipHovered = false"
                            @click="pagesStore.openPage(4)" style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);" src="../image/left_5weikuangku.svg"
                            alt="">
                        <div class="tooltip" :class="{ 'tooltip-show': isTailingTooltipHovered }">
                            <span>-公路边坡</span>
                        </div>
                    </div>
                </div>

                <div style="width: 100%;height:14px" v-if="parsedPagesStoreValue.Permission === 'admin'"></div>
                <div class="menu-button" v-if="parsedPagesStoreValue.Permission === 'admin'">
                    <div class="menu-button-inside" @click="pagesStore.openPage(3)"
                        :class="{ 'menu-button-inside-back': pagesStore.isPagesBiz }">
                        <img @mouseover=" isBizTooltipHovered = true" @mouseleave=" isBizTooltipHovered = false"
                            @click="pagesStore.openPage(3)" style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);" src="../image/left_6biz.svg"
                            alt="">
                        <div class="tooltip" :class="{ 'tooltip-show': isBizTooltipHovered }">
                            <span>-业务管理</span>
                        </div>
                    </div>
                </div>
                <div style="width: 100%;height:14px"></div>
                <div class="menu-button" v-if="parsedPagesStoreValue.Permission !== 'company'">
                    <div class="menu-button-inside" @click="pagesStore.openPage(4)"
                        :class="{ 'menu-button-inside-back': pagesStore.isPagesRz }">
                        <img @mouseover=" isRzTooltipHovered = true" @mouseleave=" isRzTooltipHovered = false"
                            @click="pagesStore.openPage(4)" style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);" src="../image/left_7log.svg"
                            alt="">
                        <div class="tooltip" :class="{ 'tooltip-show': isRzTooltipHovered }">
                            <span>-日志管理</span>
                        </div>
                    </div>
                </div>
                <!-- <div style="width: 100%;height:14px" v-if="parsedPagesStoreValue.Permission !== 'admin'"></div>
                <div class="menu-button" v-if="parsedPagesStoreValue.Permission !== 'admin'">
                    <div class="menu-button-inside" @click="pagesStore.openPage(5)"
                        :class="{ 'menu-button-inside-back': pagesStore.isPapesZzManamgent }">
                        <img @mouseover=" isZzTooltipHovered = true" @mouseleave=" isZzTooltipHovered = false"
                            @click="pagesStore.openPage(5)" style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);"
                            src="../image/left_8qualification.svg" alt="">
                        <div class="tooltip" :class="{ 'tooltip-show': isZzTooltipHovered }">
                            <span>-资质业务</span>
                        </div>
                    </div>
                </div> -->
                <div style="width: 100%;height:14px"></div>
                <div class="menu-button" @click="pagesStore.openPage(7)">
                    <div class="menu-button-inside" :class="{ 'menu-button-inside-back': pagesStore.isPagesRuleBook }">
                        <img @mouseover=" isPagesRuleBookHovered = true" @mouseleave=" isPagesRuleBookHovered = false"
                            style="width: 30px;height: 30px;filter: brightness(0.2) saturate(100%);" src="../image/left_9measure.svg" alt="">
                        <div class="tooltip">
                            <span>-规范管理</span>
                        </div>
                    </div>
                </div>

            </div>
        </transition>

        <div class="user">
            <div class="avatar-outline">
                <div v-if="isUserMenuExpand"
                    style="width: 100%;height: 100%;background-color:#1d4359;position:absolute; border-radius: 50%;">
                </div>
                <div @click="() => { isUserMenuExpand = !isUserMenuExpand }" class="avatar" id="avatar">
                    <img style="width: 30px;height: 30px" src="../image/left_10avatar.png" alt="">
                </div>
            </div>
            <transition name="expand">
                <div class="user-menu" id="user-menu" v-if="isUserMenuExpand">
                    <div style="width: 100%;height: 30px;"></div>
                    <div class="user-menu-button">
                        <img src="../image/left_11logout.png" alt="">
                    </div>
                    <div style="width: 100%;height: 10px;"></div>
                    <div class="user-menu-button">
                        <img src="../image/left_12allsiez.png" alt="">
                    </div>
                    <div style="width: 100%;height: 10px;"></div>
                    <div class="user-menu-button">
                        <img src="../image/left_13personal.png" alt="">
                    </div>
                    <div style="width: 100%;height: 12px;"></div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { usePagesStore } from "../store/usePagesStore.ts";
    const pagesStore = usePagesStore()
    const isUserMenuExpand = ref(true)
    const isMenuExpand = ref(true)
    const isMapTooltipHovered = ref(false)
    const isSatelliteTooltipHovered = ref(false)
    const isControlTooltipHovered = ref(false)
    const isBizTooltipHovered = ref(false)
    const isRzTooltipHovered = ref(false)
    const isZzTooltipHovered = ref(false)
    const isTailingTooltipHovered = ref(false)
    const isPagesRuleBookHovered = ref(false)

    const pagesStoreValue = localStorage.getItem("loginUser")
    const parsedPagesStoreValue = ref(pagesStoreValue ? JSON.parse(pagesStoreValue) : null)
</script>

<style scoped>
/* 定义淡入淡出动画 */
/* 初始状态和结束状态 */
.expand-enter-active,
.expand-leave-active {
    transition: height 0.5s ease;
    overflow: hidden;
}

/* 进入动画开始状态和离开动画结束状态 */
.expand-enter-from,
.expand-leave-to {
    height: 0;
}

/* 进入动画结束状态和离开动画开始状态 */
.expand-enter-to,
.expand-leave-from {
    height: 152px;
    /* 这里的高度可以根据内容的实际高度来设置 */
}

/* 定义淡入淡出动画 */
/* 初始状态和结束状态 */
.menu_expand-enter-active,
.menu_expand-leave-active {
    transition: height 0.5s ease;
    overflow: hidden;
}

/* 进入动画开始状态和离开动画结束状态 */
.menu_expand-enter-from,
.menu_expand-leave-to {
    height: 0;
}

/* 进入动画结束状态和离开动画开始状态 */
.menu_expand-enter-to,
.menu_expand-leave-from {
    height: 256px;
    /* 这里的高度可以根据内容的实际高度来设置 */
}

.background {
    position: absolute;
    left: 5px;
    top: 15px;
    width: 180px;
    height: calc(100% - 30px);
    border-radius: 10px;
    background: #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menu {
    position: absolute;
    top: 100px;
    width: 160px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
    padding-bottom: 10px;
}

.menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 30px;
    background-color: #c5cedf;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    margin-bottom: 5px;
}

.menu-button:hover{
    background-color: #c5cedf00;  
}

.menu-button.menu_expand-enter-active{
    background-color: #c5cedf00;  
}

.menu-button-inside {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 110px;
    height: 30px;
}

.user {
    position: absolute;
    width: 40px;
    bottom: 10px;
}

.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* 使得角变为圆角 */
    transition: box-shadow 0.3s ease-in-out;
    /* 过渡效果 */
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

}

.avatar-outline {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* 使得角变为圆角 */
    transition: box-shadow 0.8s ease-in-out;
    /* 过渡效果 */
    box-shadow: none;
    /* 默认无阴影 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
}

.avatar-outline:hover {
    box-shadow: inset 0 0 15px 15px #1d4359;
    /* 鼠标悬停时的内投影阴影 */
    z-index: 11;
}

.user-menu {
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    border-radius: 35px 35px 0 0;
    overflow: hidden;
    align-items: center;
    background-color: #1d4359;
}

.shrink {
    animation: shrink 0.5s forwards;
}


.expand {
    animation: shrink 0.5s forwards;
}

.user-menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* 使得角变为圆角 */
    background-color: #37578b;
    transition: box-shadow 0.3s ease-in-out;
    /* 过渡效果 */


}

.user-menu-button:hover {
    box-shadow: inset 0 0 15px 15px rgba(11, 116, 254, 1);
    /* 鼠标悬停时的内投影阴影 */
}

.tooltip {
    font-family: "Microsoft YaHei", serif;
    font-size: 14px;
    color: #1d4359;
    white-space: nowrap;
    border-radius: 2px;
    padding: 3px;
    overflow: hidden;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 10;
    padding: 2px;
}
</style>