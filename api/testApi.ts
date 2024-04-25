import { createApi } from "../action/action";
// 禁止使用解构语法来获取  相互引用很容易出现获取不到值
import testAction from "../action/testService";



export const testGet = createApi<any,boolean>("/testUrl",testAction.getAction)
export const testPost = createApi<any,boolean>("/testUrl",testAction.postAction)
export const testPut = createApi<any,boolean>("/testUrl",testAction.putAction)
export const testDelete = createApi<any,boolean>("/testUrl",testAction.deleteAction)
export const testPostUrl = createApi<any,boolean>("/testUrl",testAction.postUrlAction)


