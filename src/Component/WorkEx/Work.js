import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import WorkEx from './Experience.json'
import './Work.css'

const WorkExperience = () => {
  return (

    <div id='work-ex'>
    <Row className="work-experience-section mt-5">
      <Col xs={12} className="text-center mb-4">
        <h1 className="display-4">Work Experience</h1>
      </Col>
      {WorkEx.map((exp, index) => (
      <Col xs={12} md={12} lg={12} key={index} className="mb-4 work-block">
        <Row>
            <Col xs={11} md={3} lg={3} className='ms-4 d-flex align-items-center justify-content-center'>
            <img src={require(`../../images/${exp.companyIcon}`)} alt={exp.company} className="company-icon img-fluid"/>
            </Col>
            <Col xs={12} md={8} lg={8}>
            <div className="ms-4 me-4 text-section">
            <div className="header-section">
              <h3 className="position-title">{exp.position}</h3>
              <span className="timeline">{exp.timeline}</span>
            </div>
            <p className="company-name"><strong>{exp.company}</strong></p>
            <ul className="work-points">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="skills-chips">
              {exp.skills.map((skill, idx) => (
                <Badge key={idx} variant="secondary" className="skill-chip">{skill}</Badge>
              ))}
            </div>
          </div>
            </Col>
        </Row>
    </Col>

      
        
          
          
      ))}
    </Row>
    </div>
  );
}

export default WorkExperience;
