import React from "react";
import { withRouter } from "react-router-dom";
// import "./commonheader.css";
import "./commonheader.styl";
import { NavBar } from 'antd-mobile';
import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1834329_n0rfj4rsp2t.js',
});
class CommonHeader extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <NavBar
                className="navBar"
                mode="light"
                icon={<IconFont type="icon-fanhui" className="iconClass" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    "文字",
                ]}
            >NavBar</NavBar>
        )
    }
}

export default withRouter(CommonHeader)