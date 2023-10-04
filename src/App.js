import CenteredHello from './Component/Hero/Hero';
import StickyNavbar from './Component/Navbar/StickyNavbar';
import logo from './logo.svg';
import { Container, Row, Col } from 'react-bootstrap';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Component/ProfileSidebar/Sidebar';
// import ComponentA from './Component/About/About';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio></Portfolio>}></Route>
      </Routes>
    </Router>
    // <div>
    //   <CenteredHello></CenteredHello>
    //   <StickyNavbar></StickyNavbar>
    //   <Container fluid>
    //   <Row>
    //     <Col md={3} className="sidebar pt-5">
    //       <Profile />
    //     </Col>
    //     <Col md={9} className="scrollable-content pt-5">
    //       <ComponentA />
          
    //     </Col>
    //   </Row>
    // </Container>
      
      
    // </div>
  );
}

export default App;
