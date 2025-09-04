import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import myResume from "../../assets/riyaSolanki.pdf";
// PDF Viewer
import { Document, Page, pdfjs } from "react-pdf";

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Setup worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };


  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Resume</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page Title */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Resume PDF Viewer */}
        <Row className="mt-5">
          <Col lg="12" className="text-center">
            <div className="d-flex justify-content-center">
              <Document
                file={myResume}
                onLoadSuccess={onDocumentLoadSuccess}
                loading="Loading PDF..."
              >
                <Page pageNumber={pageNumber} width={1000} />
              </Document>

            </div>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <div className="mb-3">
              {pageNumber > 1 && (
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => setPageNumber(pageNumber - 1)}
                >
                  Previous
                </button>
              )}
              {pageNumber < numPages && (
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => setPageNumber(pageNumber + 1)}
                >
                  Next
                </button>
              )}
            </div>
            <div className="resume-button-container">
              <a
                href="/assets/riyaSolanki.pdf"
                download="Riya_Solanki_Resume.pdf"
                className="btn btn-primary"
              >
                Download Resume PDF
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
