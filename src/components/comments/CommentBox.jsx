import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from '../../store/actions/commentActions';

const CommentBox = ({ saveComment, fetchComments }) => {
  const [formValues, setFormValues] = useState({
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(formValues.comment);
    setFormValues({ comment: '' });
  };

  return (
    <div data-testid='comment-box'>
      <form name='commentform' onSubmit={handleSubmit}>
        <p className='h4 text-center mb-4'>Add a Comment</p>
        <label className='grey-text'>Your Comment</label>
        <textarea
          value={formValues.comment}
          name='comment'
          className='form-control'
          rows={3}
          onChange={(e) =>
            setFormValues({ ...formValues, comment: e.target.value })
          }
        />
        <MDBBtn color='default' type='submit'>
          Submit Comment
        </MDBBtn>
      </form>
      <MDBBtn color='teal' onClick={fetchComments}>
        Fetch Comments
      </MDBBtn>
    </div>
  );
};

export default connect(null, { saveComment, fetchComments })(CommentBox);
