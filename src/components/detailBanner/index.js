import React from "react"
import { Carousel } from 'antd-mobile';
// import "./detailbanner.css"
import "./detailbanner.styl"
class Detailbanner extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="thumbBox">
                <Carousel
                    autoplay={false}
                    infinite
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                >
                    {
                        this.props.item != undefined
                            ?
                            this.props.item.map(val => (
                                <a
                                    key={val}
                                    href="#"
                                    style={{ display: 'inline-block', width: '100%' }}
                                >
                                    <img
                                        src={val}
                                        style={{ width: '100%', height: "5.45rem", verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))
                            :
                            null
                    }
                </Carousel>
            </div>
        )
    }
}

export default Detailbanner
