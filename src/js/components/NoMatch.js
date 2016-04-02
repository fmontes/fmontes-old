import React from 'react';

export default class NoMatch extends React.Component {
    constructor() {
        super();
        // Initial state of the component
        this.state = {}
    }

    render(){
        return (
            <div className="content">
                <h1>404</h1>
            </div>
        );
    }
}
