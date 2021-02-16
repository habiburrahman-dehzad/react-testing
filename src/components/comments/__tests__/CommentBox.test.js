import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Root from 'Root';
import CommentBox from 'components/comments/CommentBox';

beforeEach(() => {
  render(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('shows a form with a text area and submit button', () => {
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveFormValues({ comment: '' });
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});

describe('comment form', () => {
  beforeEach(() => {
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test comment' },
    });
  });

  it('has a text area that users can type in', () => {
    expect(screen.getByRole('form')).toHaveFormValues({
      comment: 'test comment',
    });
  });

  it('clears the text area after submitting the form', () => {
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(form).toHaveFormValues({ comment: '' });
  });
});
