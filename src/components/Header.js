import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './styles/navlinks.module.css';

const NavLinks = () => {
  const activeStyle = {
    color: 'darkcyan',
    borderBottom: '2px solid',
    paddingBottom: '.2rem',
  };

  const separator = {
    border: '1px solid black',
    height: '15px',
  };
  return (
    <nav className={style.navigation}>
      <NavLink
        to="/"
      >
        {' '}
        Rockets
        {' '}
      </NavLink>
      <NavLink
        to="/mission"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {' '}
        Missions
        {' '}
      </NavLink>
      <div style={separator} />
      <NavLink
        to="/Profile"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {' '}
        My Profile
        {' '}
      </NavLink>
    </nav>
  );
};

export default NavLinks;
