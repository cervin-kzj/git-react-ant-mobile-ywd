import React from "react";
import { SwipeAction } from 'antd-mobile';
// import "./cartitem.css";
import "./cartitem.styl";

class GoodsItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SwipeAction
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                    {
                        text: '删除',
                        onPress: () => console.log('delete'),
                        style: { backgroundColor: '#ff9900', color: 'white' },
                    },
                ]}
                onOpen={() => console.log('global open')}
                onClose={() => console.log('global close')}
            >
                <div className="item">
                    <div className="checkBox">
                        <i></i>
                        <input type="checkbox" />
                    </div>
                    <div className="itemInfo">
                        <div className="thumb">
                            <img src={require('../../assets/image/thumb.jpg')} alt="" />
                        </div>
                        <div className="info">
                            <div className="title">
                                ChildLife/童年时光婴幼儿...<span className="attr">90粒装</span>
                            </div>
                            <div className="cartNum">
                                <span className="minus">-</span>
                                <div className="text_wrap"><input type="text" value="10" /></div>
                                <span className="plus">+</span>
                            </div>
                        </div>
                        <div className="price">
                            <span className="rmb">¥</span>
                            <span className="v">1180000.00</span>
                        </div>
                    </div>
                </div>
            </SwipeAction>
        )
    }
}

export default GoodsItem;