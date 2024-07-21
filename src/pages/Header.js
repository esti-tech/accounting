import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex' }}>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/signin" activeClassName="active">
              Sign In
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/modules" activeClassName="active">
              Modules
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/features" activeClassName="active">
              Features
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/business-plan" activeClassName="active">
              Business Plan
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/action-plan" activeClassName="active">
              Action Plan
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/payroll" activeClassName="active">
              Payroll
            </NavLink>
          </li>
          <li style={{ margin: '0 10px' }}>
            <NavLink to="/role-management" activeClassName="active">
              Role Management
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;