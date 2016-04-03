import React from 'react';

export default class LoadingIndicator extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <span><img src="/images/loader.gif" alt="" width="30" heigth="30" className="loading" id="loading" /></span>
        );
    }
}
