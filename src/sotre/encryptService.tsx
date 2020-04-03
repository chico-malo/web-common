/*
 * @Author: yyao
 * @Date: 2020-04-03 17:01:51
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-03 17:16:48
 * @Description: 加密算法
 */

// 加密
export function compileStr(code: any) {
    var c = String.fromCharCode(code.charCodeAt(0) + code.length)
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
    }
    return escape(c)
}

// 解密
export function uncompileStr(data: any) {
    let code = unescape(data)
    var c = String.fromCharCode(code.charCodeAt(0) - code.length)
    for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1))
    }
    return c
}
