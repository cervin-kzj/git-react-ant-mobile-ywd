import React from "react";
import { withRouter } from "react-router-dom";
// import "./mineavatarbox.css";
import "./mineavatarbox.styl";
class MineAvatarBox extends React.Component {
    constructor(props) {
        super(props)
    }
    login() {
        this.props.history.push('/login');
    }
    componentWillMount() {
        // console.log(this.props);
    }
    render() {
        return (
            <div className="avatarBox">
                <div>
                    {
                        this.props.userInfo != null
                            ?
                            <img src={require("../../assets/image/avatar.jpg")} className="avatar" />
                            :
                            <span className="avatar unLogin"></span>
                    }
                </div>
                {
                    this.props.userInfo != null
                        ?
                        <span className="nickName">{this.props.userInfo.phone}</span>
                        :
                        <span className="nickName" onClick={() => { this.login() }}>点击登录</span>
                }

            </div>
        )
    }
}

export default withRouter(MineAvatarBox);