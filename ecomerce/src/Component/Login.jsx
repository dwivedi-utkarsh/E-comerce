import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Create a password");
    }
    if (email && password) {
      setSuccessMsg(
        `Thank you! We'll process your information and send further details to ${email}.`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center mt-5 pt-5">
      <div className="row w-100">
        {/* Left Side Content with black background */}
        <div className="col-lg-6 d-none d-lg-flex align-items-center bg-dark text-white">
          <div className="w-75 mx-auto">
            <h1 className="mb-4">Stay signed in for more</h1>
            <p>When you sign in, you are with us!</p>
            <h3 className="mt-4">Get started fast with mystore</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              omnis nisi dolor recusandae consectetur!
            </p>
            <h3>Access all mystore services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
            <h3>Trusted by online Shoppers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab omnis
              nisi dolor recusandae consectetur!
            </p>
            <div className="d-flex justify-content-between mt-5">
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">MyStore</a></li>
                <li><a href="#" className="text-white">Terms</a></li>
                <li><a href="#" className="text-white">Privacy</a></li>
                <li><a href="#" className="text-white">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="col-12 col-lg-6 d-flex align-items-center">
          {successMsg ? (
            <div className="text-center w-100">
              <p className="text-success">{successMsg}</p>
              <Link to="/signup" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          ) : (
            <form className="w-100">
              <div className="container px-4">
                <h1 className="mb-4">Sign in</h1>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="john@workemail.com"
                    onChange={handleEmail}
                    value={email}
                  />
                  {errEmail && (
                    <p className="text-danger">{errEmail}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Create password"
                    onChange={handlePassword}
                    value={password}
                  />
                  {errPassword && (
                    <p className="text-danger">{errPassword}</p>
                  )}
                </div>
                <button
                  onClick={handleSignUp}
                  className="btn btn-primary w-100"
                >
                  Sign In
                </button>
                <p className="mt-3 text-center">
                  Don't have an Account?{" "}
                  <Link to="/signup" className="text-primary">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
