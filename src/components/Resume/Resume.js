import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import './Resume.css';

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div id="resume">
        <Document
          file="assets/Resume_AlexHouse.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages ? numPages : '...'}</p>
      </div>
    );
  }
} export default Resume;