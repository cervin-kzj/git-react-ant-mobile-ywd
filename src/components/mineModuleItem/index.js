import React from "react";
import { withRouter, Link } from "react-router-dom";
// import "./minemoduleitem.css";
import "./minemoduleitem.styl";
class MineModuleItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
        };
    }
    render() {
        return (
            <div className="moduleItem mt13">
                <Link to="" className="titleBox">
                    我的订单<span className="more">查看全部订单</span>
                </Link>
                <ul className="ItemList">
                    <li style={{ background: `url(${require('../../assets/image/icon_boligation.png')}) center 0.45rem /  0.55rem 0.55rem no-repeat` }}>
                        待付款
                    </li>
                    <li style={{ background: `url(${require('../../assets/image/icon_boligation.png')}) center 0.45rem /  0.55rem 0.55rem no-repeat` }}>
                        待发货
                    </li>
                    <li style={{ background: `url(${require('../../assets/image/icon_boligation.png')}) center 0.45rem /  0.55rem 0.55rem no-repeat` }}>
                        待收货
                    </li>
                    <li style={{ background: `url(${require('../../assets/image/icon_boligation.png')}) center 0.45rem /  0.55rem 0.55rem no-repeat` }}>
                        待评价
                    </li>
                    <li style={{ background: `url(${require('../../assets/image/icon_boligation.png')}) center 0.45rem /  0.55rem 0.55rem no-repeat` }}>
                        退款/售后
                    </li>
                </ul>
            </div>
        )
    }
}

export default withRouter(MineModuleItem)