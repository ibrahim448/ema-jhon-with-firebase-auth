import { NavLink, Navigate, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {

    const {signUp} = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const navigate = useNavigate();

    const handleSignUp = event=>{
        event.preventDefault();
        setError("");
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
            form.reset();
            navigate("/login")
        })
        .catch(error=>{
            console.log(error.message);
            if(email){
                setError("Email is already taken")
            }
            
        })
    }


    return (
       
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-2">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirmPassword" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                            <NavLink to="/login" className="label-text-alt link link-hover text-center">Already have an  account?<span className="text-warning font-bold">Login</span>
                            </NavLink>
                            <div className="divider">OR</div>
                            <button className="btn btn-outline btn-primary">Continue with Google</button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">{error}</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                
    );
};

export default SignUp;