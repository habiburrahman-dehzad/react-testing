import { SAVE_COMMENT } from '../actions/types';

const initialState = [];

const commentsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];

    default:
      return state;
  }
};

export default commentsReducer;
