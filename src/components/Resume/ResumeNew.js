import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>

        {/* TITLE */}
        <Row className="justify-content-center text-center">
          <h1 className="resume-title">
            My <span className="purple">Resume</span>
          </h1>
        </Row>

        <Row className="justify-content-center mt-4">
        <Col md="auto">
        <a
          href={process.env.PUBLIC_URL + "/Dhaval_Dabhi_Resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-download-btn btn btn-outline-light"
        >
      <AiOutlineDownload /> &nbsp; Download Resume
    </a>
  </Col>
</Row>
        {/* CARD */}
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <div className="resume-card">

              <h3>Professional Summary</h3>
              <p>
                Cloud Engineering postgraduate specializing in AWS cloud
                architecture, Docker, Kubernetes, and CI/CD automation.
                Experienced in building scalable, secure, and production-ready
                cloud solutions for enterprise environments.
              </p>

              <h4 className="mt-4">Core Skills</h4>

              <div className="skill-tags">
                <span>AWS</span>
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>GitHub Actions</span>
                <span>Jenkins</span>
                <span>Linux</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Python</span>
              </div>

            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default ResumeNew;