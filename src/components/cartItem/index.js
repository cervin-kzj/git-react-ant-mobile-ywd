import React from "react";
// import "./cartitem.css";
import "./cartitem.styl";
import GoodsItem from "./goodsItem";

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { shop_name, goods_list } = this.props.item
        return (
            <div className="cartItem">
                <div className="shopInfo">{shop_name}</div>
                {
                    goods_list.map((item, index) => {
                        return (
                            <GoodsItem key={index} item={item}></GoodsItem>
                        )
                    })
                }
            </div>
        )
    }
}

export default CartItem