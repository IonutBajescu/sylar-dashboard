import React from 'react';
import renderIncident from './renderIncident.view';

export default class IncidentsListView extends React.Component {
    static propTypes: {
        allIncidents: React.PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'ALL_INCIDENTS_FETCH_REQUESTED'
        })
    }

    render() {
        return (
            <div>
                <h3><i className="history icon"/> Incidents Archive</h3>
                <table className="ui basic divided celled attached table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Impact</th>
                        <th>Matched</th>
                        <th>IP</th>
                        <th>At</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.allIncidents.map(renderIncident)}
                    </tbody>
                </table>
            </div>
        );
    }
}