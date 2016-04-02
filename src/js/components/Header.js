import React from 'react';
import { Link } from 'react-router'

export default class Header extends React.Component {
    constructor() {
        super();
        // Initial state of the component
        this.state = {}
    }

    render() {
        return (
            <header>
                <Link to="/"><img src="/images/freddy-montes-logo.svg" alt="Freddy Montes" className="logo" /></Link>
                <ul className="nav">
                    <li><Link to="/porfolio">Porfolio</Link></li>
                    <li><a href="http://github.com/fmontes" target="_blank">Github</a></li>
                    <li><a href="http://cr.linkedin.com/in/fmontes" target="_blank">Linked In</a></li>
                    <li><a href="http://twitter.com/fmontes" target="_blank">Twitter</a></li>
                </ul>
            </header>
        );
    }
}
