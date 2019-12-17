import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
  color: 'black',
};

const Nav = () => (
  <ul>
    <li>
      <NavLink to="/" exact activeStyle={active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies" activeStyle={active}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
