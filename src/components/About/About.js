import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
import { motion } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row className="align-items-center pt-5">

          {/* LEFT SIDE TEXT */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="about-heading">
                About <span className="purple">Me</span>
              </h1>

              <p className="about-description">
               I am <span className="purple">Dhaval Dabhi</span>, a highly motivated Cloud Engineering 
               postgraduate student from Ahmedabad, Gujarat.
              </p>

              <p className="about-description">
              I specialize in <b>AWS cloud architecture, containerization (Docker & Kubernetes), 
              and CI/CD automation</b>, with hands-on experience in building scalable, 
              cost-efficient, and production-ready cloud solutions.
              </p>

              <p className="about-description">
              I have worked on real-world projects including automated CI/CD pipelines 
              using GitHub Actions and static website hosting on AWS (S3 & CloudFront). 
              I am currently seeking an entry-level <b>Cloud / DevOps Engineer</b> role 
              where I can apply my technical skills in enterprise environments and 
              continuously grow as a cloud professional.
              </p>

              <div className="highlight-box mt-4">
                <ul>
                  <li>☁ AWS (EC2, S3, IAM, VPC, CloudFront, CloudWatch)</li>
                  <li>🐳 Docker & Kubernetes</li>
                  <li>⚙ CI/CD (GitHub Actions & Jenkins)</li>
                  <li>🖥 Linux (Ubuntu) & Cloud Security</li>
                </ul>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={5} className="text-center">
            <motion.img
              src={laptopImg}
              alt="about"
              className="img-fluid about-img"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Col>

        </Row>

        {/* SKILLS SECTION */}
        <h1 className="section-title mt-5">
          Professional <span className="purple">Skillset</span>
        </h1>

        <Techstack />

        {/* TOOLS SECTION */}
        <h1 className="section-title mt-5">
          Tools I <span className="purple">Use</span>
        </h1>

        <Toolstack />

        {/* GITHUB SECTION */}
        

      </Container>
    </Container>
  );
}

export default About;