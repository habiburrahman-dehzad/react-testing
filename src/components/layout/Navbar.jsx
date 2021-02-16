import { MDBNavbar, MDBNavbarBrand } from 'mdbreact';
import React from 'react';

const Navbar = () => {
  return (
    <MDBNavbar color='default-color' dark expand='md'>
      <MDBNavbarBrand>
        <strong className='white-text'>Navbar</strong>
      </MDBNavbarBrand>
    </MDBNavbar>
  );
};

export default Navbar;
