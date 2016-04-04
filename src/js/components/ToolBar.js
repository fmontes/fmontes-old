import React from 'react';
import { browserHistory, hashHistory } from 'react-router';

const ReactRouterHistory = window.location.hostname === 'localhost' ? hashHistory : browserHistory;

export default class ToolBar extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleScrollBound = this.handleScroll.bind(this);
    }

    handleScroll() {
        if (!this.state.showBackButton && window.scrollY > 500) {
            this.setState({
                showBackButton: true
            });
        }

        if (this.state.showBackButton &&  window.scrollY < 500) {
            this.setState({
                showBackButton: false
            });
        }
    }

    scrollToTop() {
        var scrollStep = -window.scrollY / (300 / 15);
        var scrollInterval = setInterval(function() {
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval);
        }, 15);
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScrollBound);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollBound);
    }

    renderToolBar() {
        return (
            <div className={this.state.showBackButton ? 'toolbar toolbar--show' : 'toolbar'}>
                <a onClick={ReactRouterHistory.goBack} className="toolbar__button toolbar__button-back"></a>
                <a onClick={this.scrollToTop} className="toolbar__button toolbar__button-top"></a>
            </div>
        );
    }

    render() {
        return (
            window.matchMedia('(max-width: 599px)').matches ? this.renderToolBar() : null
        );
    }
}
