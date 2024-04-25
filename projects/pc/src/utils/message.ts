import {
    message,
    Modal
} from 'ant-design-vue'

export const toastMessage = (text:string) =>{
    return message.success({
        content: text,
        duration: 3,
        
    })
}
export const success = (text:string) => {
    return message.success({
        content: text,
        duration: 3,
        
    })
}
export const error = (content: string, title: string = '错误', ) => {
    Modal.error({
        title: title,
        content: content,
        keyboard: true,
    })
}
