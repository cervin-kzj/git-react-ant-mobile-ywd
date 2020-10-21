import React from "react";
import { connect } from "react-redux"
import { store } from "../../store"
import { editIsCheckAllCartInfoAction } from "../../store/modules/cart"
// import "./cartfooter.css";
import "./cartfooter.styl";
class CartFooter extends React.Component {
    constructor(props) {
        super(props)
    }
    checkAll(is_check) {
        this.props.editIsCheckAllCartInfo(is_check)
    }
    render() {
        let arr = this.props.cartInfo;
        let is_check = "";
        if (arr.length == 0) {
            is_check = false
        } else {
            is_check = arr.every((item, index) => {
                return item.is_check
            })
        }

        let amount = 0;
        arr.forEach((item, index) => {
            if (item.is_check) {
                amount += item.cost_price
            }
        })
        return (
            <div className="cartFooter">
                <div className="editBox">
                    <div className="all">
                        {/* <i></i> */}
                        <input type="checkbox" checked={is_check} onChange={() => { this.checkAll(is_check) }} />
                        <span>全选</span>
                    </div>
                    {/* <div className="edit">
                        <i></i>
                        <input type="checkbox" />
                        <span>编辑</span>
                    </div> */}
                </div>
                <div className="total">
                    <p>合计:<span className="je">{amount}</span></p>
                    <p>(不含运费)</p>
                </div>
                <div className="checkOut">去结算</div>
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

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editIsCheckAllCartInfo: is_check => dispatch(editIsCheckAllCartInfoAction(is_check))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartFooter);