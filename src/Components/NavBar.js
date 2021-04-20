import React from 'react';
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div className="NavBar">
      <div className="profile">
        <img src={avatar} alt=""/>
      </div>
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-items">
            <NavLink to='/' exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to='/about' exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to='/portfolios' exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to='/blogs' exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to='/contact' exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="footer">
        <p>
          @2021 Lorem Ipsum 
        </p>
      </footer>
    </div>
  )
}

export default Navbar;