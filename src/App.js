import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import MainSection from './MainSection';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <MainSection />
          <Counter />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
