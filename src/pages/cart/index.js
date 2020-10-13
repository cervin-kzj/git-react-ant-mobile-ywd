import React from "react"
import { SwipeAction } from 'antd-mobile';
import CommonHeader from "../../components/commonHeader"
import CommonFooter from "../../components/commonFooter"
import CartFooter from "../../components/cartFooter"
import CartItem from "../../components/cartItem"

import "./cart.css"
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="cartWrap">
                <CommonHeader></CommonHeader>
                <div className="cartContainer">
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                    <CartItem></CartItem>
                </div>
                <CartFooter></CartFooter>
                <CommonFooter></CommonFooter>
            </div>
        )
    }
}

export default Cart;