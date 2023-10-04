import CenteredHello from './Component/Hero/Hero';
import StickyNavbar from './Component/Navbar/StickyNavbar';
import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/ProfileSidebar/Sidebar';
import AboutMe from './Component/About/About';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkExperience from './Component/WorkEx/Work';
import ProjectsSection from './Component/Projects/Projects';
import BlogSection from './Component/Blogs/Blogs';
import ConnectWithMe from './Component/Connect/Connect';

function Portfolio() {
  return (
    <div>
      <CenteredHello></CenteredHello>
      <StickyNavbar></StickyNavbar>
      <Container fluid>
      <Row>
        <Col md={3} className="sidebar pt-5">
          <Profile />
        </Col>
        <Col md={9} className="scrollable-content pt-5">
          <AboutMe />
          
          <WorkExperience></WorkExperience>
          
          <ProjectsSection></ProjectsSection>
          
          <BlogSection></BlogSection>
          <ConnectWithMe></ConnectWithMe>
        </Col>
      </Row>
    </Container>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    {/* </div> */}
    {/* <div> */}
      
      {/* Rest of your components */}
    </div>
  );
}

export default Portfolio;
