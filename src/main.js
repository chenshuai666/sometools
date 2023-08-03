import { createApp } from 'vue'
import './style.css'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'

import CountTo from './plugins/CountTo'
import lazyload from './plugins/lazyload/lazyload'
import permission from './plugins/permission'

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .use(CountTo)
    .use(lazyload, { default: './src/assets/loading.svg' })
    .use(permission)
    .mount('#app')
