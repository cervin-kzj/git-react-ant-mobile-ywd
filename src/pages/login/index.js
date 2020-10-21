import React from "react"
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { getIsLogin, requestLoginAction } from "../../store/modules/login"
import CommonHeader from "../../components/commonHeader"
// import "./login.css"
import "./login.styl"
import { InputItem, Button, Toast } from 'antd-mobile';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            user: {
                phone: "",
                password: ""
            }
        }
        if (this.props.isLogin == true) {
            this.props.history.go(-1);
        }
    }
    onChange = (type, value) => {
        if (type == "phone") {
            if (value.replace(/\s/g, '').length < 11) {
                this.setState({
                    hasError: true,
                });
            }
            else {
                this.setState({
                    user: {
                        phone: value
                    }
                }, () => {
                })
            }
        }
        else if (type == "password") {
            this.setState({
                user: {
                    ...this.state.user,
                    password: value
                }
            }, () => {
            })
        }
    }
    loginBtn() {
        let { phone, password } = this.state.user;
        this.setState({
            user: {
                ...this.state.user,
                phone: phone.replace(/\s+/g, ""),
            }
        }, () => {
            if (phone == '' || phone == undefined) {
                Toast.info('请输入正确格式的手机号', 1);
                return;
            }
            else if (password == '' || password == undefined) {
                Toast.info('密码不能为空', 1);
                return;
            }
            else {
                this.props.requestLogin(this.state.user)
            }
        });
    }
    render() {
        return (
            <div className="loginWrap">
                {
                    this.props.isLogin == true ? <Redirect to='#'></Redirect> : null
                }
                <CommonHeader></CommonHeader>
                <div className="loginOutContainer">
                    <div className="loginInContainer">
                        <InputItem
                            clear
                            placeholder="请输入手机号"
                            type="phone"
                            ref={el => this.autoFocusInst = el}
                            className="inputClass"
                            onChange={this.onChange.bind(this, 'phone')}
                        // value={phone}
                        >手机号:</InputItem>
                        <InputItem
                            clear
                            placeholder="请输入密码"
                            type="password"
                            ref={el => this.autoFocusInst = el}
                            className="inputClass"
                            onChange={this.onChange.bind(this, 'password')}
                        // value={password}
                        >密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <div className="forgetItem">
                            <Link to="#">忘记密码</Link>
                        </div>
                        <Button className="commonBtn" onClick={this.loginBtn.bind(this)}>登录</Button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: getIsLogin(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestLogin: (user) => {
            dispatch(requestLoginAction(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);