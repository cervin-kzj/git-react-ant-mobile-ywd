import React from "react"
import EvaluateItem from "./evaluateItem"
// import "./detailevaluate.css"
import "./detailevaluate.styl"
class DetailEvaluate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "all",
            buyerReviews: [
                {
                    key: 'all',
                    value: "全部评价",
                    class: "act"
                },
                {
                    key: 'good',
                    value: "好评",
                    class: ""
                },
                {
                    key: 'bad',
                    value: "差评",
                    class: ""
                },
                {
                    key: 'postForm',
                    value: "晒单",
                    class: ""
                }
            ]
        }
    }
    evaluateTab(id) {
        this.state.buyerReviews.forEach((item, index) => {
            this.state.buyerReviews[index].class = "";
        });
        this.setState({
            buyerReviews: this.state.buyerReviews
        });
        this.state.buyerReviews.forEach((item, idx) => {
            if (id == idx) {
                this.state.buyerReviews[id].class = "act";
                this.setState({
                    selected: item.key
                })
            }
        });
        this.setState({
            buyerReviews: this.state.buyerReviews
        })
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <ul className="evaluateTab">
                    {
                        this.state.buyerReviews.map((item, index) => {
                            return (
                                <li key={index} onClick={() => { this.evaluateTab(index) }} className={item.class}>{item.value}</li>
                            )
                        })
                    }
                </ul>
                <ul className="evaluateCon">
                    {
                        this.props.item != undefined
                            ?
                            this.props.item[this.state.selected].map((items, index) => {
                                return (
                                    <EvaluateItem item={items} key={index}></EvaluateItem>
                                )
                            })
                            :
                            null
                    }

                </ul>
            </div>
        )
    }
}

export default DetailEvaluate