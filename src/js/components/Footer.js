import React from 'react';
import { Link } from 'react-router'

export default class Footer extends React.Component {
    constructor() {
        super();
        // Initial state of the component
        this.state = {}
    }

    render() {
        return (
            <footer>
                <p>This single page app built with <a href="https://facebook.github.io/react/">React</a> and you can <a href="https://github.com/fmontes/fmontes">get the repo</a> and do whatever you want</p>
            </footer>
        );
    }
}
