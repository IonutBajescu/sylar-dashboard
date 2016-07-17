import React from 'react';
import { Link } from 'react-router';

export default incident => {
    incident = incident.data();

    return (
        <tr key={incident.id}>
            <td>
                <Link to={'incidents/' + incident.id}><i className="unhide icon"/>{incident.id}</Link>
            </td>
            <td>{incident.impact}</td>
            <td><span data-content="some other code">#132</span>, <span data-content="some code">#1337</span></td>
            <td>{incident.ip}</td>
            <td>{incident.attempted_at}</td>
        </tr>
    )
};