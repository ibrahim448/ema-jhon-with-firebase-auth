import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content d-flex justify-between">
            <img src={logo} alt="" />
            <div>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl text-white">Shope</NavLink>
                <NavLink to="/orders" className="btn btn-ghost normal-case text-xl text-white">Orders</NavLink>
                <NavLink to="/inventory" className="btn btn-ghost normal-case text-xl text-white">Inventory</NavLink>
                <NavLink to="/login" className="btn btn-ghost normal-case text-xl text-white">Login</NavLink>
                <NavLink to="/signup" className="btn btn-ghost normal-case text-xl text-white">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Header;