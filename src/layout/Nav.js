import { Link } from 'react-router-dom';

import React, { Component } from 'react';

const NavList = [
    {
        title: 'Home',
        routerLink: '/home'
    },
    {
        title: 'Money',
        routerLink: '/money'
    },
    {
        title: 'Social',
        routerLink: '/social'
    },
    {
        title: 'Javascript 30',
        routerLink: '/javascript-30',
        submenu: [
            {
                title: 'Drum hits',
                routerLink: '/javascript-30/drum-hits'
            },
            {
                title: 'Clock',
                routerLink: '/javascript-30/clock'
            }
        ]
    }
];

class Nav extends Component {
    buildSubMenu({parentTitle, submenu}) {
        const subMenuList = submenu.map((item, i) => {
            return (
                <li key={i}>
                    <Link to={{pathname: item['routerLink'], search: `?title=${parentTitle + ' > '+ item['title']}` }} >{item.title}</Link>
                </li>)
        });
        return (
            <ul className="sub-nav-list">
                {subMenuList}
            </ul>
        )
    }
    buildMenu(NavList) {
        return NavList.map((item, i) => {
            return (
            <li key={i}>
                <Link to={{pathname: item['routerLink'] }} >{item.title}</Link>
                {item.submenu ? this.buildSubMenu({parentTitle : item['title'], submenu: item['submenu']}): null }
            </li>)
        });
    }
    render() {
        return (
            <ul className="nav-list">
                {this.buildMenu(NavList)}
            </ul>
        )
    }
}

export default Nav;