import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Blogs.css'

const BlogSection = () => {
    return (
        <div id='blogs'>
        <Row className="blog-section mt-5">
            <Col xs={12} className="text-center">
                <h1 className="display-4">Blogs</h1>
                <h3 className="coming-soon">Coming Soon</h3>
            </Col>
        </Row>
        </div>
    );
};

export default BlogSection;
