import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// SCSS
import 'reset-css/sass/_reset.scss';
import './app/components/app.scss';

// Components
import App from './app/components/App';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('app')
);
