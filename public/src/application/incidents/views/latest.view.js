import React from 'react';
import renderIncident from './renderIncident.view';

export default class LatestIncidentsView extends React.Component {
    static propTypes: {
        latestIncidents: React.PropTypes.array.isRequired
    }

    render() {
        return (
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
                    {this.props.latestIncidents.map(renderIncident)}
                </tbody>
            </table>
        );
    }
}