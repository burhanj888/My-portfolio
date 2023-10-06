import CenteredHello from './Component/Hero/Hero';
import StickyNavbar from './Component/Navbar/StickyNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/ProfileSidebar/Sidebar';
import 'font-awesome/css/font-awesome.min.css';
import AboutMe from './Component/About/About';
import 'font-awesome/css/font-awesome.min.css';
import WorkExperience from './Component/WorkEx/Work';
import ProjectsSection from './Component/Projects/Projects';
import BlogSection from './Component/Blogs/Blogs';
import ConnectWithMe from './Component/Connect/Connect';

function App() {
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
    </div>
    
  );
}

export default App;
