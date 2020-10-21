import React from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux"
import { setIsLoginAction, setUserInfoAction } from "../../store/modules/login"
// import "./minequickmenuitem.css";
import "./mineloginoutmenuitem.styl";
import { Modal } from 'antd-mobile';
const alert = Modal.alert;
class MineLoginOutMenuItem extends React.Component {
    constructor(props) {
        super(props)
    }
    loginOut() {
        alert('', '确认退出洋网店', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
                text: '确定',
                onPress: () =>
                    new Promise((resolve) => {
                        this.props.isLoginAction(false);
                        this.props.userInfoAction({});
                        resolve()
                    }),
            },
        ])
    }
    render() {
        const propsClass = `mineQuickMenuItem ${this.props.className}`
        return (
            <ul className={propsClass}>
                <li>
                    <Link
                        style={{ background: `url(${require('../../assets/image/keep.png')}) 0.35rem center / 0.38rem 0.36rem no-repeat` }}
                        to="#"
                        onClick={this.loginOut.bind(this)}
                    >
                        退出登录
                    </Link>
                </li>
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isLoginAction: (bool) => {
            return dispatch(setIsLoginAction(bool))
        },
        userInfoAction: (userInfo) => {
            return dispatch(setUserInfoAction(userInfo))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MineLoginOutMenuItem))