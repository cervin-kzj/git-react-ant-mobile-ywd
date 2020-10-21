import React from "react"
import { connect } from "react-redux"
import { requestIndexDataAction, getIndexDt } from "../../store/modules/home"
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
                    {
                        this.props.indexData.map((item, index) => {
                            return (
                                <IndexCategoryItem item={item} key={index}></IndexCategoryItem>
                            )
                        })
                    }

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
    componentDidMount() {
        this.props.indexDataAction();
    }
    componentWillUnmount() {
        // window.onscroll = null;
    }
}

const mapStateToProps = (state) => {
    return {
        indexData: getIndexDt(state)
    }
}
const mapDispatchToProps = dispatch => (
    {
        indexDataAction: () => {
            dispatch(requestIndexDataAction())
        }
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(Index);