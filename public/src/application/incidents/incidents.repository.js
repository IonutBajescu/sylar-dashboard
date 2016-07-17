import AbstractRepository from 'infrastructure/abstract.repository';

export default class IncidentsRepository extends AbstractRepository {
    constructor() {
        super();
        this.collection = this.http.all('incidents');
    }

    get(params) {
        return this.collection.getAll(params)
    }

    find(id) {
        return this.http.one('incidents', id).get()
    }
}