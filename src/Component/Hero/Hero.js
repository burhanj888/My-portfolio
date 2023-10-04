import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const scrollTo = (componentId) => {
    document.getElementById(componentId).scrollIntoView({ behavior: "smooth" });
  };

const Wrapper = styled(Container)`
  height: 100vh;
  background: linear-gradient(135deg, #0F3443 0%, #34E89E 100%); // Creative gradient background
`;

const CenteredRow = styled(Row)`
  height: 100%;
  align-items: center; // Vertical alignment
  justify-content: center; // Horizontal alignment
`;

const TextWrapper = styled.div`
  text-align: left;
  line-height: 1;
  margin: auto; // Ensuring that the TextWrapper is centered
`;

const HelloText = styled.div`
  font-size: 12vw;
  font-family: 'Alfa Slab One', cursive;
  margin: 0;
  padding: 0;
  line-height: 1;
  color: white;

  @media (min-width: 992px) {  // Bootstrap's LG breakpoint
    font-size: 12rem;  // Size for larger screens
  }
`;

const SubTitle = styled.div`
  margin-top: 1vw;
  font-size: 2vw;
  color: white;
  font-family: 'Alfa Slab One', cursive;
  @media (min-width: 992px) {
    font-size: 2rem;
  }
`;

const CenteredButton = styled(Button)`
margin-top: 2vw;
font-size:1.3vw;
display: block;
margin-left: auto;
margin-right: auto;
background-color: transparent;
border-color: white;
color: white;
width: 100%;
max-width: inherit;  // Ensure button width matches its container (subtitle) width

&:hover,
&:focus {
  background-color: rgba(255, 255, 255, 0.2); // Slight background on hover/focus for better UX
  border-color: white;
  color: white;
  outline: none;
}
`;

const CenteredHello = () => (
  <Wrapper fluid>
    <CenteredRow className="d-flex">
      <Col xs={4} md={4} lg={4} sm={4}>
        <TextWrapper>
          <HelloText>HE</HelloText>
          <HelloText>LLO</HelloText>
          <SubTitle>Glad To See You Here</SubTitle>
          <CenteredButton variant="primary" onClick={() => scrollTo("me")}>Check My Portfolio</CenteredButton>
        </TextWrapper>
      </Col>
    </CenteredRow>
  </Wrapper>
);

export default CenteredHello;
