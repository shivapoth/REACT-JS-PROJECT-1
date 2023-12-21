import React, { useRef } from 'react';
import { Card, Container } from 'react-bootstrap';
import backgroundImage from '../../assests/images/map.png';

const SearchMap = () => {
  const mapRef = useRef(null);

  const handleSearch = () => {
    const input = document.getElementById('search-input').value;
    // Use the Geocoding service to get the coordinates for the searched location
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: input }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        const map = new window.google.maps.Map(mapRef.current, {
          center: location,
          zoom: 15,
        });
        new window.google.maps.Marker({ position: location, map: map });
      } else {
        alert('Location not found');
      }
    });
  };

  const containerStyle = {
    backgroundImage: `linear-gradient(to right, rgba(12,128,89,0.8), rgba(12,128,89,0.8)),url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px', display: 'flex', alignItems: 'center', padding: '0 20px'
  };

  return (
    <Container>
      <Card style={containerStyle}>

        <input id="search-input" type="text" placeholder="Enter a location" />
        <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>

        <div ref={mapRef} style={{ width: '100%', height: '100px' }}></div>
        <div>hii</div>
<div>hiiii</div>
<div>sai</div>
        <div>hii</div>
      </Card>
    </Container>
  );
};

export default SearchMap;
