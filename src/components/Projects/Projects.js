import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gikiTransport from "../../Assets/Projects/chatify.png";
import rssAggregator from "../../Assets/Projects/codeEditor.png";
import trashClassifier from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gikiTransport}
              isBlog={false}
              title="GIKI Transport System"
              description="Campus-wide bus reservation platform built with React.js, Tailwind CSS, Django, and PostgreSQL. Successfully replaced the manual system, serving 2,300+ students and employees. Features instant ticket reservations, real-time fleet management through an interactive Admin Panel, and eliminates physical queuing with a user-friendly interface."
              ghLink="https://github.com/muhammadtaimoor9583"
              demoLink="https://giktransport.giki.edu.pk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rssAggregator}
              isBlog={false}
              title="RSS Feed Aggregator Platform"
              description="High-performance content aggregator built with Golang, React.js, and PostgreSQL. Features an efficient RSS parsing engine using Goose for reliable feed content persistence. Empowers users to curate personalized knowledge streams through an intuitive dashboard with dynamic categorization and real-time search capabilities."
              ghLink="https://github.com/muhammadtaimoor9583/rss-feed-aggregator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trashClassifier}
              isBlog={false}
              title="Trash Classification Using SVM"
              description="Automated waste segregation pipeline using Support Vector Machines (SVM) to classify objects into six distinct categories. Processed 2,500+ samples from TrashNet dataset using Histogram of Oriented Gradients (HOG) for feature extraction. Achieved 98% accuracy through exhaustive hyperparameter optimization with Grid Search."
              ghLink="https://github.com/muhammadtaimoor9583/Trash-Classification-Using-Support-Vector-Machines-SVM---AI-351-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
