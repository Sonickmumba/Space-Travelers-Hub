import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const navStyle = {
    display: 'flex',
    listStyleType: 'none',
  };

  const line = {
    borderRight: '2px solid black',
    marginRight: '2.563rem',
    marginLeft: '2.563rem',
  };
  return (
    <nav id="navbar-container">
      <ul style={navStyle}>
        <li className="nav-link">
          <NavLink to="/" id="navLink" activeClassName="active">Rockets</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/mission" activeClassName="active">Missions</NavLink>
        </li>
        <span style={line} />
        <li className="nav-link">
          <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
