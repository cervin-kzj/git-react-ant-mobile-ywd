import React from "react"
import "./detailinfo.css"

class DetailInfo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff', paddingTop: "0.26rem" }}>
                {
                    this.props.item != undefined
                        ?
                        this.props.item.map((item, index) => {
                            return (
                                <img src={item} style={{ width: `100%` }} key={index} />
                            )
                        })
                        :
                        null
                }
            </div>
        )
    }
}

export default DetailInfo