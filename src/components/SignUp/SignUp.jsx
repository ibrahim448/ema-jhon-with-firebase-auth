import { NavLink } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    return (
       
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-2">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                            <NavLink to="/login" className="label-text-alt link link-hover text-center">Already have an  account?<span className="text-warning font-bold">Login</span>
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

export default SignUp;