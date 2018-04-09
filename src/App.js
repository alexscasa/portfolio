import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid } from 'react-bootstrap';

import PageLink from './containers/PageLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid={true}>
          <div className="App">
            <PageLink />
          </div>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
