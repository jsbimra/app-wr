import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/" className="text-center inline-block"><img src={this.props.logo} alt="site-logo" /> <br />{this.props.slogan}</Link>
                <Nav />
            </header>
        )
    }
}

export default Header;