/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/22
 */
export default class {
    /**
     * 去空格
     * @param str 字符串
     * @returns {string}
     */
    trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
}