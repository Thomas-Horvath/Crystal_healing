import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>Főoldal</NavLink>
      <NavLink to="/crystals">Kristályok</NavLink>
      <NavLink to="/physical-illnesses">Fizikai betegségek</NavLink>
      <NavLink to="/mental-illnesses">Lelki betegségek</NavLink>
    </nav>
  );
}

export default Navigation;
