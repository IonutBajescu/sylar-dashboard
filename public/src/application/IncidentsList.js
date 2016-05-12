'use strict';

import React from 'react';
import Incidents from '../Infrastructure/Repositories/Incidents';

export default class IncidentsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            incidents: []
        };

        this.incidentsRepo = new Incidents();
    }

    componentDidMount() {
        this.incidentsRepo.get({take: 10}).then(response => this.setState({incidents: response.body()}));
    }

    render() {
        return (
            <div>
                <h3><i className="wifi icon"></i> Incidents History</h3>
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
                        {this.state.incidents.map(this.renderIncident)}
                    </tbody>
                </table>
            </div>
        );
    }

    renderIncident(incident) {
        incident = incident.data();

        return (
            <tr key={incident.id}>
                <td>{incident.id}</td>
                <td>{incident.impact}</td>
                <td><a href="">#132</a>, <a href="">#1337</a></td>
                <td>{incident.ip}</td>
                <td>{incident.attempted_at}</td>
            </tr>
        );
    }
}