import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p className="clearfix">
                    <strong className="float-left">{this.props.note}</strong>
                    <small className="float-right">{this.props.copyright}</small>
                </p>
            </footer>
        )
    }
}

export default Footer;