import React from "react"
import { connect } from "react-redux"
import { getDetail, requestDetailsAction } from "../../store/modules/detail"
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
        super(props);
        this.state = {
            isShow: false,
            type: ""
        }
    }
    componentWillMount() {
        this.props.detailsAction(this.props.match.params.id)
    }
    skumain(bool, type) {
        this.setState({
            isShow: false
        }, () => {
            this.setState({
                isShow: bool,
                type: type
            }, () => {
                console.log('isShow', this.state.isShow)
            })
        })
    }
    render() {
        if (this.props.detail.buySelect != undefined) {
            let arr = this.props.detail.buySelect;
            arr.forEach((item, index) => {
                arr[index].isActive = 0;
            })
            this.props.detail.buySelect = arr;
        }
        let { swiperImgArr, describe, name, original_price, reduct_price, shopDes, buyerReviews, allowance, isFreeShip } = this.props.detail;
        return (
            <div className="detailWrap">
                <Detailbanner item={swiperImgArr}></Detailbanner>
                <div className="infoBox">
                    <div className="item">
                        <h2 className="title">{name}</h2>
                        <div className="collection">
                            <img src={require('../../assets/image/collection.png')} />
                            <h3>收藏</h3>
                        </div>
                    </div>
                    <div className="item" style={{ marginTop: '0.1rem' }}>
                        <div className="price">
                            <span className="item-act-price">
                                <span className="rmb">¥</span>{reduct_price}
                            </span>
                            <span className="item-tag-price">
                                <span className="rmb">¥</span>{original_price}
                            </span>
                        </div>
                        <div className="tag-item">
                            <ul className="favourable clearfix">
                                <li>{parseFloat(allowance * 10).toFixed(1)}折</li>
                                {
                                    isFreeShip == true ? <li>包邮</li> : null
                                }
                            </ul>
                            <ul className="tag clearfix">
                                {
                                    describe != undefined
                                        ?
                                        describe.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            )
                                        })
                                        :
                                        null
                                }
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
                        <DetailInfo item={shopDes}></DetailInfo>
                        <Detailevaluate item={buyerReviews}></Detailevaluate>
                    </Tabs>
                </div>
                <QuickMeun></QuickMeun>
                <DetailSku skumain={(bool, type) => { this.skumain(bool, type) }} isShow={this.state.isShow} type={this.state.type} detail={this.props.detail}></DetailSku>
                <DetailFooter skumain={(bool, type) => { this.skumain(bool, type) }} isShow={this.state.isShow}></DetailFooter>
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

const mapStateToProps = (state) => {
    return {
        detail: getDetail(state)
    }
}

const mapDispatchToProps = dispatch => (
    {
        detailsAction: pid => (
            dispatch(requestDetailsAction(pid))
        )
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Detail);