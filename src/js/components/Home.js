import React from 'react';
import Portfolio from './Portfolio';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="home">
                <Portfolio />
                <h3 className="intro"><b>Graphic designer</b> who loved the web and became a full time <b>front-end developer</b>.</h3>
                <p>Javascript, HTML and CSS to build perfect web experiences for mobile and desktop. </p>
                <div className="love">
                    <img src="/images/icn-love.svg" alt="I enjoy work with" className="icn-love" />
                    <div className="separator"></div>
                    <p><b>I enjoy working with:</b> SASS, Grunt, NodeJS & Express, mongodb, Bower and React.</p>
                </div>
            </div>
        );
    }
}
