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
                <p>This site is build with <a href="http://jekyllrb.com/">Jekyll</a> and you can <a href="https://github.com/fmontes/fmontes">get the repo</a> and do whatever you want.</p>
            </footer>
        );
    }
}
