import path from "path"
export const viteProxy = {
    "/xxx":{
        target:""
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