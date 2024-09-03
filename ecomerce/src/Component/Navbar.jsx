import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../Component/Redux/CartSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Component/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            {/* Brand Logo */}
            <Link to="/" className="navbar-brand">
              MyStore
            </Link>
            {/* Cart Icon next to MyStore on all screen sizes */}
            <div className="add-to-cart position-relative ms-3">
              <Link to="/Cart" className="text-decoration-none">
                <i className="fa fa-shopping-cart">({totalQuantity})</i>
              </Link>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${toggle ? "show" : ""}`}
            id="navbarNav"
          >
            <div className="d-flex align-items-center ms-auto">
              {/* User Dropdown Menu */}
              <div className="dropdown me-3">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={toggleDropdown}
                >
                  <i className="fa fa-user"></i>
                </button>
                <ul
                  className={`dropdown-menu ${isOpen ? "show" : ""}`}
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <Link to="/Login" className="dropdown-item">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/SignUp" className="dropdown-item">
                      SignUp
                    </Link>
                  </li>
                  <li>
                    <Link to="/Profile" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary Navbar Links */}
          <div
            className={`second-navbar ${
              toggle ? "d-block" : "d-none"
            } d-lg-flex flex-column flex-sm-row align-items-center`}
          >
            <div className="container-fluid">
              <ul className="nav justify-content-center flex-wrap flex-sm-nowrap">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Mobiles" className="nav-link">
                    Mobiles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Laptop" className="nav-link">
                    Laptop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Fashion" className="nav-link">
                    Fashion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Electronic" className="nav-link">
                    Electronic
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Profile" className="nav-link">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
