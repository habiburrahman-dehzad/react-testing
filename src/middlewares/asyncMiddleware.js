function isPromise(value) {
  return value && value.then && typeof value.then === 'function';
}

const asyncMiddleware = ({ dispatch }) => (next) => (action) => {
  if (!action.payload || !isPromise(action.payload)) {
    return next(action);
  }

  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

export default asyncMiddleware;
