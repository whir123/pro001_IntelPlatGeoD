<template>
  <div class="back">
    <Earth v-if="pagesStore.isPagesMap"></Earth>
    <Statellite v-if="pagesStore.isPagesSatellite"></Statellite>
    <MineManagment v-if="pagesStore.isPagesBiz"></MineManagment>
    <RzPage v-if="pagesStore.isPagesRz"></RzPage>
    <ZzMagament v-if="pagesStore.isPapesZzManamgent"></ZzMagament>
    <TailingPage v-if="pagesStore.isPagesTailing"></TailingPage>
    <Left></Left>
    <Taskmanage v-if="pagesStore.isPagesControl"></Taskmanage>
    <RuleBook v-if="pagesStore.isPagesRuleBook"></RuleBook>
  </div>
</template>

<script setup lang="ts">
  import Earth from "./earth.vue";
  import Left from "./left.vue";
  import Statellite from "./statellite/statellite.vue";
  import MineManagment from "./biz/MineManagment.vue"
  import RzPage from "./rz/RzPage.vue"
  import ZzMagament from "./zzManagment/ZzManagment.vue"
  import Taskmanage from "./taskmanage/Taskmanage.vue"
  import TailingPage from "./Tailing/TailingPage.vue"
  import RuleBook from "./ruleBook/RuleBook.vue"
  import { usePagesStore } from "../store/usePagesStore.ts";
  const pagesStore = usePagesStore()
</script>


<style scoped>
.back {
  width: 100vw;
  height: 100vh;
  background: #1d4359;
}
</style>