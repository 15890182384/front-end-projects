import TabLayout, { RouteView1 } from "@/components/layouts";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component:TabLayout,
        name:"TabLayout",
        redirect:"/index",
        children:[
            {
                path:"/index",
                component:RouteView1,
                name:"Index",
                meta:{
                    title:"首页",
                    KeepAlive:false
                },
                redirect:"/index/home",
                children:[
                    {
                        path:"/index/home",
                        component:()=>(import("@/views/index/home")),
                        meta:{
                            keepAlive:true,
                            level:2
                        }
                    },
                    {
                        path:"/index/test",
                        component:()=>(import("@/views/index/test")),
                        meta:{
                            keepAlive:true,
                            level:2
                        }
                    }
                ]
            }
        ]
    }
]
export default createRouter({
    history: createWebHistory(PROJECT_NAME),
    routes: routes,
})