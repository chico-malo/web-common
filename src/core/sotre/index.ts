/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yyao(873241789@qq.com)
 * date: 2020-05-25
 * 加密
 */

export class LocalStorageService {
    // 加密
    static compileStr(code: any) {
        let c = String.fromCharCode(code.charCodeAt(0) + code.length)
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
        }
        return escape(c)
    }

    // 解密
    static unCompileStr(code: any) {
        code = unescape(code)
        let c = String.fromCharCode(code.charCodeAt(0) - code.length)
        for (let i = 1; i < code.length; i++) {
            c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1))
        }
        return c
    }

    // set方法
    static setStorage(key: string, data: any) {
        const defaultString: any = JSON.stringify(data)
        const defaultCompile: any = this.compileStr(defaultString)
        localStorage.setItem(key, defaultCompile)
    };

    // get方法
    static getStorage(key: string): boolean | any {
        const defaultString: any = localStorage.getItem(key)
        if (defaultString) {
            const defaultUnCompile = this.unCompileStr(defaultString)
            return JSON.parse(defaultUnCompile)
        }
        return false
    };
}

