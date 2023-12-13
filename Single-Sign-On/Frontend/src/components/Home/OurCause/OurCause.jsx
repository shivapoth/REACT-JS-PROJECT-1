import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./ourcause.css";
import sliderImage from "../../assests/images/sliderimage.png";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import $ from "jquery";
// import "slick-carousel";

const OurCause = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div>
            <span className="text-emergency">
              We will create a UK without the need for emergency food
            </span>
            <p className="text-content">
              We support a nationwide network of food banks, and together we
              provide emergency food and support to people locked in poverty and
              campaign for change to end the need for food banks in the UK.
            </p>
            <div>
              <a
                className="schedule-button"
                href="https://www.trusselltrust.org/what-we-do/"
              >
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="arrow"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sliderImage} alt="Logo Here" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurCause;
