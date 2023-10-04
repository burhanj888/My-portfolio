import React from 'react';
import { Row, Col, Badge, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Projects.css'
import projectsData from './Projects.json' 

const ProjectsSection = () => {
    return (
        <div id='projects'>
        <Row className="projects-section mt-5">
            <Col xs={12} className="text-center mb-4">
                <h1 className="display-4">Projects</h1>
            </Col>

            {projectsData.map((project, index) => (
                <Col xs={12} sm={6} md={6} lg={3} key={index} className="mb-4">
                    <Card className="project-card">
                        <Card.Img variant="top" src={project.image} alt={project.title} className="project-image"/>
                        <Card.Body>
                            <Card.Title className="project-title">{project.title}</Card.Title>
                            <Card.Text className="project-description">{project.description}</Card.Text>
                            
                            <div className="project-skills-chips">
                                {project.skills.map((skill, idx) => (
                                    <Badge key={idx}  className="project-skill-chip">{skill}</Badge>
                                ))}
                            </div>
                            
                            <Button variant="dark" href={project.githubLink} target="_blank" className="github-btn">
                            <i className="fa fa-github badge-icon"></i> GitHub
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </div>
    );
};

export default ProjectsSection;
