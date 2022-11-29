import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router} from 'react-router-dom';
import { StoreProvider } from './Store.js';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <StoreProvider>
          <App />
        </StoreProvider>
      </Router>
    </React.StrictMode>
);
