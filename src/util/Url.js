import React from "react";
import querystring from "querystring"

export class Url extends React.Component {
    constructor(props) {
        super(props)
    }
    /**
     * 解析url地址中的参数
     * @param {*} url 
     */
    getParams(url) {
        let obj = {};
        let formatStr = url.slice(1);

        let formatArr = formatStr.split("&");
        formatArr.forEach((item, index) => {
            let Arr = item.split("=");
            obj[Arr[0]] = Arr[1];
        });

        // let obj=querystring.parse(formatStr);

        console.log(obj);
        return obj;
    }
}

