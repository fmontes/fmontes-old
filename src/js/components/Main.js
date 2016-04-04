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
        var pathName = this.props.location.pathname.split('/');
        var classes = 'content' + (pathName.length ? ' ' + pathName[1] : '');
        return (
            <div>
                <Header />
                <div className={classes}>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
