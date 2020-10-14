import React from "react"
import { Tabs, } from 'antd-mobile';
import CommonSearch from "../../components/commonSearch"
import CommonFooter from "../../components/commonFooter"
// import "./category.css"
import "./category.styl";

const tabs = [
    { title: '母婴专区' },
    { title: '美妆护肤' },
    { title: '家居生活' },
    { title: '食品营养' },
    { title: '全球直购' },
];

class Category extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="categoryWrap">
                <CommonSearch></CommonSearch>
                <div className="categoryContainer">
                    <Tabs tabs={tabs}
                        initialPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        tabBarActiveTextColor="#ff9900"
                        tabBarInactiveTextColor="#333333"
                        tabBarBackgroundColor="#fafafa"
                        tabBarTextStyle={{ fontSize: '0.26rem' }}
                    >
                        <div className="categoryItem">
                            <ul>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="categoryItem">
                            <ul>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="categoryItem">
                            <ul>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="categoryItem">
                            <ul>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                            </ul>
                        </div>

                        <div className="categoryItem">
                            <ul>
                                <li className="item">
                                    <div className="cateThumb">
                                        <img src={require('../../assets/image/thumb.jpg')} alt="" />
                                    </div>
                                    <h3 className="cateTitle">奶粉</h3>
                                </li>
                            </ul>
                        </div>
                    </Tabs>
                </div>
                <CommonFooter></CommonFooter>
            </div >
        )
    }
}

export default Category;