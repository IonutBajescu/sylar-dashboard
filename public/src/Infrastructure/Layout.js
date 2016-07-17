'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class Layout extends React.Component {
    render() {
        var menuItems = [
            {
                href: '',
                icon: 'dashboard',
                title: 'Dashboard'
            },
            {
                href: 'incidents',
                icon: 'protect',
                title: 'Incidents'
            }
        ];

        return (
            <div className="site">
                <div className="ui attached brand inverted menu">
                    <div className="ui container">
                        <div className="brand item">
                            SYLAR
                        </div>
                        {menuItems.map(this.renderMenuLink)}
                        <a href="#" className="right borderless item"><i className="sign out icon"></i> Logout</a>
                    </div>
                </div>

                <div className="content">
                    <div className="ui content container">
                        {this.props.children}
                    </div>
                </div>

                <div className="ui footer attached brand inverted segment">
                    <div className="ui container">
                        Sylar, &copy; 2016 <a href="https://github.com/IonutBajescu">Ionut Bajescu</a>.
                    </div>
                </div>
            </div>
        )
    }

    renderMenuLink(item, index) {
        var className = 'item';

        if (location.pathname.substr(1) == item.href) {
            className += ' active';
        }

        return (
            <Link key={index} to={item.href} className={className}><i className={item.icon + ' icon'}/> {item.title}</Link>
        )
    }
}