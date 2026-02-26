import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <Container fluid className="home-section">
        <Particle />

        <Container className="home-content d-flex align-items-center">
          <Row className="align-items-center w-100">

            {/* LEFT SIDE */}
            <Col md={7} className="home-header text-md-start text-center">

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
                <span className="main-name">
                  Dhaval Dabhi
                </span>
              </motion.h1>

              <div className="type-container">
                <Type />
              </div>

              <p className="hero-tagline">
                Building Scalable & Secure Cloud Infrastructure with AWS & DevOps
              </p>

            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col md={5} className="text-center mt-4 mt-md-0">
              <motion.img
                src={homeLogo}
                alt="home"
                className="img-fluid hero-img"
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