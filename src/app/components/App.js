
import React, { Component, Fragment } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './app.scss';
import Header from './presentational/Header/Header';
import Main from './presentational/Main/Main';
import Footer from './presentational/Footer/Footer';
import HomePage from './container/HomePage/HomePage';
import ProductPage from './container/ProductPage/ProductPage';
import ProductsPage from './container/ProductsPage/ProductsPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/products/:id" exact component={ProductPage} />
            <Route path="/products" component={ProductsPage} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
