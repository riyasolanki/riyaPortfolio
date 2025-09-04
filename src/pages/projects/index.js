import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Projects = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Section Header */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Project Grid */}
        {/* Project Grid */}
        <div className="mb-5 po_items_ho">
          <Row>
            {dataportfolio.map((data, i) => (
              <Col
                key={i}
                lg={4}   // 3 columns on large screens
                md={6}   // 2 columns on medium screens
                sm={12}  // 1 column on small screens
                className="d-flex align-items-stretch mb-4"
              >
                <div className="po_item text-center w-100">
                  <img
                    src={data.img}
                    alt={data.title || "project"}
                    className="img-fluid mb-3 project-img"
                  />
                  <h5>{data.title}</h5>
                  <Button variant="primary" onClick={() => handleShow(data)}>
                    View Project
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>


        {/* Modal */}
        {selectedProject && (
          <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="img-fluid mb-3"
              />
              <p style={{ whiteSpace: "pre-line" }}>
                {selectedProject.description}
              </p>
              {selectedProject.storeLink && (
                <Button
                  variant="success"
                  href={selectedProject.storeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2"
                >
                  Play Store Link
                </Button>
              )}
              {selectedProject.appLink && (
                <Button
                  variant="success"
                  href={selectedProject.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store Link
                </Button>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </HelmetProvider>
  );
};
