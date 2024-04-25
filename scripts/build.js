const { Command } = require("commander");
const path = require("path");
const fs = require("fs");
const readline = require('readline');
const { Log, runOrder } = require("./util");
const program = new Command();
const { uploadShell } = require("./upload")
let mode, project, commandOptions, projectDir;
program
    .command("build")
    .argument("<project-name>", "打包的项目名称")
    .argument("mode", "serve,test")
    .description("项目打包")
    .option("-u", "是否上传")
    .action((projectName, modestr, options) => {

        mode = modestr;
        project = projectName;
        commandOptions = options;
        projectDir = path.resolve(__dirname, `../projects/${projectName}`);
        if (modestr !== "serve" && modestr !== "test") {
            Log.error("mode只能为serve或test");
            return;
        }
        build().then(() => {
            if (options.u) {
                uploadShell(project,mode).then(()=>{
                    Log.access("上传成功")
                }).catch(e=>{
                    Log.error("上传项目失败")
                    Log.error(e)
                })
            }
        })
    }).parse(process.argv);
function build() {
    return new Promise((resolve, reject) => {
        let str = `VUE_APP_NOT_SECRET_CODE=${mode}`;
        setDep(false).then(() => {
            runOrder({
                order: "vite",
                args: ["build"],
                options: {
                    cwd: projectDir,
                    shell: true,
                },
            })
                .then(() => {
                    setDep(true);
                    Log.warining("middle打包完成");
                    resolve();
                })
                .catch((e) => {
                    console.log(e);
                });
        });
    });
}


function setDep(isReset = false, project = "middle") {
    return new Promise((resolve, reject) => {
        if (isReset) {
            resolve(
                Promise.all([
                    readWite(
                        path.resolve(projectDir, "./vite.config.ts"),
                        /const\s?env:EnvMode\s?=\s?.+/,
                        `const env:EnvMode = "development"`
                    ),
                ])
            );
        } else {
            resolve(
                Promise.all([
                    readWite(
                        path.resolve(projectDir, "./vite.config.ts"),
                        /const\s?env:EnvMode\s?=\s?.+/,
                        `const env:EnvMode = "${mode}"`
                    ),
                ])
            );
        }
    });
}


function readWite(file, reg, str) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (!err) {
                let content = data.replace(reg, str);
                fs.writeFile(file, content, (err, data) => {
                    if (!err) {
                        resolve();
                    } else {
                        reject;
                    }
                });
            }
        });
    });
}