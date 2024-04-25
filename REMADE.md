--- action      服务器请求action 
        createServe 创建axios实例的函数  有需要在请求头添加token或者验证等可以在此处理
        xxxService  某个服务的对应实例创建 
--- api         服务器接口
        xxxApi      某个服务对应的api接口
--- css         公共css文件
--- components  公用组件
--- assets      公共静态资源
--- store       公共状态管理(分为子项目和父项目)
--- config      全局配置 所有公共配置的包含(babel,vite,tailwind等公共配置都可存放在此下)
--- lib         自己开发的库
--- projects    子项目
        models 存放第三方库的定义补充 放在这里的目的是匹配ts的查找规则
        xxx    项目名称
            src 源代码目录
                assets 静态资源目录
                components 组件目录
                config 配置目录
                router router目录
                store  私有store目录
                utils  工具库
                views  页面库
            types 项目中所需的非公共类型定义
            shellConfig.js shell配置  方便打包上传
            tsconfig.json  项目私有ts配置,配置ts包含文件等
            vite.config.ts 项目脚手架配置
            patches 源码补丁文件
--- scripts     命令行
--- types       类型库
--- utils       公共工具类
--- common.json 公共ts配置
--- .gitgnore   git忽略文件 
### 下载  yarn install  下载所有项目
### 运行  yarn run dev:xxx 项目名  运行指定项目
### 介绍
整个项目使用vite+tsx 开发,因为是针对新项目.所以不使用qiankun.不考虑ssr场景.
主要对应场景为前端多项目开发自动化,
一个公司 多个项目时的通用库,请求,和更多的通用配置处理.
其他的和正常项目无异