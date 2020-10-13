import React from "react"
import CommonHeader from "../../components/commonHeader"
import CommonFooter from "../../components/commonFooter"
import MineModuleItem from "../../components/mineModuleItem"
import MineQuickMenuItem from "../../components/mineQuickMenuItem"
import MineAvatarBox from "../../components/mineAvatarBox"
import "./mine.css"

class Mine extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="mineWrap">
                <CommonHeader></CommonHeader>
                <div className="mineContainer">
                    <MineAvatarBox></MineAvatarBox>
                    <MineQuickMenuItem className="pt"></MineQuickMenuItem>
                    <MineModuleItem></MineModuleItem>
                    <MineQuickMenuItem className="mt13"></MineQuickMenuItem>
                </div>
                <CommonFooter></CommonFooter>
            </div>
        )
    }
}

export default Mine;