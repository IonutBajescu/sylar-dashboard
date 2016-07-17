import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { DashboardView } from 'dashboard';
import { IncidentsListView } from 'incidents';
import Layout from 'infrastructure/layout';
import 'babel-polyfill';
import store from './redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

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
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={DashboardView}/>
                <Route path="incidents" component={IncidentsListView}/>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('sylar-root'));