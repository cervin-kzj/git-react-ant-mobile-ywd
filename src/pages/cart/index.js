import React from "react"
import { store } from "../../store/index"
import { connect } from "react-redux"
import { getCartInfo, editIsCheckCartInfoAction } from "../../store/modules/cart"
import CommonHeader from "../../components/commonHeader"
import CommonFooter from "../../components/commonFooter"
import CartFooter from "../../components/cartFooter"
import CartItem from "../../components/cartItem"

// import "./cart.css"
import "./cart.styl"
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let newCartInfo = [];
        let cartInfo = this.props.cartInfo;
        for (let j = 0; j < cartInfo.length; j++) {
            newCartInfo.push({
                user_phone: cartInfo[j].user_phone,
                shop_id: cartInfo[j].shop_id,
                shop_name: cartInfo[j].shop_name,
                goods_list: [
                    {
                        goods_id: cartInfo[j].goods_id,
                        goods_name: cartInfo[j].goods_name,
                        goods_thumb: cartInfo[j].goods_thumb,
                        goods_attr: cartInfo[j].goods_attr,
                        original_price: cartInfo[j].original_price,
                        reduct_price: cartInfo[j].reduct_price,
                        goods_number: cartInfo[j].goods_number,
                        goods_total: cartInfo[j].goods_total,
                        is_check: cartInfo[j].is_check,
                        cost_price: cartInfo[j].cost_price
                    }
                ]
            })
        }
        newCartInfo.sort((a, b) => {
            return a.shop_id - b.shop_id
        })
        let arr = [];
        if (newCartInfo.length == 1) {
            arr.push({
                user_phone: newCartInfo[0].user_phone,
                shop_id: newCartInfo[0].shop_id,
                shop_name: newCartInfo[0].shop_name,
                goods_list: [
                    {
                        goods_id: newCartInfo[0].goods_list[0].goods_id,
                        goods_name: newCartInfo[0].goods_list[0].goods_name,
                        goods_thumb: newCartInfo[0].goods_list[0].goods_thumb,
                        goods_attr: newCartInfo[0].goods_list[0].goods_attr,
                        original_price: newCartInfo[0].goods_list[0].original_price,
                        reduct_price: newCartInfo[0].goods_list[0].reduct_price,
                        goods_number: newCartInfo[0].goods_list[0].goods_number,
                        goods_total: newCartInfo[0].goods_list[0].goods_total,
                        is_check: newCartInfo[0].goods_list[0].is_check,
                        cost_price: newCartInfo[0].goods_list[0].cost_price
                    }
                ]
            })
        }
        else {
            for (let i = 0; i < newCartInfo.length - 1; i++) {
                if (newCartInfo[i].shop_id == newCartInfo[i + 1].shop_id) {
                    arr.push({
                        user_phone: newCartInfo[i].user_phone,
                        shop_id: newCartInfo[i].shop_id,
                        shop_name: newCartInfo[i].shop_name,
                        goods_list: [
                            {
                                goods_id: newCartInfo[i].goods_list[0].goods_id,
                                goods_name: newCartInfo[i].goods_list[0].goods_name,
                                goods_thumb: newCartInfo[i].goods_list[0].goods_thumb,
                                goods_attr: newCartInfo[i].goods_list[0].goods_attr,
                                original_price: newCartInfo[i].goods_list[0].original_price,
                                reduct_price: newCartInfo[i].goods_list[0].reduct_price,
                                goods_number: newCartInfo[i].goods_list[0].goods_number,
                                goods_total: newCartInfo[i].goods_list[0].goods_total,
                                is_check: newCartInfo[i].goods_list[0].is_check,
                                cost_price: newCartInfo[i].goods_list[0].cost_price
                            },
                            {
                                goods_id: newCartInfo[i + 1].goods_list[0].goods_id,
                                goods_name: newCartInfo[i + 1].goods_list[0].goods_name,
                                goods_thumb: newCartInfo[i + 1].goods_list[0].goods_thumb,
                                goods_attr: newCartInfo[i + 1].goods_list[0].goods_attr,
                                original_price: newCartInfo[i + 1].goods_list[0].original_price,
                                reduct_price: newCartInfo[i + 1].goods_list[0].reduct_price,
                                goods_number: newCartInfo[i + 1].goods_list[0].goods_number,
                                goods_total: newCartInfo[i + 1].goods_list[0].goods_total,
                                is_check: newCartInfo[i + 1].goods_list[0].is_check,
                                cost_price: newCartInfo[i + 1].goods_list[0].cost_price
                            }
                        ]
                    })
                }
                else {
                    arr.push({
                        user_phone: newCartInfo[i].user_phone,
                        shop_id: newCartInfo[i].shop_id,
                        shop_name: newCartInfo[i].shop_name,
                        goods_list: [
                            {
                                goods_id: newCartInfo[i].goods_list[0].goods_id,
                                goods_name: newCartInfo[i].goods_list[0].goods_name,
                                goods_thumb: newCartInfo[i].goods_list[0].goods_thumb,
                                goods_attr: newCartInfo[i].goods_list[0].goods_attr,
                                original_price: newCartInfo[i].goods_list[0].original_price,
                                reduct_price: newCartInfo[i].goods_list[0].reduct_price,
                                goods_number: newCartInfo[i].goods_list[0].goods_number,
                                goods_total: newCartInfo[i].goods_list[0].goods_total,
                                is_check: newCartInfo[i].goods_list[0].is_check,
                                cost_price: newCartInfo[i].goods_list[0].cost_price
                            }
                        ]
                    })
                }
            }
        }
        return (
            <div className="cartWrap">
                <CommonHeader></CommonHeader>
                <div className="cartContainer">
                    {
                        arr.map((item, index) => {
                            return (
                                <CartItem key={index} item={item}></CartItem>
                            )
                        })
                    }
                </div>
                <CartFooter cartInfo={cartInfo}></CartFooter>
                <CommonFooter></CommonFooter>
            </div>
        )
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        });
    }
}
const mapStateToProps = (state) => {
    return {
        cartInfo: getCartInfo(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editIsCheckCartInfo: (id) => {
            dispatch(editIsCheckCartInfoAction(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);