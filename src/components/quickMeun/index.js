import React from "react";
import { withRouter } from "react-router-dom"
// import "./quickmeun.css"
import "./quickmeun.styl"
class QuickMeun extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { go, push } = this.props.history;
        return (
            <div className="quickMeunItem">
                <i className="iconClass goBack"
                    onClick={() => { go(-1) }}
                    style={{ background: `#b2b2b2 url(${require('../../assets/image/icon_back.png')}) center center /  0.16rem 0.28rem no-repeat` }}></i>
                <i className="iconClass cart"
                    onClick={() => { push('/cart') }}
                    style={{ background: `#b2b2b2 url(${require('../../assets/image/icon_shopping.png')}) center center /  0.29rem 0.27rem no-repeat` }}></i>
                <i className="iconClass menu"
                    style={{ background: `#b2b2b2 url(${require('../../assets/image/icon_menu.png')}) center center /  0.26rem 0.06rem no-repeat` }}></i>
            </div>
        )
    }
}

export default withRouter(QuickMeun);