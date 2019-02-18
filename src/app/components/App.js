import React, { Component, Fragment } from 'react';
import './app.scss';
import Main from './presentational/Main/Main';
import Footer from './presentational/Footer/Footer';

class App extends Component {
  render () {
    return (
      <Fragment>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
