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
        var classes = 'content';
        classes = this.props.location.pathname.replace('/', '') === 'dribbble' ? classes + ' dribbble' : classes;
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
