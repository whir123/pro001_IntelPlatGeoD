import {createRouter, createWebHashHistory} from "vue-router";

import LoginPage from '../components/LoginPage.vue'
import Home from '../components/Home.vue'
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {name: 'login'} // 将默认路由指定为 home 子路由
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        }

    ]
})

export default router