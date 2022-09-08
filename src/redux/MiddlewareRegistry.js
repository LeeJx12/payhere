/* @flow */

import { applyMiddleware } from 'redux';

class MiddlewareRegistry {
    constructor() {
        this._elements = [];
    }

    applyMiddleware(...additional) {
        return applyMiddleware(...this._elements, ...additional);
    }

    register(middleware) {
        this._elements.push(middleware);
    }
}

export default new MiddlewareRegistry();
