import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        // component: ()=>import('@/App.vue'),
        redirect:'count-to',
        children: [
            { path: '/count-to', component: () => import('@/components/Countup.vue'), name: 'count-to' },
            { path: '/image-lazyload', component: () => import('@/components/Imagelazy.vue'), name: 'image-lazyload' },
            { path: '/drag', component: () => import('@/components/Drag.vue'), name: 'drag' },
            { path: '/todolist', component: () => import('@/components/Todolist.vue'), name: 'todolist' },
            { path: '/timeline', component: () => import('@/components/Timeline.vue'), name: 'timeline' },
            
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router