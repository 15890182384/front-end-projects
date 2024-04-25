import { ResponseData } from '@root/action/handleRequestResponse'
import {HandleRequest, config} from '@root/config/config'
import { error, success } from './utils/message'
export const handleResult = (res:ResponseData) => {
    if (res.code === 200 ) {
        return true
    } else {
        error(res.message)
        return false
    }
}
const handleRequest:HandleRequest = (url,params,action) =>{
    return new Promise((resolve,reject)=>{
        action(url, params).then(res => {
            if (handleResult(res)) {
                resolve(res)
            } else {
                reject(res)
            }
        }).catch(e => {
            reject(e)
        })
    })
}


config.handleRequest = handleRequest