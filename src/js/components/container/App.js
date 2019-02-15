import React, { Component, Fragment } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        );
    }
}

export default App;
