
class Factory {
    /**
     * 是否是对象
     * @param obj  查询对象
     */
    static isObject(obj: object): boolean {
        return Object.prototype.toString.call(obj) === '[object Object]'
    }

    /**
     * 深拷贝 转化成字符串的方法
     * @param obj 对象或者数组
     * @returns {any}
     */
    static clone(obj: object): string {
        return JSON.parse(JSON.stringify(obj))
    }

}

export const DataFactory = new Factory()
