import React from "react"
import { withRouter } from "react-router-dom"
import "./indexcategoryitem.css"
class IndexCategoryItem extends React.Component {
    constructor(props) {
        super(props)
    }
    jumpUrl(url) {
        this.props.history.push(url);
    }
    render() {
        let { name, list } = this.props.item;
        return (
            <div className="indexCategoryItem">
                <h2 className="categoryTitle" style={{ background: `url(${require('../../assets/image/meizhuang.png')}) 0 center /  0.39rem 0.32rem no-repeat` }}>{name}</h2>
                <div className="categoryBox">
                    <ul className="categoryList">
                        {
                            list.map((item, index) => {
                                return (
                                    <li onClick={() => { this.jumpUrl(`/detail/${item.id}`) }} key={index}>
                                        <div className="goodsThumbBox">
                                            <img src={item.thumbnail} alt={item.name} />
                                        </div>
                                        <div className="goodsInfoBox">
                                            <div className="goodsPriceBox">
                                                <span className="item-act-price"><span className="rmb">¥</span>{item.reduct_price}</span>
                                                <span className="item-tag-price"><span className="rmb">¥</span>{item.original_price}</span>
                                            </div>
                                            <h3 className="goodsTitle">{item.name}</h3>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default withRouter(IndexCategoryItem)