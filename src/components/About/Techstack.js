import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiAmazonaws,
  SiGithubactions,
  SiLinux,
  SiMysql,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>

    </Row>
  );
}

export default Techstack;