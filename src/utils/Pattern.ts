
const pattern = {
    /**
     * 邮箱
     */
    email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
    /**
     * 手机号
     */
    phone: /^[1][3,4,5,7,8][0-9]{9}$/
}

export default pattern;