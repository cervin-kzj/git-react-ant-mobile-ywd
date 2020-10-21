import React from "react";
import { connect } from "react-redux";
import { editIsCheckCartInfoAction, deleteCartInfoAction } from "../../store/modules/cart";
import { SwipeAction } from 'antd-mobile';
// import "./cartitem.css";
import "./cartitem.styl";

class GoodsItem extends React.Component {
    constructor(props) {
        super(props)
    }
    is_Check() {
        this.props.editIsCheckCartInfo(this.props.item.goods_id)
    }
    del_Goods(goods_id) {
        this.props.deleteCartInfo(goods_id)
    }
    render() {
        let { goods_id, goods_name, goods_thumb, cost_price, goods_number, is_check } = this.props.item;
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
                                <span className="minus">-</span>
                                <div className="text_wrap"><input type="text" value={goods_number} /></div>
                                <span className="plus">+</span>
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
        deleteCartInfo: goodsId => dispatch(deleteCartInfoAction(goodsId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GoodsItem);