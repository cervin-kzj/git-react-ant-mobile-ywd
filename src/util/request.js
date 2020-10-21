import axios from "axios"
import qs from "qs"

// 请求拦截器
axios.interceptors.request.use((res) => {
    console.log("请求拦截", res);
    if (res.method.toUpperCase() === "POST") {
        res.data = qs.stringify(res.data)
    }
    return res;
});

// 响应拦截器
axios.interceptors.response.use(res => {
    console.log("响应拦截", res);
    return res;
})

/**
 * 首页数据
 */
export const getIndexData = () => (
    axios({
        url: "getIndexData",
        method: "get",
        params: {}
    })
)

/**
 * 分类数据
 */
export const getClassify = () => {
    return axios({
        url: "getClassify",
        method: "get",
        params: {}
    })
}

/**
 * 登录
 * @param {*} phone 
 * @param {*} password 
 */
export const login = (phone, password) => {
    return axios({
        url: "login",
        method: "get",
        params: { phone, password }
    })
}

/**
 * 注册
 * @param {*} phone 
 * @param {*} password 
 */
export const register = (phone, password) => {
    return axios({
        url: "register",
        method: "post",
        data: { phone, password }
    })
}

/**
 * 商品详情
 * @param {*} pid 
 */
export const getDetails = pid => (
    axios({
        url: "getDetails",
        method: "get",
        params: { pid }
    })
)