import React from "react";
import { FormatTimestamp } from "../../util/Time"
// import "./evaluateitem.css";
import "./evaluateitem.styl";
class EvaluateItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { buyerName, adminReviews, postDescribe, postImg, createTime } = this.props.item;
        return (
            <li className="item">
                <div className="itemTop clearfix">
                    <span className="nickName">{buyerName}</span>
                    <span className="addTime">{FormatTimestamp(createTime)}</span>
                </div>
                <div className="buyerPic">
                    {
                        postImg.map((item, index) => {
                            return (
                                <img src={item} key={index} />
                            )
                        })
                    }
                </div>
                <p className="buyerContent">{postDescribe}</p>
                <p className="sellerContent">管理员：{adminReviews}</p>
            </li>
        )
    }
}

export default EvaluateItem;
