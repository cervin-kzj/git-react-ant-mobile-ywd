import React from "react"
import CommonHeader from "../../components/commonHeader"
import "./register.css"
import { InputItem, Button, Checkbox } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;

class Register extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="registerWrap">
                <CommonHeader></CommonHeader>
                <div className="registerOutContainer">
                    <div className="registerInContainer">
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
                        <div className="verifyItem inputClass">
                            <div className="verifyItemIn">
                                <InputItem
                                    clear
                                    placeholder="请输入验证码"
                                    ref={el => this.autoFocusInst = el}
                                >验证码:</InputItem>
                            </div>
                            <span className="getVerify">点击获取</span>
                        </div>
                        <div className="forgetItem"></div>
                        <Button className="commonBtn">下一步</Button>
                        <div className="agreementItem">
                            <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                我已阅读并同意使用<a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>条款和隐私政策</a>
                            </AgreeItem>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;