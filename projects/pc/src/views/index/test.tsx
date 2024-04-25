import router from "@/router";
import { useEnvStore } from "@root/store/env";
import { Button } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const envStore = useEnvStore()
        return () => {
            console.log("执行test")
            return <div>
                test{envStore.state.count}
                <Button onClick={() => router.push({ path: "/index/home" })}>tohome</Button>
                <Button onClick={() => envStore.countChange()}>totest</Button>
            </div>
        }
    }
})