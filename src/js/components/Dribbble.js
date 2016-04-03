import React from 'react';
import DribbbleShots from './DribbbleShots'

export default class Porfolio extends React.Component {
    constructor() {
        super();
        // Initial state of the component
        this.state = {}
    }

    onChange(data) {
        this.setState({
            item: data
        })
    }

    render() {
        return (
            <DribbbleShots />
        );
    }
}
