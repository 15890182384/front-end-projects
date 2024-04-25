import { Axios, AxiosInstance, Method } from "axios"
import { ResponseData } from "./handleRequestResponse"
import { HandleRequest, config } from "@root/config/config"
export type Param = Record<string, any>
export type RequestParam = Param | FormData | number | string
export type RequestAction<P = any, R = any> = (url: string, params: P) => Promise<ResponseData<R>>
export function handleParamsToUrl(params: Param) {
    let paramsStr = ''
    for (var k in params) {
        paramsStr += `${k}=${params[k]}&`
    }

    return paramsStr.substring(0, paramsStr.length - 1)
}
export function createPostAction(service: AxiosInstance) {
    return function (url: string, parameter: RequestParam) {
        return service({
            url: url,
            method: 'post',
            data: parameter
        })
    }
}
export function createHttpAction(service: AxiosInstance) {
    return function (url: string, parameter: RequestParam, method: Method) {
        return service({
            url: url,
            method: method,
            data: parameter
        })
    }
}

export function createPutAction(service: AxiosInstance) {
    return function (url: string, parameter: RequestParam) {

        return service({
            url: url,
            method: 'put',
            data: parameter
        })
    }
}
export function createGetAction(service: AxiosInstance) {
    return function (url: string, parameter: Param) {

        return service({
            url: url,
            method: 'get',
            params: parameter
        })
    }
}
export function createDeleteAction(service: AxiosInstance) {
    return function (url: string, parameter: Param) {
        return service({
            url: url,
            method: 'delete',
            params: parameter
        })
    }
}
export function createDeleteUrlAction(service: AxiosInstance) {
    return function (url: string, parameter: Param) {
        let param = handleParamsToUrl(parameter)
        return service({
            url: url + '?' + param,
            method: 'delete',
            data: {}
        })
    }
}
export function createPostUrlAction(service: AxiosInstance) {
    return function (url: string, parameter: Param) {
        let param = handleParamsToUrl(parameter)
        return service({
            url: url + '?' + param,
            method: 'post',
            data: {}
        })
    }
}
export function createPutUrlAction(service: AxiosInstance) {
    return function (url: string, parameter: Param) {
        let param = handleParamsToUrl(parameter)
        return service({
            url: url + '?' + param,
            method: 'put',
            data: {}
        })
    }
}
export function createDownFile(service: AxiosInstance) {
    return function downFile(url: string, parameter: Param) {
        return service({
            url: url,
            params: parameter,
            method: 'get',
            responseType: 'blob'
        })
    }
}

export function createAction(service: AxiosInstance) {
    return {
        postAction: createPostAction(service),
        httpAction: createHttpAction(service),
        putAction: createPutAction(service),
        getAction: createGetAction(service),
        deleteAction: createDeleteAction(service),
        postUrlAction: createPostUrlAction(service),
        deleteUrlAction: createDeleteUrlAction(service),
        putUrlAction: createPutUrlAction(service),
        downFile: createDownFile(service),
    }
}

export function createApi<P extends RequestParam = any, R = any>(
    url: string,
    action: any
): (params: P) => ReturnType<HandleRequest<P, R>> {
    return (params: P) => config.handleRequest(url, params, action)
}