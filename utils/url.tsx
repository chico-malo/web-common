/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/22
 */
export default class {
    /**
     * 获取url ？ 后的查询参数
     * @param name
     * @returns {string}
     */
    static getParams(name) {
        let reg = new RegExp(/(^|&)" + name + "=([^&]*)(&|$)/, "i");
        let r = decodeURI(window.location.search).substr(1).match(reg);
        if(r != null) return unescape(r[2]);
    }
}