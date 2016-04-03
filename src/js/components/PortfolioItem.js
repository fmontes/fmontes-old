import React from 'react';
import { Link } from 'react-router'

export default class PortfolioItem extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        var item = this.props.item;
        return (
            <div className="portfolio__item">
                <Link to={'/portfolio/' + item.id} className="portfolio__item-link">
                    <img src={item.thumb} alt={item.name} className="portfolio__item-thumb" />
                    <div className="portfolio__item-content">
                        <h3 className="portfolio__item-name">{item.name}</h3>
                        <span className="portfolio__item-work">{item.teaser}</span>
                    </div>
                </Link>
            </div>
        )
    }
}
