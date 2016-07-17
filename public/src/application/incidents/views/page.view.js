import React from 'react';
import { LatestIncidentsView } from 'incidents';

export default class IncidentPageView extends React.Component {
    static propTypes: {
        viewingIncident: React.PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'ONE_INCIDENT_FETCH_REQUESTED',
            id: this.props.params.incidentId
        })

        this.props.dispatch({
            type: 'LATEST_INCIDENTS_FETCH_REQUESTED',
            take: 3
        })
    }

    render() {
        let incident = this.props.viewingIncident ? this.props.viewingIncident.data() : {};

        return (
            <div>
                <div className="ui two columns grid">
                    <div className="column">
                        <h3><i className="list icon"/> Details</h3>

                        <table className="ui basic definition table">
                            <tbody>
                            <tr>
                                <td>Impact</td>
                                <td>
                                    <span className={'ui label' + (incident.impact > 5 ? 'red' : 'blue')}>
                                        {incident.impact}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>At</td>
                                <td>{incident.attempted_at}</td>
                            </tr>
                            <tr>
                                <td>IP</td>
                                <td>{incident.ip}</td>
                            </tr>
                            <tr>
                                <td>Request</td>
                                <td>
                                    GET {incident.url}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="column">
                        <h3><i className="zoom icon"/> Analysis</h3>

                        <table className="ui basic definition table">
                            <tbody>
                                <tr>
                                    <td>Type</td>
                                    <td>XSS, CSRF</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>MySQL charset switch and MSSQL DoS attempts.</td>
                                </tr>
                                <tr>
                                    <td>Rule</td>
                                    <td>#23 of PHPIDS.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt3">
                    <h3><i className="history icon"/> Other attempts from {incident.ip}</h3>
                    <LatestIncidentsView/>
                </div>
            </div>
        )
    }
}