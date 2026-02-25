import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud Engineer",
          "DevOps Engineer",
          "AWS Practitioner",
          "CI/CD Automation Specialist",
          "Docker & Kubernetes Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;