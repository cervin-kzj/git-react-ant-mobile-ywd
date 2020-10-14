import React from "react"
import CommonFooter from "../../components/commonFooter"
import IndexBanner from "../../components/indexBanner"
import CommonSearch from "../../components/commonSearch"
import IndexCategoryItem from "../../components/indexCategoryItem"
// import "./index.css"
import "./index.styl"

import $ from "jquery";
class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="indexWrap">
                <CommonSearch></CommonSearch>
                <IndexBanner></IndexBanner>
                <div className="indexContainer">
                    <IndexCategoryItem></IndexCategoryItem>
                    <IndexCategoryItem></IndexCategoryItem>
                    <IndexCategoryItem></IndexCategoryItem>
                    <IndexCategoryItem></IndexCategoryItem>
                </div>
                <CommonFooter></CommonFooter>
            </div>
        )
    }
    componentWillMount() {
        // window.onscroll = () => {
        //     let h = document.getElementsByClassName("searchBox")[0].getBoundingClientRect().top;
        //     if (h < 0 && document.getElementsByClassName("searchBox")[0].className != "searchBox searchBoxFixed") {
        //         document.getElementsByClassName("searchBox")[0].className = "searchBox searchBoxFixed";
        //     }
        //     else if (document.getElementsByClassName("searchBox")[0].className == "searchBox searchBoxFixed" && document.documentElement.scrollTop == 0) {
        //         document.getElementsByClassName("searchBox")[0].className = "searchBox";
        //     }
        // }
    }
    componentWillUnmount() {
        // window.onscroll = null;
    }
}

export default Index;