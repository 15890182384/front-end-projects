// 按照实际后端的返回结构定义
export type Server1Response<T = any> = {
    code: 200 | 500
    msg: string
    data: T
}
export type Serve2Response<T = any> = {
    statusCode: 200 | 500
    message: string
    data: T
}
export type ResponseData<T = any> = Server1Response<T> & Serve2Response<T>
   
// export const handleRequestResCallback:Array<(res:ResponseData)=>ResponseData> = []
// export default function handleRequestRes(res: ResponseData) {
//     res = handleRequestResCallback.map(callback=>callback(res))[handleRequestResCallback.length-1]
//     return res
// }