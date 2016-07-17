'use strict';

import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

export default class AbstractRepository {
    constructor() {
        this.http = this.buildRestfulClient();
    }

    buildRestfulClient() {
        var client = restful('/api', fetchBackend(fetch));

        // client.addResponseInterceptor((response, config) => {
        //     response.data = response.data.data;
        //     return response;
        // });

        return client;
    }
}