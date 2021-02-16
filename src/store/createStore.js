import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromise from 'redux-promise';
import rootReducer from './reducers/rootReducer';

const middleware = [reduxPromise];

const createStore = (initialState = {}) =>
  reduxCreateStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default createStore;
