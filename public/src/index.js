import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Dashboard from './application/Dashboard';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="ui attached brand inverted menu">
                    <div className="ui container">
                        <a href="#" className="active item"><i className="dashboard icon"></i> Dashboard</a>
                        <a href="#" className="item"><i className="protect icon"></i> Incidents</a>
                        <a href="#" className="right borderless item"><i className="sign out icon"></i> Logout</a>
                    </div>
                </div>

                <div className="ui content container">
                    {this.props.children}
                </div>

                <div className="ui mt5 attached brand inverted segment">
                    <div className="ui container">
                        Sylar, &copy; 2016 <a href="https://github.com/IonutBajescu">Ionut Bajescu</a>.
                    </div>
                </div>
            </div>
        )
    }
}

class NoMatch extends React.Component {
    render() {
        return (
            <div className="ui error message">
                Page not found.
            </div>
        );
    }
}
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('sylar-root'));