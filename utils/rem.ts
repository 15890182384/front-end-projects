let size = 0

function setRem() {
    let res = 375
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let htmlDom = document.getElementsByTagName('html')[0];
    if (htmlWidth > 500) htmlWidth = 500
    size = (htmlWidth / res) * 100
    htmlDom.style.fontSize = size + 'px';
}

export function pxToRem(num:number) {
    if (!num) return 0
    let width = document.documentElement.clientWidth
    if (width > 500) width = 500
    return num * width / 375
}

export function remToPx(num:number) {
    if (!num) return 0
    let width = document.documentElement.clientWidth
    if (width > 500) width = 500
    return num * (100 * width / 375)
}

setRem();

window.onresize = function () {
    setRem()
}
