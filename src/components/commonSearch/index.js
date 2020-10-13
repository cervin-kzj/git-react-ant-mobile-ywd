import React from "react"
import "./commonsearch.css"

class IndexSearch extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="searchBox searchBoxFixed">
                <div>
                    <input type="text" placeholder="Montagne jeunesse" />
                    <input type="submit" value="" />
                </div>
            </div>
        )
    }
}
export default IndexSearch