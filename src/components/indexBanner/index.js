import React from "react"
import { Carousel } from 'antd-mobile';
// import "./indexbanner.css";
import "./indexbanner.styl";
class IndexBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ['1.jpg', '2.jpg', '3.jpg'],
        }
    }
    render() {
        return (
            <div className="bannerBox">
                <Carousel
                    autoplay={false}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={require('../../assets/image/' + val)}
                                alt=""
                                style={{ width: '100%', height: "4.84rem", verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
export default IndexBanner;