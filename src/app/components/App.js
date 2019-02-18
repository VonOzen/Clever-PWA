
import React, { Component, Fragment } from 'react';
import './app.scss';
import Header from './presentational/Header/Header';
import Main from './presentational/Main/Main';
import Footer from './presentational/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
