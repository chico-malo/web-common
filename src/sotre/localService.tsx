import { compileStr, uncompileStr } from './encryptService'

/*
 * @Author: yyao
 * @Date: 2020-04-03 17:01:11
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-03 17:56:27
 * @Description: 本地缓存方法
 */
export interface Storage {
    // 缓存key名
    key: string
    // 需要处理的数据
    data: any
}

// set方法
export const setStorage = (storage: Storage) => {
    const { key, data } = storage
    // 转译
    let jsonString = JSON.stringify(data)
    // 加密
    let complite_string = compileStr(jsonString)
    // 存储
    localStorage.setItem(key, complite_string)
}

// get方法
export const getStorage = (key: string) => {
    // 获取缓存
    let letlocalString = localStorage.getItem(key)
    if (letlocalString) {
        // 解密
        let compliteString = uncompileStr(letlocalString)
        // 转译
        return JSON.parse(compliteString)
    }
    return false
}
