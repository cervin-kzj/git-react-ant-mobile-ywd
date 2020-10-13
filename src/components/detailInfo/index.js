import React from "react"
import "./detailinfo.css"

class DetailInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff', paddingTop: "0.26rem" }}>
                <img src={require('../../assets/image/xiangqing.png')} style={{ width: `100%` }} />
            </div>
        )
    }
}

export default DetailInfo