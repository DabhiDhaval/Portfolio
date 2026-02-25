import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acservice from "../../Assets/Projects/acservice.png"; // Add your image here
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Projects</strong>
          </h1>

          <p style={{ color: "white", textAlign: "center" }}>
            Real-world projects showcasing my Cloud & DevOps skills.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={acservice}
                title="AC Service Management System"
                description="A web-based AC Service Management System designed to handle customer bookings, service tracking, and technician management. Built with structured backend logic and deployed using modern development practices."
                ghLink="https://github.com/DabhiDhaval/AC-Service"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Projects;