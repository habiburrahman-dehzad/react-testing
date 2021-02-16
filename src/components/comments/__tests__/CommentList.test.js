import { render, screen } from '@testing-library/react';
import Root from 'Root';
import CommentList from 'components/comments/CommentList';

const comments = ['comment number 1', 'comment number 2', 'comment number 3'];

beforeEach(() => {
  render(
    <Root initialState={{ comments }}>
      <CommentList />
    </Root>
  );
});

it('creates one list item per comment', () => {
  const items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(comments.length);
});

it('shows the text for each comment', () => {
  comments.forEach((comment) => {
    expect(screen.getByText(comment)).toBeInTheDocument();
  });
});
