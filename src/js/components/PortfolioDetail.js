import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import portfolioApi from '../lib/portfolioApi';


//TODO: Add back button on scroll
export default class PortfolioDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            item: null
        }
    }

    onChange(data) {
        this.setState({
            item: data
        })
    }

    getImages() {
        var images = [];
        this.state.item.images.map(function(image, i) {
            images.push(<img src={image} className="portfolio-detail__gallery-item" key={i} />)
        });

        return images;
    }

    componentWillMount() {
        portfolioApi.getItemById(this.props.params.id).then(this.onChange.bind(this));
    }


    renderPortfolioItem() {
        var item = this.state.item;
        return (
            <div className="portfolio-detail">
                <h2 className="portfolio-detail__name">{item.name}</h2>
                <p className="portfolio-detail__description">
                    {item.description}
                </p>
                <div className="portfolio-detail__gallery">
                    {this.getImages()}
                </div>
            </div>
        )
    }

    render() {
        return this.state.item ? this.renderPortfolioItem() : <LoadingIndicator />
    }
}
