import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Muhammad Taimoor</span>{" "}
            from <span className="purple">Pakistan</span>.
            <br />
            Software Engineer specializing in AI, deep learning, and full-stack
            development. I love turning real-world problems into scalable,
            intelligent products.
            <br />
            <br />
            I’m currently an <span className="purple">LLM Intern</span> at{" "}
            <span className="purple">Skylabs.ai</span>, where I build autonomous
            agents, refine data pipelines, and engineer prompts to improve model
            reasoning.
            <br />
            <br />
            I co-created the <span className="purple">GIKI Bus Ticket Reservation System</span>,
            replacing a manual process for 2,300+ students and staff with a
            seamless digital experience and real-time admin controls.
            <br />
            <br />
            I’m pursuing a <span className="purple">Bachelors in Computer Science</span> at the
            <span className="purple">
              {" "}
              Ghulam Ishaq Khan Institute (GIKI)
            </span>
            , CGPA 3.54, with coursework in DSA, OOP, DBMS, DevOps, AI, and OS.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Taimoor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
