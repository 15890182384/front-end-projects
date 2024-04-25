import {  createUnit, tailWindUtilities } from "../../config/tailwindConfig"
import { PluginAPI } from "tailwindcss/types/config"

// 建议每个项目都设置不同的前缀 防止样式冲突
let spacingPx = createUnit("px")
let spacingRem = createUnit("rem")
function addUtilPlugin(){
  return ({matchUtilities}:PluginAPI)=>{
    matchUtilities(...tailWindUtilities.textHiding)
    matchUtilities(...tailWindUtilities.borderTop)
    matchUtilities(...tailWindUtilities.borderAll)
    matchUtilities(...tailWindUtilities.borderBottom)
  }
}
module.exports = {
    content: ['./src/**/*.tsx',],
    theme: {
      extend: {
        spacing:spacingRem,
        lineHeight:spacingRem
      },
      borderRadius:spacingRem,
      fontSize:Object.keys(spacingRem).reduce((sub,key)=>{
        sub[key] = [spacingPx[key],{lineHeight:spacingPx[key]}]
        return sub
      },{} as Record<string,[string,Record<string,string>]>),
      colors:{
        normal:"#0581ce",
        white:"#fff",
        black:"#000"
      },
      
    },
    prefix:"m-",
    plugins: [
      addUtilPlugin()
    ],
  }
  
  