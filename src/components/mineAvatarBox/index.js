import React from "react";
import { withRouter } from "react-router-dom";
import "./mineavatarbox.css";

class MineAvatarBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="avatarBox">
                <div>
                    <span className="avatar unLogin"></span>
                    {/* <img src={require("../../assets/image/avatar.jpg")} className="avatar" /> */}
                </div>
                <span className="nickName">点击登录</span>
            </div>
        )
    }
}

export default withRouter(MineAvatarBox)