import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation.js';

import './App.css';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
