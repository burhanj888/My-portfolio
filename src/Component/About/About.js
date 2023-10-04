import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import skillsData from './SkillsData.json';
import './About.css'

const AboutMe = () => {
  return (
    <Container fluid className="about-me-section mt-5" id='about-me'>
      <Row className="intro-section">
    <Col xs={12} md={8} lg={8} className="mx-auto text-center p-5 intro-col">
        <h1 className="display-4 mb-3">About Me</h1>
        <h3 className="mb-4 intro-heading">Crafting Code, One Block at a Time</h3>
        <p className="intro-text">
            Hello👋! I'm a passionate Full Stack Developer and Blockchain Enthusiast who's always eager to dive deep into new challenges. Leveraging code to create impactful solutions is my mantra.
        </p>
    </Col>
</Row>

      
<Row className="education-section">
    <Col xs={12}>
        <h2 className="display-3 mb-4">Education</h2>
    </Col>

    {/* First Education */}
    <Col xs={12} md={6} className="education-entry">
        <Row>
            <Col xs={4} md={3}>
                <img src={require("../../images/NU Logo.png")} alt="Northeastern University Logo" className="img-fluid university-logo" />
            </Col>
            <Col xs={8} md={9}>
                <h4 className="education-title"><strong>Master of Science in Information Systems</strong></h4>
                <p className="education-text"><strong>Northeastern University, Boston</strong></p>
                <p className="education-text date-text">2022-2024</p>
                <p className="education-text">Major: Full-Stack Software Engineering,<br /> Cryptocurrency and Smart Contract Engineering</p>
            </Col>
        </Row>
    </Col>

    {/* Second Education */}
    <Col xs={12} md={6} className="education-entry">
        <Row>
            <Col xs={4} md={3}>
                <img src={require("../../images/BIT.png")} alt="Birla Institute of Technology Logo" className="img-fluid university-logo" />
            </Col>
            <Col xs={8} md={9}>
                <h4 className="education-title"><strong>Bachelor of Computer Applications</strong></h4>
                <p className="education-text"><strong>Birla Institute of Technology, Jaipur</strong></p>
                <p className="education-text date-text">2019-2022</p>
                <p className="education-text">Major: Computer Software Engineering</p>
            </Col>
        </Row>
    </Col>
</Row>

      
<Row className="skills-section">
  <Col xs={12} className="text-center mb-4">
    <h3 className="display-3 mb-4">Technical Skills</h3>
  </Col>
  <Col xs={12}>
    <Row>
      {skillsData.map((skill, index) => (
        <Col xs={4} md={3} lg={2} key={index} className="mb-2">
          <Card className="skill-card text-center">
            <Card.Img variant="top" src={require(`../../images/${skill.icon}`)} className="skill-icon"/>
            <Card.Body>
              <Card.Title className="skill-title">{skill.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Col>
</Row>

    </Container>
  );
};

export default AboutMe;
