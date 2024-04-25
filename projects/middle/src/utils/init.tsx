import Vue, { createApp } from 'vue'
import router from '@/router'
import { appIdName } from '@/config/config'
import App from '@/App'
import "@root/utils/rem"
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(<App />)
app.use(router)
app.mount(appIdName)
app.use(pinia)
export default app