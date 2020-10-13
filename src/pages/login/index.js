import React from "react"
import { Link } from "react-router-dom"
import CommonHeader from "../../components/commonHeader"
import "./login.css"
import { InputItem, Button } from 'antd-mobile';

class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="loginWrap">
                <CommonHeader></CommonHeader>
                <div className="loginOutContainer">
                    <div className="loginInContainer">
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                            type="phone"
                            ref={el => this.autoFocusInst = el}
                            className="inputClass"
                        >手机号:</InputItem>
                        <InputItem
                            clear
                            placeholder="请输入密码"
                            type="password"
                            ref={el => this.autoFocusInst = el}
                            className="inputClass"
                        >密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <div className="forgetItem">
                            <Link to="">忘记密码</Link>
                        </div>
                        <Button className="commonBtn">登录</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;