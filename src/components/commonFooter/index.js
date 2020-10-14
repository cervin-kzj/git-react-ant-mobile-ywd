import React from "react";
import { withRouter, NavLink } from "react-router-dom";
// import "./commonfooter.css";
import "./commonfooter.styl";

class CommonFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul className="footerBar">
                <li >
                    <NavLink
                        to='/index'
                        activeClassName="active indexSelectBg"
                        style={{
                            background: `url(${require('../../assets/image/tab_home_nor.png')}) center 0.14rem /  0.42rem 0.42rem no-repeat`
                        }}>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/category'
                        activeClassName="active categorySelectBg"
                        style={{
                            background: `url(${require('../../assets/image/tab_menu_nor.png')}) center 0.14rem /  0.42rem 0.42rem no-repeat`
                        }}>
                        <span>分类</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/cart'
                        activeClassName="active cartSelectBg"
                        style={{
                            background: `url(${require('../../assets/image/tab_shopping_nor.png')}) center 0.14rem /  0.42rem 0.42rem no-repeat`
                        }}>
                        <span>购物车</span>
                    </NavLink>
                </li>
                <li >
                    <NavLink
                        to='/mine'
                        activeClassName="active mineSelectBg"
                        style={{
                            background: `url(${require('../../assets/image/tab_me_nor.png')}) center 0.14rem /  0.42rem 0.42rem no-repeat`
                        }}>
                        <span>我的</span>
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default withRouter(CommonFooter)