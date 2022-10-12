import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const navStyle = {
    display: 'flex',
    listStyleType: 'none',
  };
  const navLink = {
    textDecoration: 'none',
    width: '3.688rem',
    height: '1rem',
    margin: '1.125rem 2.563rem 0.688rem 0',
    fontSize: '1rem',
    letterSpacing: '1.9px',
    color: '#0290ff',
  };

  const line = {
    borderRight: '2px solid black',
    marginRight: '2.563rem',
  };
  return (
    <nav id="navbar-container">
      <ul style={navStyle}>
        <li className="nav-link">
          <NavLink to="/" style={navLink} id="navLink">Rockets</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/mission" style={navLink}>Missions</NavLink>
        </li>
        <span style={line} />
        <li className="nav-link">
          <NavLink to="/profile" style={navLink}>My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
