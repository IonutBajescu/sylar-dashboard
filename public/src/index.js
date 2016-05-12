import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Dashboard from './Application/Dashboard';
import IncidentsList from './Application/IncidentsList';
import Layout from './Infrastructure/Layout';

class App extends React.Component {
    render() {
        return (
            <Layout children={this.props.children}/>
        )
    }
}

class NoMatch extends React.Component {
    render() {
        return (
            <div className="ui icon error message">
                <i className="announcement icon"></i>
                <div className="content">
                    Page not found.
                </div>
            </div>
        );
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="incidents" component={IncidentsList}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('sylar-root'));