import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location.state && location.state.data) {
      setPrevLocation(location.state.data);
    }
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");

  // Success Message
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // Email Validation
  const EmailValidation = (email) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  const handlePost = (e) => {
    e.preventDefault();

    let valid = true;

    if (!clientName) {
      setErrClientName("Enter your Name");
      valid = false;
    }

    if (!email) {
      setErrEmail("Enter your Email");
      valid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
      valid = false;
    }

    if (!messages) {
      setErrMessages("Enter your Messages");
      valid = false;
    }

    if (valid) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your message has been received successfully. Further details will be sent to you by email at ${email}.`
      );

      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div className="container mt-5 pt-5 ">
      {/* <Breadcrumbs title="Contact" prevLocation={prevLocation} /> */}
      {successMsg ? (
        <p className="pb-4 w-100 text-center text-success">{successMsg}</p>
      ) : (
        <form className="pb-4">
          <h1 className="font-weight-bold text-center mb-4">Fill up a Form</h1>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="form-group">
                <label className="font-weight-bold">Name</label>
                <input
                  onChange={handleName}
                  value={clientName}
                  className={`form-control ${errClientName ? "is-invalid" : ""}`}
                  type="text"
                  placeholder="Enter your name here"
                />
                {errClientName && (
                  <div className="invalid-feedback">{errClientName}</div>
                )}
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Email</label>
                <input
                  onChange={handleEmail}
                  value={email}
                  className={`form-control ${errEmail ? "is-invalid" : ""}`}
                  type="email"
                  placeholder="Enter your email here"
                />
                {errEmail && <div className="invalid-feedback">{errEmail}</div>}
              </div>
              <div className="form-group">
                <label className="font-weight-bold">Messages</label>
                <textarea
                  onChange={handleMessages}
                  value={messages}
                  className={`form-control ${errMessages ? "is-invalid" : ""}`}
                  rows="3"
                  placeholder="Enter your message here"
                ></textarea>
                {errMessages && (
                  <div className="invalid-feedback">{errMessages}</div>
                )}
              </div>
              <button
                onClick={handlePost}
                className="btn btn-primary btn-block"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;
