import React from "react";
import "./detailsku.css"

class DetailSku extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="detail_sku_v1_main">
                <div className="main">
                    <div className="head">
                        <div className="avt">
                            <img src={require("../../assets/image/thumb.jpg")} alt="" />
                        </div>
                        <div className="r">
                            <p className="price">¥103.90</p>
                            <p className="goodsnumber">库存123456件</p>
                            <i className="check_attr">请选择商品属性</i>
                        </div>

                        <i className="close"><img src={require("../../assets/image/close.png")} alt="" /></i>
                    </div>
                    <div className="body">
                        <div className="count_choose clearfix">
                            <div className="num_wrap_v2 clearfix">
                                <span className="minus">-</span>
                                <div className="text_wrap"><input type="text" value="1" /></div>
                                <span className="plus">+</span>
                            </div>
                            <p className="count">购买数量</p>
                        </div>
                        <div className="popupSkuArea">
                            <div className="sku_kind">颜色</div>
                            <div className="sku_choose">
                                <span className="item">BQ3448-007</span>
                                <span className="item active">BQ3448-102</span>
                                <span className="item">BQ3448-001</span>
                            </div>
                            <div className="sku_kind">尺码</div>
                            <div className="sku_choose">
                                <span className="item">40</span>
                                <span className="item">40.5</span>
                                <span className="item active">42</span>
                                <span className="item" >42.5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailSku;