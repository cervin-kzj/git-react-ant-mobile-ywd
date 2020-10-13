import React from "react";
import { withRouter } from "react-router-dom";
import "./commonfooter.css";
import { TabBar } from 'antd-mobile';
class CommonFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'categoryTab',
            hidden: false,
        };
    }
    render() {
        return (
            <div className="footerBar">
                <TabBar
                    unselectedTintColor="#333333"
                    tintColor="#ff9900"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="bottom"
                >
                    <TabBar.Item
                        title="首页"
                        key="Index"
                        icon={<div
                            className="iconClass"
                            style={{
                                background: `url(${require('../../assets/image/tab_home_nor.png')}) center center /  0.42rem 0.42rem no-repeat`
                            }}
                        />
                        }
                        selectedIcon={<div
                            className="iconClass"
                            style={{
                                background: `url(${require('../../assets/image/tab_home_hig.png')}) center center /  0.42rem 0.42rem no-repeat`
                            }}
                        />
                        }
                        selected={this.state.selectedTab === 'indexTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'indexTab',
                            });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                className="iconClass"
                                style={{
                                    background: `url(${require('../../assets/image/tab_menu_nor.png')}) center center /  0.42rem 0.42rem no-repeat`
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                className="iconClass"
                                style={{
                                    background: `url(${require('../../assets/image/tab_menu_hig.png')}) center center /  0.42rem 0.42rem no-repeat`
                                }}
                            />
                        }
                        title="分类"
                        key="Category"
                        selected={this.state.selectedTab === 'categoryTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'categoryTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                className="iconClass"
                                style={{
                                    background: `url(${require('../../assets/image/tab_shopping_nor.png')}) center center /  0.42rem 0.42rem no-repeat`
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                className="iconClass"
                                style={{
                                    background: `url(${require('../../assets/image/tab_shopping_hig.png')}) center center /  0.42rem 0.42rem no-repeat`
                                }}
                            />
                        }
                        title="购物车"
                        key="Cart"
                        selected={this.state.selectedTab === 'cartTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'cartTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                className="iconClass"
                                style={{
                                    background: `url(${require('../../assets/image/tab_me_nor.png')}) center center /  0.42rem 0.42rem no-repeat`
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                className="iconClass"
                                style={{
                                    background: `url(${require('../../assets/image/tab_me_hig.png')}) center center /  0.42rem 0.42rem no-repeat`
                                }}
                            />
                        }
                        title="我的"
                        key="Mine"
                        selected={this.state.selectedTab === 'mineTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mineTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default withRouter(CommonFooter)