import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Enter your name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a valid email");
        }
      }
      if (!phone) {
        setErrPhone("Enter your phone number");
      }
      if (!password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
      if (!address) {
        setErrAddress("Enter your address");
      }
      
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address
      ) {
        setSuccessMsg(
          `Hello dear ${clientName}, Welcome to Mystore. Your signup request has been received. Additional assistance will be sent to your email at ${email}.`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
      }
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center mt-5 pt-5">
      <div className="row w-100">
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center bg-primary text-white p-5 bg-dark">
          <Link to="/MyCart" className="text-white mb-4">MyCart</Link>
          <h1 className="mb-3">Get started for free</h1>
          <p className="mb-3">Create your account to access more.</p>
          <div className="d-flex align-items-start mb-2">
            <BsCheckCircleFill className="me-2 text-success" />
            <p>Get started fast with mystore. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="d-flex align-items-start mb-2">
            <BsCheckCircleFill className="me-2 text-success" />
            <p>Access all mystore services. Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="d-flex align-items-start mb-2">
            <BsCheckCircleFill className="me-2 text-success" />
            <p>Trusted by online shoppers. Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center p-4">
          {successMsg ? (
            <div>
              <p className="text-success mb-4">{successMsg}</p>
              <Link to="/Login">
                <button className="btn btn-primary w-100">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSignUp} className="w-100">
              <h1 className="mb-4">Create your account</h1>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className={`form-control ${errClientName ? "is-invalid" : ""}`}
                  value={clientName}
                  onChange={handleName}
                  placeholder="John Doe"
                />
                {errClientName && <div className="invalid-feedback">{errClientName}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Work Email</label>
                <input
                  type="email"
                  className={`form-control ${errEmail ? "is-invalid" : ""}`}
                  value={email}
                  onChange={handleEmail}
                  placeholder="john@workemail.com"
                />
                {errEmail && <div className="invalid-feedback">{errEmail}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className={`form-control ${errPhone ? "is-invalid" : ""}`}
                  value={phone}
                  onChange={handlePhone}
                  placeholder="008801234567891"
                />
                {errPhone && <div className="invalid-feedback">{errPhone}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errPassword ? "is-invalid" : ""}`}
                  value={password}
                  onChange={handlePassword}
                  placeholder="Create password"
                />
                {errPassword && <div className="invalid-feedback">{errPassword}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className={`form-control ${errAddress ? "is-invalid" : ""}`}
                  value={address}
                  onChange={handleAddress}
                  placeholder="road-001, house-115"
                />
                {errAddress && <div className="invalid-feedback">{errAddress}</div>}
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label className="form-check-label">
                  I agree to the MyCart <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>.
                </label>
              </div>
              <button
                type="submit"
                className={`btn w-100 ${checked ? "btn-primary" : "btn-secondary"}`}
                disabled={!checked}
              >
                Create Account
              </button>
              <p className="text-center mt-3">
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
