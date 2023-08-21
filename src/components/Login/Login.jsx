import { faEye, faEyeSlash, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [passShow, setPassShow] = useState(false);


  const passwordToggle =()=>{
    setPassShow(!passShow);
  }
  
  return (
       
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-2">Login!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control password-icon2">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                          <input type={passShow ? "text" : "password"} name='password' placeholder="password" className="input input-bordered"  required />
                          {
                            !passShow ? <span onClick={passwordToggle} className='icon2'>
                            <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                            </span>:
                            <span onClick={passwordToggle} className='icon2'>
                            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                            </span>
                          }
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <NavLink to="/signup" className="label-text-alt link link-hover text-center">New to Ema-Jhon?<span className="text-warning font-bold">Create New Account</span>
                        </NavLink>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline btn-primary">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  );

};

export default Login;

