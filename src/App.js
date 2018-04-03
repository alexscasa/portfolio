import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row } from 'react-bootstrap';

import PageLink from './containers/PageLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid={true}>
          <div className="App">
            <Row>
              <header className="App-header">
                <h1 className="App-title">Alex House's Portfolio</h1>
              </header>
            </Row>
            <PageLink />
          </div>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
