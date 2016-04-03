import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import portfolioApi from '../lib/portfolioApi';
import PortfolioItem from './PortfolioItem';

export default class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    onChange(data) {
        this.setState({
            items: data
        })
    }

    componentWillMount() {
        portfolioApi.getItems().then(this.onChange.bind(this));
    }

    renderPortfolioItems() {
        var items = [];
        this.state.items.map(function(item) {
            items.push(<PortfolioItem item={item} key={item.id} />)
        });
        return (
            <div className="portfolio">{items}</div>
        )
    }

    render() {
        return this.state.items.length ? this.renderPortfolioItems() : <LoadingIndicator />
    }
}
