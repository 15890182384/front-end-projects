const path = require("path")
module.exports = {
    test:{
        host: '',
        port: 22,
        username: '',
        remotePath:"/opt/nginx/html/",
        password: '', 
        localPath:path.resolve(__dirname,"./middle")
    },
    serve:{
        host: '',
        port: 22,
        username: '',
        remotePath:"/usr/share/nginx/html",
        password: '', 
        localPath:path.resolve(__dirname,"./middle")
    }
}