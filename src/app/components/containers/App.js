import React, { Component, Fragment } from 'react';
import { Header } from '../presentational/Header/Header';
import { Main } from '../presentational/Main/Main';
import { connect } from 'react-redux';
import { changeBgColor } from '../../actions/appActions';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <h1>{this.props.app.bgColorClass}</h1>
                <button onClick={this.props.changeBgColor}>Change color</button>
                <Main color={this.props.app.bgColorClass} changeBgColor={this.props.changeBgColor}/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeBgColor: () => {
            dispatch(changeBgColor());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
