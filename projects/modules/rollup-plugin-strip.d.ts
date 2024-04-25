declare module "rollup-plugin-strip"{
    import { Plugin } from "vite";
    type StripOptions = {
        debugger:boolean
        functions:string[]
        sourceMap:boolean
        include:string[]
    }
    export default function strip(options:StripOptions):Plugin
}