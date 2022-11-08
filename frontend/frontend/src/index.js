import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
