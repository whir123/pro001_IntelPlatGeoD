import { createApp } from 'vue'
import router from './router/index'
import './style.css'
// @ts-ignore
import App from './App.vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(VideoPlayer)
app.mount('#app')