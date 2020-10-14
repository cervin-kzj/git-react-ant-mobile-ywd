import React from "react"
// import "./detailfooter.css";
import "./detailfooter.styl";
class DetailFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="detailFooter">
                <div className="totalBox">
                    <div className="total">
                        <span className="zj">总价:</span>
                        <span className="rmb">¥</span>
                        <span className="je">88.00</span>
                    </div>
                </div>
                <ul className="item">
                    <li className="addCart">加入购物车</li>
                    <li className="buyNow">立即购买</li>
                </ul>
            </div>
        )
    }
}

export default DetailFooter;