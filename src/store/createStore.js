import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import asyncMiddleware from '../middlewares/asyncMiddleware';
import stateValidator from '../middlewares/stateValidator';
import rootReducer from './reducers/rootReducer';

const middleware = [asyncMiddleware, stateValidator];

const createStore = (initialState = {}) =>
  reduxCreateStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export default createStore;
