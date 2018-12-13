import { Link } from 'react-router-dom';

import React, {Component} from 'react';

const NavList = ['Home', 'Money', 'Social', 'Feedback'];

class Nav extends Component {
    createListNav() {
        return NavList.map( (item, i) => {
            const pathMakeup = item.replace(' ','-').toLowerCase();
            return (<li key={i}><Link to={'/'+pathMakeup}>{item}</Link></li>) 
        });
    }
    render() {
        return (
            <ul className="nav-list">
                {this.createListNav()}
            </ul>
        )
    }
}

export default Nav;