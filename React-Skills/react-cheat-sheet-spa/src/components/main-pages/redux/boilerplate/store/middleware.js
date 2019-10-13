import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [
    thunk
];
const enhancerList = [];

if (!isProd) {
    middlewareList.push(createLogger());
    if (
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
        enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
    }
}

export default compose(
    applyMiddleware(...middlewareList),
    ...enhancerList
);