import { EnvMode } from "@root/config/config";

// 此时不在运行环境,只在编译期间运行  不要在这里添加任何的业务处理
export const isDevelop = (env:EnvMode) => env==="development"
export const isTest = (env:EnvMode) => env==="test"
export const isServe = (env:EnvMode) => env==="serve"
export function isTestEnv(env:EnvMode){
    return env === "development" || env === "test"
}