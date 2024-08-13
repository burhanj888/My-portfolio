// src/components/Profile.js
import React from 'react';
import { Image, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './Sidebar.css'

function Profile() {
  return (
    <div className="d-flex flex-column align-items-center mt-5" id='me'>
      <Image src={require("../../images/Profile picture.png")} roundedCircle width={200} />
      <h4 className="mt-3 mb-2">Burhanuddin Jinwala</h4>
      <div className="mt-5">
      <div className="badge-wrapper">
          <a href="Software engineering Burhanuddin Jinwala.pdf" download="resume_Burhanuddin_Jinwala" target="_blank" className="badge-custom">
            <i className="fa fa-download badge-icon"></i>
            Resume
          </a>
        </div>
        <div className="badge-wrapper">
          <a href="https://github.com/burhanj888" target="_blank" className="badge-custom">
            <i className="fa fa-github badge-icon"></i>
            GitHub
          </a>
        </div>
        <div className="badge-wrapper">
          <a href="https://www.linkedin.com/in/burhanuddin-jinwala/" target="_blank" className="badge-custom">
            <i className="fa fa-linkedin badge-icon"></i>
            LinkedIn
          </a>
        </div>
        <div className="badge-wrapper">
          <a href="https://twitter.com/burhanj888" target="_blank" className="badge-custom">
            <i className="fa fa-twitter badge-icon"></i>
            Twitter
          </a>
        </div>
        <div className="badge-wrapper">
          <a href="mailto: burhanj888@gmail.com" className="badge-custom">
            <i className="fa fa-envelope badge-icon"></i>
            Mail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
