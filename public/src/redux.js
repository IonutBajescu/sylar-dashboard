import { createStore, applyMiddleware, compose } from 'redux';
import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import IncidentsRepository from 'incidents/incidents.repository';
import createSagaMiddleware from 'redux-saga'


function* fetchLatestIncidents() {
    try {
        const incidents = yield (new IncidentsRepository).get({take: 3})
        yield put({type: "LATEST_INCIDENTS_FETCH_SUCCEEDED", incidents});
    } catch (e) {
        yield put({type: "LATEST_INCIDENTS_FETCH_FAILED", message: e.message});
    }
}

function* fetchAllIncidents() {
    try {
        const incidents = yield (new IncidentsRepository).get({take: 10})
        yield put({type: "ALL_INCIDENTS_FETCH_SUCCEEDED", incidents});
    } catch (e) {
        yield put({type: "ALL_INCIDENTS_FETCH_FAILED", message: e.message});
    }
}

function* fetchOneIncident(action) {
    try {
        const incident = yield (new IncidentsRepository).find(action.id)
        yield put({type: "ONE_INCIDENT_FETCH_SUCCEEDED", incident});
    } catch (e) {
        yield put({type: "ONE_INCIDENT_FETCH_FAILED", message: e.message});
    }
}

function* waitForSagaActions() {
    while (true) {
        yield [
            takeEvery("LATEST_INCIDENTS_FETCH_REQUESTED", fetchLatestIncidents),
            takeEvery("ALL_INCIDENTS_FETCH_REQUESTED", fetchAllIncidents),
            takeEvery("ONE_INCIDENT_FETCH_REQUESTED", fetchOneIncident)
        ]
    }
}

function reducer(state = [], action) {
    switch (action.type) {
        case 'LATEST_INCIDENTS_FETCH_SUCCEEDED':
            return {
                ...state,
                latestIncidents: action.incidents.body()
            }

        case 'ALL_INCIDENTS_FETCH_SUCCEEDED':
            return {
                ...state,
                allIncidents: action.incidents.body()
            }

        case 'ONE_INCIDENT_FETCH_SUCCEEDED':
            return {
                ...state,
                viewingIncident: action.incident.body()
            }
    }

    return state;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    {
        latestIncidents: [],
        allIncidents: []
    },
    compose (
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(waitForSagaActions);

export default store;