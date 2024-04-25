import router from "@/router";
import { computed, defineComponent, getCurrentInstance, KeepAlive, onMounted } from "vue";
import { RouterView } from "vue-router";

export default function createRouteView(level: number) {
    return defineComponent({
        setup(props, ctx) {
            let keepAliveClone = false
            const keepAlive = computed(() => {
                let meta = router.currentRoute.value.meta
                if (meta.level && meta.level === level) {
                    keepAliveClone = meta.keepAlive as boolean
                    return meta.keepAlive
                }
                return keepAliveClone
            })
            
            return () => {
                if (keepAlive.value) {
                    return (
                        <RouterView v-slots={{
                            default: ({ Component }: { Component: any }) => (
                                <KeepAlive ref="keepAlive">
                                    {Component ? <Component /> : ''}
                                </KeepAlive>
                            )
                        }} />
                    )
                } else {
                    return <RouterView />
                }
            }
        },
    })
}