/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/22
 */
export default class {
    /**
     * 深拷贝 转化成字符串的方法
     * @param obj 对象或者数组
     * @returns {any}
     */
    static clone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}