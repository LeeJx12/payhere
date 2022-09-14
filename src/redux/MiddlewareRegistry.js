/* @flow */

import { applyMiddleware } from 'redux';

/**
 * 각 모듈별 middleware를 한곳에서 관리하기 위해 추가
 */
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
