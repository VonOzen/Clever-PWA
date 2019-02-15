import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
    render () {
        return (
            <main className={this.props.app.bgColorClass}>
                <button onClick={this.props.changeBgColor}>Toggle Background</button>
            </main>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        app: state.appReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeBgColor: () => {
            dispatch({
                type: "CHANGE_BGCOLOR",
                payload: 'purple'
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
