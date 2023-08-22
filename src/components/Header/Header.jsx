import { useContext, useState } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);


    const handleLogOut = ()=>{
                logOut()
                .then(result=>{
        
                })
                .catch(error=>{
                    console.log(error.message);
                })
            }

    return (
        <nav className="navbar bg-primary text-primary-content flex items-center justify-between flex-wrap p-4">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-20">
                <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                    <svg className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                <div className="text-sm lg:flex-grow">
                    
                    <NavLink to="/" className="text-xl text-white block  lg:inline-block lg:mt-0a mr-4 py-2 px-4 rounded hover:bg-blue-900">Shope</NavLink>
                    <NavLink to="/orders" className="text-xl text-white block  lg:inline-block lg:mt-0a mr-4 py-2 px-4 rounded hover:bg-blue-900">Orders</NavLink>
                    <NavLink to="/inventory" className="text-xl text-white block  lg:inline-block lg:mt-0a mr-4 py-2 px-4 rounded hover:bg-blue-900">Inventory</NavLink>
                    
                </div>
                <div className=''>
                    <NavLink to="/signup" className="text-xl text-white block  lg:inline-block lg:mt-0a mr-4 py-2 px-4 rounded hover:bg-blue-900">Sign Up</NavLink>
                    
                    {
                        user ? <button onClick={handleLogOut} className="text-xl text-white block lg:inline-block lg:mt-0a mr-4 py-2 px-4 rounded hover:bg-blue-900">Logout</button>
                        :
                        <NavLink to="/login" className="text-xl text-white block lg:inline-block lg:mt-0a mr-4 py-2 px-4 rounded hover:bg-blue-900">Login</NavLink>
                            
                    }
                       
                </div>
            </div>
        </nav>
      );
};

export default Header;