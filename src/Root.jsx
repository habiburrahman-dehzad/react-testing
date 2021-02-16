import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';

const Root = ({ children, initialState = {} }) => {
  return <Provider store={createStore(initialState)}>{children}</Provider>;
};

export default Root;
