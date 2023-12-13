import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image, NavLink, Row } from 'react-bootstrap';
import './intro.css';

const Intro = () => {
  const [content, setContent] = useState(null);
  const [activeButton, setActiveButton] = useState('Christmas Appeal');

  const handleChristmasAppeal = () => {
    const buttonStyle = {
      backgroundColor: 'rgb(255, 84, 54)',
      borderColor: 'rgb(255, 84, 54)',
    };
    setContent(
      <Card>
        <Card.Body style={{ backgroundColor: 'rgb(225,238,219)', }}>
          <Row className="align-items-center ">
            <Col>

              <Card.Title style={{ color: 'rgb(0,135,81)', fontSize: 70, marginBottom: '20px' }}>1 MILLION PARCELS</Card.Title>
              <Card.Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: '20px' }}>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>

              <Button variant='primary' style={buttonStyle}>Donate now</Button>

            </Col>
            <Col xs={6} md={3}>

              <Image src={require('../../assests/images/intro2.png')} />

            </Col>
          </Row>
        </Card.Body>
      </Card>


    );
    setActiveButton('Christmas Appeal');
  };
  const handlePetition = () => {
    const buttonStyle = {
      backgroundColor: 'rgb(255, 84, 54)',
      borderColor: 'rgb(255, 84, 54)',
    };
    setContent(
      <Card>
        <Card.Body style={{ backgroundColor: 'rgb(190,218,206)' }}>
          <Row className="align-items-center ">
            <Col >
              <Card.Title style={{ color: 'rgb(0,135,81)', fontSize: 70 }}>SIGN OUR PETITION</Card.Title>

              <Card.Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant='primary' style={buttonStyle}>Find out more</Button>
            </Col>
            <Col xs={6} md={3}>
              <Image src={require('../../assests/images/intro2.png')} />
            </Col>

          </Row>
        </Card.Body>
      </Card>
    );
    setActiveButton('Petition');
  };

  const handleGethelp = () => {
    const buttonStyle = {
      backgroundColor: 'rgb(255, 84, 54)',
      borderColor: 'rgb(255, 84, 54)',
    };
    setContent(
      <Card>
        <Card.Body style={{ backgroundImage: 'linear-gradient(to right, rgba(12,128,89,0.8), rgba(12,128,89,0.8)), url(https://www.trusselltrust.org/wp-content/uploads/sites/2/2014/12/man-at-foodbank-02.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
          <div>
            <Card.Title style={{ color: 'white', fontSize: 70 }}>GET HELP</Card.Title>
            <Card.Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, wordWrap: 'break-word' }}>
              If you’re worried about money and struggling to afford essentials,
              the free helplines below offer personalised support
            </Card.Text>

            <Button variant='primary' style={buttonStyle}>Get help</Button>
          </div>
        </Card.Body>
      </Card>
    );
    setActiveButton('Get help');
  };

  useEffect(() => {
    handleChristmasAppeal(); // Set Christmas Appeal content by default on component load
  }, []); 

  const navigationLinks = (
    <>
      <Col style={{ border: '2px solid', backgroundColor: activeButton === 'Christmas Appeal' ? 'rgb(0,135,81)' : 'rgb(93,166,84)', color: 'white', fontSize: '20px', textAlign: 'center' }}>
        <NavLink to="#" onClick={handleChristmasAppeal}>
          Christmas Appeal
        </NavLink>
      </Col>
      <Col style={{ border: '2px solid', backgroundColor: activeButton === 'Petition' ? 'rgb(0,135,81)' : 'rgb(93,166,84)', color: 'white', fontSize: '20px', textAlign: 'center' }}>
        <NavLink to="#" onClick={handlePetition} >
          Petition
        </NavLink>
      </Col>
      <Col style={{ border: '2px solid', backgroundColor: activeButton === 'Get help' ? 'rgb(0,135,81)' : 'rgb(93,166,84)', color: 'white', fontSize: '20px', textAlign: 'center' }}>
        <NavLink to="#" onClick={handleGethelp} >
          Get help
        </NavLink>
      </Col>
    </>
  );

  return (
    <>
      {content}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {navigationLinks}
      </div>
    </>
  );
};

export default Intro;
