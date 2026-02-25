import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhaval Dabhi</span> 
            from <span className="purple">  Ahmedabad, Gujarat, India.</span>
            <br />
            <br />
            I am a Cloud Engineering postgraduate student specializing in
            <b> AWS Cloud Architecture, Docker, Kubernetes, and CI/CD Automation.</b>
            <br />
            <br />
            I build scalable, secure, and production-ready cloud solutions.
            I also have foundational knowledge in Artificial Intelligence and Large Language Models (LLMs).
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> AWS (EC2, S3, IAM, VPC, CloudFront, CloudWatch)
            </li>
            <li className="about-activity">
              <ImPointRight /> Docker & Kubernetes
            </li>
            <li className="about-activity">
              <ImPointRight /> CI/CD with GitHub Actions & Jenkins
            </li>
            <li className="about-activity">
              <ImPointRight /> Linux (Ubuntu) & Cloud Security
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;