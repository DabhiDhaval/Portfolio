import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">

            {/* LEFT SIDE */}
            <Col md={7} className="home-header">

              <motion.h1
                className="heading"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm
              </motion.h1>

              <motion.h1
                className="heading-name"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <strong className="main-name">
                  Dhaval Dabhi
                </strong>
              </motion.h1>

              {/* Typing Animation */}
              <div style={{ paddingTop: 25 }}>
                <Type />
              </div>

              {/* Tagline */}
              <p className="hero-tagline mt-3">
                Building Scalable & Secure Cloud Infrastructure with AWS & DevOps
              </p>

            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col md={5} className="text-center">
              <motion.img
                src={homeLogo}
                alt="home"
                className="img-fluid hero-img"
                style={{ maxHeight: "420px" }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              />
            </Col>

          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;