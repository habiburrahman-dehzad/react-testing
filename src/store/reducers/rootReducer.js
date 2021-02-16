import { combineReducers } from 'redux';
import testRecuder from './testReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  test: testRecuder,
  comments: commentsReducer,
});

export default rootReducer;
