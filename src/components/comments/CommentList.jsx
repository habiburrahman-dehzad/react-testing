import { MDBListGroup, MDBListGroupItem } from 'mdbreact';
import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  return (
    <div data-testid='comment-list'>
      <p className='h4 text-center mb-4'>Comments</p>
      {comments && comments.length ? (
        <MDBListGroup className='my-4 mx-4'>
          {comments.map((comment, index) => (
            <MDBListGroupItem key={index} color='secondary'>
              {comment}
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      ) : (
        <p className='grey-text my-4 mx-4'>No Comments</p>
      )}
    </div>
  );
};

const mapStateToProps = ({ comments }) => ({
  comments,
});

export default connect(mapStateToProps)(CommentList);
