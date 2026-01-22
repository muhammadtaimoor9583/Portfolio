import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/MyImage.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Software Engineer focused on AI, deep learning, and building
              scalable products that solve real-world problems. I enjoy
              shaping ML systems end-to-end—from data curation and prompt
              engineering to deploying reliable user experiences.
              <br />
              <br />
              Currently an LLM Intern at Skylabs.ai, where I design autonomous
              AI agents, craft data pipelines, and optimize prompts to reduce
              manual work and strengthen model reasoning.
              <br />
              <br />
              I co-created the GIKI Bus Ticket Reservation System, replacing a
              manual process for 2,300+ students and staff with a simple
              reservation experience and real-time admin controls.
              <br />
              <br />
              I like building with
              <i>
                <b className="purple"> JavaScript, Python, Golang, React.js</b>
              </i>
              <b className="purple">, Node.js,</b> and
              <i>
                <b className="purple"> PostgreSQL</b>
              </i>
              , and I lean on frameworks and libraries like
              <i>
                <b className="purple"> Express, Tailwind, PyTorch,</b>
              </i>
              and
              <i>
                <b className="purple"> TensorFlow </b>
              </i>
              to ship fast.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="avatar-wrapper">
                <img
                  src={myImg}
                  className="img-fluid avatar-img"
                  alt="avatar"
                />
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
