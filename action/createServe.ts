import axios, { AxiosInstance } from "axios"

const requestError = (error:any) => {
    if (error && error.response) {
        // 处理http状态码错误  4xx  5xxx
    } else {
        // 处理程序错误 Exection 
    }
}
// 可以根据实际需求调整
type CreateServeParams = {
    baseURL: string
}
export function createRequest({ baseURL }: CreateServeParams): AxiosInstance {
    // 
    const service = axios.create({
        baseURL
    })
    service.interceptors.response.use((response) => {
        return response.data;
    }, requestError);
    return service
}