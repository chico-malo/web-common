/**
 * 深拷贝 转化成字符串的方法
 * @param obj 对象或者数组
 * @returns {any}
 */
export const objectClone = (obj: object): string => {
    return JSON.parse(JSON.stringify(obj))
}