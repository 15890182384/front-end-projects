// vite 通用代理  需要代理的服务器在此次配置即可
// 这块自己配置即可 更加灵活 就不做自动化处理了
import path from "path"
export const viteProxy = {
    "/xxx":{
        target:""//需要代理的地址
    }
}


export const getResolve = (dirName:string)=>{
    return {
        alias: {
            '@': path.resolve(dirName, 'src'),
            '@root': path.resolve(__dirname, '../'),
        },
        extensions: [
            '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json',
        ]
    }
}