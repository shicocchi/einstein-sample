import React, { Component } from 'react';
//import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
//import Avatar from 'material-ui/Avatar';
//import Chip from 'material-ui/Chip';
import injectTapEventPlugin from "react-tap-event-plugin";

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

class Counter extends Component {
    static CLASS_NAME = 'Counter';

    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }

    onClickUpButton() {
        this.setState({ count : this.state.count + 1 });
    }

    onClickDownButton() {
        this.setState({ count : this.state.count - 1 });
    }

    render() {
        const { count } = this.state;
        return (
            <MuiThemeProvider>
                <div className={Counter.CLASS_NAME}>
                    <p>
                        <button type="button" className={`${Counter.CLASS_NAME}__up Button`}   onClick={this.onClickUpButton.bind(this)}>+</button>
                        <button type="button" className={`${Counter.CLASS_NAME}__down Button`} onClick={this.onClickDownButton.bind(this)}>-</button>
                    </p>
                    <p>
                        <span className={`${Counter.CLASS_NAME}__count`}>{count}</span>
                    </p>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Counter;
