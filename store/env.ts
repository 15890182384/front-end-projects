import { defineStore } from "pinia";
import { reactive } from "vue";

export const useEnvStore =  defineStore("Env",()=>{

    const state = reactive({
        count:2
    })
    function countChange(){
        state.count += 1
    }
    return {
        state,
        countChange
    }
})