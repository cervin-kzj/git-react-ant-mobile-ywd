import React from "react";
// import "./cartitem.css";
import "./cartitem.styl";
import GoodsItem from "./goodsItem";

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="cartItem">
                <div className="shopInfo">杭州保税区仓杭州保税区仓杭州保税区仓杭州保税区仓杭州保税区仓</div>
                <GoodsItem></GoodsItem>
                <GoodsItem></GoodsItem>
                <GoodsItem></GoodsItem>
            </div>
        )
    }
}

export default CartItem