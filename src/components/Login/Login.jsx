import { faEye, faEyeSlash, faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

  const {login} = useContext(AuthContext);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [passShow, setPassShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  

  const handleLogin = event=>{
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    //login user
    login(email,password)
    .then(result=>{
      const logged = result.user;
      console.log(logged);
      setSuccess("Login Success");
      navigate(from, {replace:true});
    })
    .catch(error=>{
      console.log(error.message);
      setError("Invalid Email or Password")
    })
  }


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
                <form onSubmit={handleLogin} className="card-body">

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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

                  <div className="form-control">
                    <label className="label justify-center">
                      <span className="label-text">{error}</span>
                      <span className="label-text">{success}</span>
                    </label>
                  </div>
                   
                </form>
            </div>
        </div>
    </div>
            
  );

};

export default Login;

