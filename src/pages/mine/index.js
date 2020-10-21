import React from "react"
import { connect } from "react-redux"
import { getIsLogin, getUserInfo, setIsLoginAction } from "../../store/modules/login"
import CommonHeader from "../../components/commonHeader"
import CommonFooter from "../../components/commonFooter"
import MineModuleItem from "../../components/mineModuleItem"
import MineQuickMenuItem from "../../components/mineQuickMenuItem"
import MineLoginOutMenuItem from "../../components/mineLoginOutMenuItem"
import MineAvatarBox from "../../components/mineAvatarBox"
// import "./mine.css"
import "./mine.styl"

class Mine extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="mineWrap">
                <CommonHeader></CommonHeader>
                <div className="mineContainer">
                    <MineAvatarBox userInfo={this.props.isLogin ? this.props.userInfo : null}></MineAvatarBox>
                    <MineQuickMenuItem className="pt"></MineQuickMenuItem>
                    <MineModuleItem></MineModuleItem>
                    <MineQuickMenuItem className="mt13"></MineQuickMenuItem>
                    {
                        this.props.isLogin ? <MineLoginOutMenuItem className="mt13"></MineLoginOutMenuItem> : null
                    }
                </div>
                <CommonFooter></CommonFooter>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLogin: getIsLogin(state),
        userInfo: getUserInfo(state)
    }
}
const mapDispatchToProps = dispatch => (
    {
        isLoginAction: () => {
            dispatch(setIsLoginAction(false));
        }
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Mine);