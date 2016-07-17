import StatelessLatestIncidentsView from './views/latest.view';
import StatelessIncidentsListView from './views/list.view';
import { connect } from 'react-redux';

let mapStoreToProps = store => ({latestIncidents: store.latestIncidents});
const LatestIncidentsView = connect(mapStoreToProps)(StatelessLatestIncidentsView);

mapStoreToProps = store => ({allIncidents: store.allIncidents});
const IncidentsListView = connect(mapStoreToProps)(StatelessIncidentsListView);

export {
    IncidentsListView,
    LatestIncidentsView
}