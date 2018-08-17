import React from 'react';
import { Document, Page } from 'react-pdf';
import { Button } from 'react-bootstrap';

import './Resume.css';

class Resume extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const resumeURL = "/assets/Resumes/AlexHouse_" +this.props.match.params.name.replace(/-/g, '') + '.pdf';
    const styles = {
      margin: 'auto',
      width: '50%'
    };

    return (
      <div id="content">
        <Document
          className='resume'
          file={resumeURL}
          onLoadSuccess={this.onDocumentLoad}
          style={styles}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages ? numPages : '...'}</p>
        <Button href={resumeURL} target="_blank" rel="noopener noreferrer">
          Open in New Tab
        </Button>
      </div>
    );
  }
} export default Resume;