import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

const Sidebar=() => {
    return (
        <nav className="sidebar" aria-label="Sidebar Navigation">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
                Home
            </NavLink>
            <NavLink to="/add-scenario" activeClassName="active" className="nav-link">
                Add Scenario
            </NavLink>
            <NavLink to="/all-scenarios" activeClassName="active" className="nav-link">
                All Scenarios
            </NavLink>
            <NavLink to="/add-vehicle" activeClassName="active" className="nav-link">
                Add Vehicle
            </NavLink>
        </nav>
    );
};

export default Sidebar;
