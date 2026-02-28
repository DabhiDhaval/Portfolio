import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Home2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em", fontWeight: "700" }}>
                ABOUT <span className="purple">ME</span>
              </h1>

              <p className="home-about-body">
                   I am Dhaval Dabhi, a Cloud Engineering postgraduate student from Ahmedabad, Gujarat,
                   passionate about building scalable and secure cloud solutions.
                   <br /><br />
                       I have hands-on experience with <b className="purple">AWS, Docker, Kubernetes, and CI/CD automation</b>,
                       and I enjoy working on cloud infrastructure and deployment pipelines.
                   <br /><br />
                       I have built projects such as static website hosting on AWS (S3 & CloudFront)
                       and implemented automated CI/CD pipelines using GitHub Actions.
                   <br /><br />
                   I am currently seeking an <b className="purple">entry-level Cloud / DevOps Engineer role</b>
                   where I can apply my technical skills and grow in a real-world enterprise environment.
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
                transitionSpeed={2500}
              >
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          {/* Social Section */}
          <Row>
            <Col md={12} className="home-about-social">
              <h1>CONNECT WITH ME</h1>
              <p>
                Let's build something impactful together 🚀
              </p>

              <ul className="home-about-social-links">

                <motion.li className="social-icons" whileHover={{ scale: 1.2 }}>
                  <a
                    href="https://github.com/DabhiDhaval"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </motion.li>

                <motion.li className="social-icons" whileHover={{ scale: 1.2 }}>
                  <a
                    href="https://www.linkedin.com/in/dabhi-dhaval/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.li>

                <motion.li className="social-icons" whileHover={{ scale: 1.2 }}>
                  <a
                    href="https://www.instagram.com/dabhi_dhaval7"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </motion.li>

              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Home2;