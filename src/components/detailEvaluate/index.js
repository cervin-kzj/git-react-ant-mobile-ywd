import React from "react"
import EvaluateItem from "./evaluateItem"
// import "./detailevaluate.css"
import "./detailevaluate.styl"
class DetailEvaluate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                <ul className="evaluateTab">
                    <li className="act">全部评价</li>
                    <li>好评</li>
                    <li>差评</li>
                    <li>晒单</li>
                </ul>
                <ul className="evaluateCon">
                   <EvaluateItem></EvaluateItem>
                   <EvaluateItem></EvaluateItem>
                   <EvaluateItem></EvaluateItem>
                   <EvaluateItem></EvaluateItem>
                   <EvaluateItem></EvaluateItem>
                </ul>
            </div>
        )
    }
}

export default DetailEvaluate