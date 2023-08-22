import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {

    const {signUp,user,googleWithLogin} = useContext(AuthContext);
    console.log(user)
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [passShow, setPassShow] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = event=>{
        event.preventDefault();
        setError("");
        setSuccess("");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email,password,confirmPassword);

        //password validation
        if(!/(?=.*[a-z])/.test(password)){
            return setError("At least one lowercase character");
        }
        else if(!/(?=.*[A-Z])/.test(password)){
            return setError("At least one Uppercase character");
        }
        else if(!/(?=.*[0-9])/.test(password)){
            return setError("At least one Number character");
        }
        else if(password.length < 6){
            return setError("Minimum 6 characters");
        }
        if(password !== confirmPassword){
            return setError("Confirm Password wrong");
        }

        //User Create
        signUp(email,password)
        .then(result=>{
            const signdUp = result.user;
            console.log(signdUp);
            setSuccess("SignUp")
            form.reset();
            navigate("/login")
        })
        .catch(error=>{
            console.log(error.message);
            if(email){
                setError("Email is already taken")
            }
            
        })
    };

    const passwordToggle = ()=>{
        setPassShow(!passShow);
    };

    //gool=gle with login
    const googleSignUp = ()=>{
        googleWithLogin()
        .then(result=>{
            setSuccess("Google Sign Up Success");
            navigate("/login")
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


    return (
       
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-2">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passShow ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control password-icon">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type={passShow ? "text" : "password"} name="confirmPassword" placeholder="password" className="input input-bordered" required />
                            {
                                !passShow ? <span onClick={passwordToggle} className="icon">
                                    <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                                </span>:
                                <span onClick={passwordToggle} className="icon">
                                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                </span>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                            <NavLink to="/login" className="label-text-alt link link-hover text-center">Already have an  account?<span className="text-warning font-bold">Login</span>
                            </NavLink>
                            {/* <div className="divider">OR</div>
                            <button className="btn btn-outline btn-primary">Continue with Google</button> */}
                        </div>
                        
                    </form>
                    <div className="form-control">
                        <div className="divider">OR</div>
                        <button onClick={googleSignUp} className="btn btn-outline btn-primary">Continue with Google</button>
                    </div>
                    <div className="form-control">
                        <label className="label justify-center">
                            <span className="label-text">{error}</span>
                            <span className="label-text">{success}</span>
                            {/* {user.email} */}
                        </label>
                    </div>
                </div>
            </div>
        </div>
                
    );
};

export default SignUp;