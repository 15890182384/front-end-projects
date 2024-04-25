const { spawn, exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const iconv = require('iconv-lite');
exports.runOrder = function (options, rejectStatus = false) {
    let option = options.options || {
        cwd: path.resolve(__dirname, "../"),
        shell: true,
    };
    let orderMsg = `${options.order} ${options.args.join(" ")}`;
    return new Promise((resolve, reject) => {
        const ls = spawn(options.order, options.args, option);
        let stoutData = Buffer.alloc(0);
        let stderrData = Buffer.alloc(0);
        ls.stdout.on("data", (data) => {
            stoutData = Buffer.concat([stoutData, data]);
            Log.access(data.toString());
        });

        ls.stderr.on("data", (data) => {
            stderrData = Buffer.concat([stderrData, data]);
            Log.error(data.toString());
        });
        ls.on("exit", (code) => {
            if (code === 0) {
                resolve();
            } else {
                Log.error(`${orderMsg}执行失败`);
                const strGBK = iconv.decode(stderrData, 'gbk');
                Log.warining(`${strGBK}`);
                if (rejectStatus) {
                    reject()
                }

            }
        });
    });

}
class Log {
    static access(message) {
        console.log(`${message}`);
    }
    static error(message) {
        console.log("\x1B[31m%s\x1B[0m", `${message}`);
    }
    static warining(message) {
        console.log("\x1B[36m%s\x1B[0m", `${message}`);
    }
}
exports.Log = Log