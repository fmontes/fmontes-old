import React from 'react';
import Header from './Header'
import Footer from './Footer'

export default class Main extends React.Component {
    constructor() {
        super();
        // Initial state of the component
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
