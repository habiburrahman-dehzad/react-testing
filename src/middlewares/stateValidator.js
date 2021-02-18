import tv4 from 'tv4';
import stateSchema from './stateSchema';

const stateValidator = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (!tv4.validate(getState(), stateSchema)) {
    let message = `Invalid redux state detected\n${tv4.error.message}`;
    tv4.error.subErrors &&
      tv4.error.subErrors.forEach((error) => {
        message += '\n';
        message += error.message;
      });

    console.warn(message);
  }
};

export default stateValidator;
