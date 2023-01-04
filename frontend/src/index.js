import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';
import generateStore from './redux/store.js';
const store = generateStore();

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </React.StrictMode>
);
