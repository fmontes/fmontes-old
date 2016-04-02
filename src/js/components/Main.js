import React from 'react';
import Header from './Header'

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
                {this.props.children}
            </div>
        );
    }
}