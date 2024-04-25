import {
    showSuccessToast,
    showFailToast ,
    showToast 
} from 'vant'

export const toastMessage = (message:string) =>{
    showToast (message)
}
export const success = (message:string) => {
    showSuccessToast(message)
}
export const error = (message:string ) => {
    showFailToast (message)
}
