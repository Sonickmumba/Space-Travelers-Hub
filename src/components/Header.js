import React from "react";
import image from './planet.png';
import NavLinks from './NavLinks';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '4.938rem',
    margin: '0 0 2.375rem',
    padding: '1.438rem 6.188rem 1.688rem 4.85rem',
    backgroundColor: '#fff',
    border: 'solid 1px #e8e8e8',
  };

  const headerTitleStyle = {
    width: '20rem',
    height: '2.313rem',
    margin: '0.375rem 2.538rem 0.125rem 0',
    fontFamily: 'Montserrat',
    fontSize: '1.875rem',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lingHeight: 'normal',
    letterSpacing: 'normal',
  };

  const logoContainerStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  }

  const imageStyle = {
    width: '100px',
    height: '100px',
  }
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={image} alt="logo" style={imageStyle} />
        <h1 style={headerTitleStyle}>Space Travelers' Hub</h1>
      </div>
      <NavLinks />
    </header>
  )
};

export default Header;