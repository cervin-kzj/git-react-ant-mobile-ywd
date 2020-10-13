import React from "react"
import { withRouter } from "react-router-dom"
import "./indexcategoryitem.css"
class IndexCategoryItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="indexCategoryItem">
                <h2 className="categoryTitle" style={{ background: `url(${require('../../assets/image/meizhuang.png')}) 0 center /  0.39rem 0.32rem no-repeat` }}>今日疯抢</h2>
                <div className="categoryBox">
                    <ul className="categoryList">
                        <li>
                            <div className="goodsThumbBox">
                                <img src={require("../../assets/image/thumb.jpg")} alt="" />
                            </div>
                            <div className="goodsInfoBox">
                                <div className="goodsPriceBox">
                                    <span className="item-act-price"><span className="rmb">¥</span>88.00</span>
                                    <span className="item-tag-price"><span className="rmb">¥</span>96.00</span>
                                </div>
                                <h3 className="goodsTitle">美国/SUPER MILD沐浴露500ml</h3>
                            </div>
                        </li>
                        <li>
                            <div className="goodsThumbBox">
                                <img src={require("../../assets/image/thumb.jpg")} alt="" />
                            </div>
                            <div className="goodsInfoBox">
                                <div className="goodsPriceBox">
                                    <span className="item-act-price"><span className="rmb">¥</span>88.00</span>
                                    <span className="item-tag-price"><span className="rmb">¥</span>96.00</span>
                                </div>
                                <h3 className="goodsTitle">Jacob Hooy雅歌布七叶树籽眼霜150ml</h3>
                            </div>
                        </li>
                        <li>
                            <div className="goodsThumbBox">
                                <img src={require("../../assets/image/thumb.jpg")} alt="" />
                            </div>
                            <div className="goodsInfoBox">
                                <div className="goodsPriceBox">
                                    <span className="item-act-price"><span className="rmb">¥</span>88.00</span>
                                    <span className="item-tag-price"><span className="rmb">¥</span>96.00</span>
                                </div>
                                <h3 className="goodsTitle">美国/SUPER MILD沐浴露500ml</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(IndexCategoryItem)