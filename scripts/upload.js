let Client = require('ssh2-sftp-client');
const path = require("path")
const fs = require("fs");
const { Log } = require('./util');

exports.uploadShell = async function (project,mode){
    return new Promise(async (resolve,reject)=>{
        const filePath = path.resolve(__dirname,`../projects/${project}/shellConfig.js`)
        let defaultLocalPath = path.resolve(__dirname,`../${project}/${project}`)
        let shellConfig = require(filePath)
        shellConfig = shellConfig[mode]
        console.log(defaultLocalPath)
        if(!shellConfig.host || !shellConfig.password){
            
            return reject("请配置shell信息")
        }
        let client = new Client();
        await client.connect(shellConfig)
        
        await client.uploadDir(shellConfig.localPath || defaultLocalPath, shellConfig.remotePath)
        
            
        client.end()
        return resolve()
    })
}
