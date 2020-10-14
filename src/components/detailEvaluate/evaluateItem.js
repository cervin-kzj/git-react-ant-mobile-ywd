import React from "react";
// import "./evaluateitem.css";
import "./evaluateitem.styl";
class EvaluateItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li className="item">
                <div className="itemTop clearfix">
                    <span className="nickName">月色花香</span>
                    <span className="addTime">2015-10-03 21:47:13</span>
                </div>
                <div className="buyerPic">
                    <img src={require('../../assets/image/buyer.jpg')} />
                    <img src={require('../../assets/image/buyer.jpg')} />
                    <img src={require('../../assets/image/buyer.jpg')} />
                    <img src={require('../../assets/image/buyer.jpg')} />
                </div>
                <p className="buyerContent">已经开始喝第二阶段的奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉奶粉了，会继续支持德贝</p>
                <p className="sellerContent">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给您带来最极致的服务</p>
            </li>
        )
    }
}

export default EvaluateItem;
