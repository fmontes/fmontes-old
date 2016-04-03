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

    componentWillMount() {
        dribbbleApi.getShots().then(this.onChange.bind(this))
    }

    renderShots() {
        var shots = [];
        this.state.shots.forEach(function(shot) {
            shots.push(<div className="shot" key={shot.id}><img src={shot.images.normal} className="shot-image" title={shot.title} /></div>)
        });
        return (
            <div className="dribbble-shots done" id="dribbbleShots">{shots}</div>
        )
    }

    componentDidUpdate() {
        if (window.matchMedia('(max-width: 599px)').matches) {
            this.initFlickity()
        }
    }

    initFlickity() {
        var flkty = new Flickity('#dribbbleShots', {
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false
        });
    }


    render() {
        return this.state.shots.length ? this.renderShots() : <LoadingIndicator />
    }
}
