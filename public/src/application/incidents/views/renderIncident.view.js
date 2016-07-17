import React from 'react';

export default incident => {
    incident = incident.data();

    return (
        <tr key={incident.id}>
            <td>{incident.id}</td>
            <td>{incident.impact}</td>
            <td><a href="">#132</a>, <a href="">#1337</a></td>
            <td>{incident.ip}</td>
            <td>{incident.attempted_at}</td>
        </tr>
    )
};