import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js'
import logger from 'redux-logger'

import thunkMiddleware from '../middleware/thunk';

const configureStore = () => (
    createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware, logger)
    )
);
// const configureStore = (preloadedState = {}) =>  {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(logger)
//   );
// }

export default configureStore;