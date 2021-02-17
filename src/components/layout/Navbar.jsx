import { MDBLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../store/actions/authActions';
import PropTypes from 'prop-types';

const Navbar = ({ auth, signIn, signOut }) => {
  return (
    <MDBNavbar color='default-color' dark expand='md'>
      <MDBNavbarBrand href='/'>
        <strong className='white-text'>Navbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBLink to='/post'>
          <strong className='white-text'>Post A Comment</strong>
        </MDBLink>
        {auth ? (
          <MDBLink to='#' onClick={signOut}>
            <strong className='white-text'>Sign Out</strong>
          </MDBLink>
        ) : (
          <MDBLink to='#' onClick={signIn}>
            <strong className='white-text'>Sign In</strong>
          </MDBLink>
        )}
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

Navbar.propTypes = {
  auth: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { signIn, signOut })(Navbar);
