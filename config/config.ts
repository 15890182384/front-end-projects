import { RequestAction, RequestParam } from "../action/action"

export type EnvMode = "serve"|"test"|"development"
export type ProjectName = "middle" | "pc" | "admin"
export type  HandleRequest<P=any,R=any> = (url:string,params:RequestParam,action:RequestAction<P,R> )=>ReturnType<RequestAction<P,R>>
type Config = {
    handleRequest:HandleRequest
}
export const config:Config = {
    handleRequest:null as unknown as HandleRequest
}