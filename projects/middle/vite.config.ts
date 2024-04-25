import { defineComponent } from "vue"
import { EnvMode, ProjectName } from "@root/config/config"
import { defineConfig } from "vite"
import path, { dirname } from "path"
import { getResolve, viteProxy } from "../../config/viteCommonConfig"
import vue from '@vitejs/plugin-vue'
import jsx from "@vitejs/plugin-vue-jsx"
import strip from 'rollup-plugin-strip';
import { isTestEnv } from "../../utils/envUtil"
import tailWind from "tailwindcss"
function resolve(path1:string) {
    return path.resolve(__dirname, path1)
}
const projectName:ProjectName = "middle"
const env:EnvMode = "development"
let options = {
    debugger: isTestEnv(env) ? true : false,
    functions: isTestEnv(env) ? ['assert.*', 'debug', 'alert'] : ['console.log', 'assert.*', 'debug', 'alert'],
    sourceMap: isTestEnv(env) ? true : true,
    include: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.vue']
}
let buildPlugin = strip(options)
const viteConfig = {
    envDir:__dirname,
    root: resolve('./'),
    resolve:Object.assign(getResolve(__dirname)),
    define:{
        "ENV_MODE":`"${env}"`,
        "PROJECT_NAME":`"${projectName}"`,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    },
    plugins:[
        vue(),
        jsx(),
    ],
    fs:{
        allow:[
            path.resolve(__dirname,"../")
        ]
    },
    build:{
        rollupOptions:{
            plugins:[
                buildPlugin
            ]
        },
        outDir:projectName
    },
    server:{
        host:"0.0.0.0",
        port:8080,
        proxy:viteProxy
    },
    css:{
        postcss:{
            plugins:[
                tailWind
            ]
        }
    }
}

export default defineConfig(({mode})=>{
    return viteConfig
})