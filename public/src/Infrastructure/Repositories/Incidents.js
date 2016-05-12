'use strict';

import AbstractRepository from './AbstractRepository';

export default class Incidents extends AbstractRepository {
    constructor() {
        super();
        this.collection = this.http.all('incidents');
    }

    get(params) {
        return this.collection.getAll(params);
    }
}