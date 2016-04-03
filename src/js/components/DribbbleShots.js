import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import dribbbleApi from '../lib/dribbbleApi';
import Flickity from 'Flickity'

// TODO: cache the content the first time
export default class DribbbleShots extends React.Component {
    constructor() {
        super();
        this.state = {
            shots: []
        }
    }

    onChange(data) {
        this.setState({
            shots: data
        })
    }

    renderShots() {
        var shots = [];
        this.state.shots.forEach(function(shot) {
            shots.push(<div className="dribbble-shots__shot" key={shot.id}><img src={shot.images.normal} className="js-shot-image" title={shot.title} /></div>)
        });
        return (
            <div className="dribbble-shots" id="dribbbleShots">{shots}</div>
        )
    }

    initFlickity() {
        document.getElementById('dribbbleShots').classList.add('dribbble-shots--done');
        if (window.matchMedia('(max-width: 599px)').matches) {
            var flkty = new Flickity('#dribbbleShots', {
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false
            });
        }

    }

    componentWillMount() {
        dribbbleApi.getShots().then(this.onChange.bind(this))
    }

    componentDidUpdate() {
        document.getElementsByClassName('js-shot-image')[0].addEventListener('load', this.initFlickity);
    }

    componentWillUnmount() {
        document.getElementsByClassName('js-shot-image')[0].removeEventListener('load', this.initFlickity);
    }

    render() {
        return this.state.shots.length ? this.renderShots() : <LoadingIndicator />
    }
}
