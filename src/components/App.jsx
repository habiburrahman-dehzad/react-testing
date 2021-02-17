import { Route } from 'react-router-dom';
import CommentBox from './comments/CommentBox';
import CommentList from './comments/CommentList';
import Navbar from './layout/Navbar';
import { MDBCol, MDBContainer } from 'mdbreact';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <MDBContainer className='mt-4'>
        <MDBCol sm='10' md='8'>
          <Route path='/post' component={CommentBox} />
          <Route path='/' exact component={CommentList} />
        </MDBCol>
      </MDBContainer>
    </Fragment>
  );
}

export default App;
