import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    if (!props.auth) {
      return <Redirect to='/' />;
    }

    return <ChildComponent {...props} />;
  };

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
