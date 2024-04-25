import router from "@/router";
import { useEnvStore } from "@root/store/env";
import { Button } from "ant-design-vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
    setup(){
        const envStore = useEnvStore()
        const state = reactive({
            list:[
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
                {title:"大萨达撒D撒大萨达萨达但是阿达D撒",message:"但是萨达萨达萨达萨达萨达萨达萨达撒旦撒D撒D撒D撒D撒D撒萨达D撒D撒萨达D撒"},
            ]
        })
        return ()=>{
            return (
                <div class="p-w-full">
                    home{envStore.state.count}
                    <Button onClick={()=>router.push({path:"/index/test"})}>totest</Button>
                    <Button onClick={()=>envStore.countChange()}>totest</Button>
                </div>
            )
        }
    }
})