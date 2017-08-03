import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
    appBar: {
        flexWrap: 'wrap',
    },
    tabs: {
        width: '100%',
    }
};

class Header extends Component {
  render() {
    return (
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" style={styles.appBar} >
            <Tabs style={styles.tabs}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
            </Tabs>
        </AppBar>
    );
  }
}

export default Header;