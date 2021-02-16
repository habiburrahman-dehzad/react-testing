import { render, screen } from '@testing-library/react';
import Root from '../../Root';
import App from '../App';

beforeEach(() => {
  render(
    <Root>
      <App />
    </Root>
  );
});

test('shows a comment box', () => {
  expect(screen.getByTestId('comment-box')).toBeInTheDocument();
});

test('shows a comment list by test Id', () => {
  expect(screen.getByTestId('comment-list')).toBeInTheDocument();
});
