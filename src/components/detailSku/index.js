import React from "react";
import { connect } from "react-redux";
import { addCartInfoAction, getCartInfo } from "../../store/modules/cart"
import { getUserInfo } from "../../store/modules/login"
import { Toast } from 'antd-mobile';
// import "./detailsku.css"
import "./detailsku.styl"
class DetailSku extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsNumber: 1
        }
    }
    sku_choose(idx, indexs) {
        let arr = this.props.detail.buySelect;
        arr.forEach((item, index) => {
            if (index == idx) {
                arr[index].isActive = indexs;
            }
        })
        this.props.detail.buySelect = arr;
        this.setState({});
    }
    changeGoodsNumber(type) {
        // console.log(this.props.detail.total);
        if (type == "minus") {
            if (this.state.goodsNumber == 1) {
                Toast.info('购买数量应大于1', 1);
            } else {
                this.setState({
                    goodsNumber: this.state.goodsNumber - 1
                })
            }
        }
        else if (type == "plus") {
            this.setState({
                goodsNumber: this.state.goodsNumber + 1
            }, () => {
                if (this.state.goodsNumber > this.props.detail.total) {
                    this.setState({
                        goodsNumber: this.props.detail.total
                    }, () => {
                        Toast.info('购买数量应小于等于商品库存数', 1);
                    })
                }
            })

        }
    }
    addCart() {
        // console.log(this.props.detail);
        let { pid, name, total, original_price, reduct_price, swiperImgArr } = this.props.detail;
        // console.log(this.props.type);
        // this.props.skumain(false)
        let info = {
            user_phone: this.props.userInfo.phone,
            goods_id: pid,
            goods_name: name,
            goods_thumb: swiperImgArr[0],
            goods_attr: ["2L", '3岁以下'],
            original_price: original_price,
            reduct_price: reduct_price,
            goods_number: this.state.goodsNumber,
            goods_total: total,
            shop_id: 99,
            shop_name: "杭州保税区",
            add_time: new Date().getTime(),
            is_check: true,
            cost_price: parseFloat(this.state.goodsNumber * reduct_price).toFixed(2)
        };
        this.props.addCart(info);
    }
    render() {
        let { total, reduct_price, swiperImgArr, buySelect } = this.props.detail;
        let isShow = this.props.isShow;
        let display = "";
        if (isShow == true) {
            display = "block";
        }
        else {
            display = "none";
        }
        return (
            <div className="detail_sku_v1_main" style={{ display }}>
                <div className="main">
                    <div className="head">
                        <div className="avt">
                            {
                                swiperImgArr != undefined ? <img src={swiperImgArr[0]} alt="" /> : null
                            }
                        </div>
                        <div className="r">
                            <p className="price">¥{reduct_price}</p>
                            <p className="goodsnumber">库存{total}件</p>
                            <i className="check_attr">请选择商品属性</i>
                        </div>
                        <i className="close" onClick={() => { this.props.skumain(false) }}><img src={require("../../assets/image/close.png")} alt="" /></i>
                    </div>
                    <div className="body">
                        <div className="count_choose clearfix">
                            <div className="num_wrap_v2 clearfix">
                                <span className="minus" onClick={() => { this.changeGoodsNumber("minus") }}>-</span>
                                <div className="text_wrap"><input type="text" value={this.state.goodsNumber} /></div>
                                <span className="plus" onClick={() => { this.changeGoodsNumber("plus") }}>+</span>
                            </div>
                            <p className="count">购买数量</p>
                        </div>
                        <div className="popupSkuArea">
                            {
                                buySelect != undefined
                                    ?
                                    buySelect.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="sku_kind">{item.name}</div>
                                                <div className="sku_choose">
                                                    {
                                                        item.list.map((items, indexs) => {
                                                            let isActive = "";
                                                            if (item.isActive == indexs) {
                                                                isActive = "active";
                                                            } else {
                                                                isActive = "";
                                                            }
                                                            return (
                                                                <span className={`item ${isActive}`} key={items} onClick={() => { this.sku_choose(index, indexs) }}>
                                                                    {items}
                                                                </span>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    null
                            }
                        </div>
                        <div className="btn">
                            <button onClick={() => { this.addCart() }}>确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cartInfo: getCartInfo(state),
        userInfo: getUserInfo(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCart: info => dispatch(addCartInfoAction(info))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailSku);