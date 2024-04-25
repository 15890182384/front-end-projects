import {defineComponent} from "vue"
import { RouterView } from "vue-router"
// 对于子级页面统一做下控制  全局的一些控件等 或者样式可以在此设置
export default defineComponent({
    setup(){
        return ()=>(
            <div class="tab-layout">
                <RouterView />
            </div>
        )
    }
})