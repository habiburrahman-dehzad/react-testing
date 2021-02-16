import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';
import { FETCH_COMMENTS_URL } from 'store/actions/commentActions';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(FETCH_COMMENTS_URL, {
    status: 200,
    response: [{ name: 'comment #1' }, { name: 'comment #2' }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('fetches a list of comments and displays them', (done) => {
  render(
    <Root>
      <App />
    </Root>
  );

  const fetchBtn = screen.getByText('Fetch Comments');
  userEvent.click(fetchBtn);

  moxios.wait(() => {
    const items = screen.getAllByRole('listitem');
    expect(items.length).toEqual(2);

    done();
  });
});
