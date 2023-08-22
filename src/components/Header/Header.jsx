import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
        logOut()
        .then(result=>{

        })
        .catch(error=>{
            console.log(error.message);
        })
    }
 

    return (
        <div className="navbar bg-primary text-primary-content d-flex justify-between">
            <img src={logo} alt="" />
            <div>
                <NavLink to="/" className= {({ isActive}) => isActive ? "active btn btn-ghost normal-case text-xl text-white" : "undefined btn btn-ghost normal-case text-xl text-white" }>Shope</NavLink>
                <NavLink to="/orders" className="btn btn-ghost normal-case text-xl text-white">Orders</NavLink>
                <NavLink to="/inventory" className="btn btn-ghost normal-case text-xl text-white">Inventory</NavLink>
                <NavLink to="/signup" className="btn btn-ghost normal-case text-xl text-white">Sign Up</NavLink>
                
                    {
                        user ? <div>
                            {/* <span>{user.email}</span> */}
                            <NavLink to="/" onClick={handleLogOut} className="btn btn-ghost normal-case text-xl text-white">Logout</NavLink>
                        </div>:
                        <NavLink to="/login" className="btn btn-ghost normal-case text-xl text-white">Login</NavLink>
                    }
                
            </div>
        </div>
    );
};

export default Header;
// className=