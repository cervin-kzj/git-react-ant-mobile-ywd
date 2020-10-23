import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { getIsLogin, getUserInfo } from "../../store/modules/login"
// import "./detailfooter.css";
import "./detailfooter.styl";
class DetailFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        /**
         * 未登录跳登录页
         * 
         * 无商品属性 点加入购物车 加入成功
         *           点加入购物车 弹窗 加入成功
         * 
         * 有商品属性 点加入购物车 弹窗 加入成功
         *           点立即购物买 弹窗 跳转购物车页 结算所有商品
         */
        return (
            <div className="detailFooter">
                <div className="totalBox">
                    <div className="total">
                        {/* <span className="zj">总价:</span> */}
                        {/* <span className="rmb">¥</span> */}
                        {/* <span className="je">88.00</span> */}
                    </div>
                </div>
                <ul className="item">
                    <li className="addCart" onClick={() => { this.addCart() }}>加入购物车</li>
                    <li className="buyNow" onClick={() => { this.buyNow() }}>立即购买</li>
                </ul>
            </div>
        )
    }
    addCart() {
        if (!this.props.isLogin) {
            this.props.history.push('/login');
        }
        else {
            this.props.skumain(!this.props.isShow, "addCart");
        }
    }
    buyNow() {
        if (!this.props.isLogin) {
            this.props.history.push('/login');
        }
        else {
            this.props.skumain(!this.props.isShow, "buyNow");
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: getIsLogin(state),
        userInfo: getUserInfo(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailFooter));