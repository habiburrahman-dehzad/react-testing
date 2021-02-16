import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Root from './Root';
import App from './components/App';

ReactDOM.render(
  <Root>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Root>,
  document.getElementById('root')
);
