import React from "react";
// import "./cartfooter.css";
import "./cartfooter.styl";
class CartFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="cartFooter">
                <div className="editBox">
                    <div className="all">
                        <i></i>
                        <input type="checkbox" />
                        <span>全选</span>
                    </div>
                    <div className="edit">
                        <i></i>
                        <input type="checkbox" />
                        <span>编辑</span>
                    </div>
                </div>
                <div className="total">
                    <p>合计:<span className="je">118.00</span></p>
                    <p>(不含运费)</p>
                </div>
                <div className="checkOut">去结算</div>
            </div>
        )
    }
}
export default CartFooter;