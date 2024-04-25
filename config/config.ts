import { RequestAction, RequestParam } from "../action/action"

export type EnvMode = "serve"|"test"|"development"
export type ProjectName = "middle" | "pc" | "admin"
export type  HandleRequest<P=any,R=any> = (url:string,params:RequestParam,action:RequestAction<P,R> )=>ReturnType<RequestAction<P,R>>
type Config = {
    handleRequest:HandleRequest
}
export const config:Config = {
    // 这种写法表示当前值肯定会存在值但是默认并不能赋值的时候以这种写法规避ts语法检查
    handleRequest:null as unknown as HandleRequest
}