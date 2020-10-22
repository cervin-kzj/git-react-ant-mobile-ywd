import React from "react";
import { connect } from "react-redux";
import { editIsCheckCartInfoAction, deleteCartInfoAction, editCartGoodsNumberInfoAction } from "../../store/modules/cart";
import { SwipeAction, Toast } from 'antd-mobile';
// import "./cartitem.css";
import "./cartitem.styl";

class GoodsItem extends React.Component {
    constructor(props) {
        super(props)
    }
    /**
     * 选择商品
     */
    is_Check() {
        this.props.editIsCheckCartInfo(this.props.item.goods_id)
    }
    /**
     * 删除购物车商品
     * @param {*} goods_id 
     */
    del_Goods(goods_id) {
        this.props.deleteCartInfo(goods_id)
    }
    /**
     * 
     * @param {*} goods_id 商品编号
     * @param {*} goods_number 购物车数量
     * @param {*} goods_total 商品库存
     * @param {*} type 类型
     */
    changeGoodsNumber(goods_id, goods_number, goods_total, type) {
        // console.log(goods_id, goods_number, goods_total, type)
        if (type == "minus") {
            if (goods_number == 1) {
                Toast.info('购买数量应大于1', 1);
            } else {
                this.props.editCartGoodsNumberInfo(goods_id, --goods_number, type)
            }
        }
        else if (type == "plus") {
            goods_number = goods_number + 1
            if (goods_number > goods_total) {
                goods_number = goods_total
                Toast.info('购买数量应小于等于商品库存数', 1);
            } else {
                // console.log("action+")
                this.props.editCartGoodsNumberInfo(goods_id, goods_number, type)
            }
        }
    }
    render() {
        let { goods_id, goods_name, goods_thumb, cost_price, goods_number, is_check, goods_total } = this.props.item;
        return (
            <SwipeAction
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                    {
                        text: '删除',
                        onPress: () => { this.del_Goods(goods_id) },
                        style: { backgroundColor: '#ff9900', color: 'white' },
                    },
                ]}
                onOpen={() => console.log('global open')}
                onClose={() => console.log('global close')}
            >
                <div className="item">
                    <div className="checkBox">
                        {/* <i></i> */}
                        <input type="checkbox" checked={is_check} onChange={() => { this.is_Check() }} />
                    </div>
                    <div className="itemInfo">
                        <div className="thumb">
                            <img src={goods_thumb} alt={goods_name} />
                        </div>
                        <div className="info">
                            <div className="title">
                                {goods_name}
                            </div>
                            <div className="cartNum">
                                <span className="minus" onClick={() => { this.changeGoodsNumber(goods_id, goods_number, goods_total, 'minus') }}>-</span>
                                <div className="text_wrap"><input type="text" value={goods_number} /></div>
                                <span className="plus" onClick={() => { this.changeGoodsNumber(goods_id, goods_number, goods_total, 'plus') }}>+</span>
                            </div>
                        </div>
                        <div className="price">
                            <span className="rmb">¥</span>
                            <span className="v">{cost_price}</span>
                        </div>
                    </div>
                </div>
            </SwipeAction>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editIsCheckCartInfo: (cartInfo) => {
            return dispatch(editIsCheckCartInfoAction(cartInfo))
        },
        deleteCartInfo: goodsId => dispatch(deleteCartInfoAction(goodsId)),
        editCartGoodsNumberInfo: (goods_id, goods_number, type) => {
            return dispatch(editCartGoodsNumberInfoAction(goods_id, goods_number, type))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodsItem);