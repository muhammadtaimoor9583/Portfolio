import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer (AI/ML)",
          "LLM Engineer",
          "Full-Stack Developer",
          "React & Node.js Builder",
          "Golang Backend Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
