import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// SCSS
import 'reset-css/sass/_reset.scss';

// Components
import App from './app/components/App';

ReactDom.render(
  <HashRouter>
    <App />
  </HashRouter>
  , document.getElementById('app')
);
