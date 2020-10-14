import React from "react"
// import "./detail.css"
import "./detail.styl"
import { Tabs, Badge } from 'antd-mobile';
import $ from "jquery"
import Detailevaluate from "../../components/detailEvaluate"
import Detailbanner from "../../components/detailBanner"
import DetailInfo from "../../components/detailInfo"
import QuickMeun from "../../components/quickMeun"
import DetailFooter from "../../components/detailFooter"
import DetailSku from "../../components/detailSku"

const tabs = [
    { title: <Badge>商品详情</Badge> },
    { title: <Badge>买家口碑</Badge> }
];

class Detail extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div className="detailWrap">
                <Detailbanner></Detailbanner>
                <div className="infoBox">
                    <div className="item">
                        <h2 className="title">Aptamil 德国爱他美 婴儿奶粉 2段800/克3罐装 6-10月</h2>
                        <div className="collection">
                            <img src={require('../../assets/image/collection.png')} />
                            <h3>收藏</h3>
                        </div>
                    </div>
                    <div className="item" style={{ marginTop: '0.1rem' }}>
                        <div className="price">
                            <span className="item-act-price">
                                <span className="rmb">¥</span>445.00
                            </span>
                            <span className="item-tag-price">
                                <span className="rmb">¥</span>998.00
                            </span>
                        </div>
                        <div className="tag-item">
                            <ul className="favourable clearfix">
                                <li>6.5折</li>
                                <li>包邮</li>
                            </ul>
                            <ul className="tag clearfix">
                                <li>正品货源</li>
                                <li>一件代发</li>
                                <li>全球直邮</li>
                                <li>售后无忧</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="infoContainer">
                    <Tabs tabs={tabs}
                        initialPage={1}
                        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <DetailInfo></DetailInfo>
                        <Detailevaluate></Detailevaluate>
                    </Tabs>
                </div>
                <QuickMeun></QuickMeun>
                <DetailSku></DetailSku>
                <DetailFooter></DetailFooter>
            </div >
        )
    }

    componentDidMount() {
        // let eleHeight = parseInt($(".am-tabs-default-bar-tab").css('height'));
        let eleHeight = parseInt(document.getElementsByClassName("am-tabs-default-bar-tab")[0].clientHeight);
        window.onscroll = () => {
            if (parseInt(document.getElementsByClassName("infoContainer")[0].getBoundingClientRect().top) <= eleHeight) {
                $(".am-tabs-tab-bar-wrap").css({
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 1,
                });
            }
            else if (parseInt(document.getElementsByClassName("infoContainer")[0].getBoundingClientRect().top) > eleHeight) {
                $(".am-tabs-tab-bar-wrap").css({});
                $(".am-tabs-tab-bar-wrap").css({
                    position: 'static',
                });
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
    }
}

export default Detail;