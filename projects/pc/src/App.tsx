import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import "./App.less"
export default defineComponent({
    setup(){
        return ()=>(
            <RouterView />
        )
    }
})