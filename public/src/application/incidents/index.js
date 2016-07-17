import StatelessLatestIncidentsView from './views/latest.view';
import StatelessIncidentsListView from './views/list.view';
import StatelessIncidentPageView from './views/page.view';
import { connect } from 'react-redux';

let mapStoreToProps = store => ({latestIncidents: store.latestIncidents});
const LatestIncidentsView = connect(mapStoreToProps)(StatelessLatestIncidentsView);

mapStoreToProps = store => ({allIncidents: store.allIncidents});
const IncidentsListView = connect(mapStoreToProps)(StatelessIncidentsListView);

mapStoreToProps = store => ({viewingIncident: store.viewingIncident});
const IncidentPageView = connect(mapStoreToProps)(StatelessIncidentPageView);

export {
    IncidentsListView,
    LatestIncidentsView,
    IncidentPageView
}