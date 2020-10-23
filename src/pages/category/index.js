import React from "react"
import { connect } from "react-redux"
import { getClassifyData, requestClassifyDataAction } from "../../store/modules/category"
import { Tabs, } from 'antd-mobile';
import CommonSearch from "../../components/commonSearch"
import CommonFooter from "../../components/commonFooter"
// import "./category.css"
import "./category.styl";

class Category extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.props.requestClassifyData()
    }
    render() {
        let getClassify = this.props.getClassify;
        const tabs = [];
        getClassify.forEach((item, index) => {
            tabs.push({ title: item.name })
        })
        return (
            <div className="categoryWrap">
                <CommonSearch></CommonSearch>
                <div className="categoryContainer">
                    <Tabs tabs={tabs}
                        initialPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        tabBarActiveTextColor="#ff9900"
                        tabBarInactiveTextColor="#333333"
                        tabBarBackgroundColor="#fafafa"
                        tabBarTextStyle={{ fontSize: '0.26rem' }}
                    >
                        {
                            this.props.getClassify.map((item, index) => {
                                return (
                                    <div className="categoryItem" key={index}>
                                        <ul>
                                            {
                                                item.list.map((item, index) => {
                                                    return (
                                                        <li className="item" key={index}>
                                                            <div className="cateThumb">
                                                                <img src={item.thumbnail} alt={item.name} />
                                                            </div>
                                                            <h3 className="cateTitle">{item.name}</h3>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }

                    </Tabs>
                </div>
                <CommonFooter></CommonFooter>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getClassify: getClassifyData(state),
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        requestClassifyData: () => dispatch(requestClassifyDataAction()),
    }
}
export default connect(mapStateToProps, mapStateToDispatch)(Category);