import React from "react";
import { withRouter, Link } from "react-router-dom";
// import "./minequickmenuitem.css";
import "./minequickmenuitem.styl";
class MineQuickMenuItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const propsClass = `mineQuickMenuItem ${this.props.className}`
        return (
            <ul className={propsClass}>
                <li>
                    <Link
                        style={{ background: `url(${require('../../assets/image/keep.png')}) 0.35rem center / 0.38rem 0.36rem no-repeat` }}
                        to=""
                    >
                        收货地址管理
                            </Link>
                </li>
            </ul>
        )
    }
}

export default withRouter(MineQuickMenuItem)