import React from 'react';
import '../Component/Footer.css';
import { emages } from '../Controller/emages';

const Footer = () => {
  return (
    <footer className="footer-page bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">About us</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact us</a>
              </li>
              <li>
                <a href="#" className="text-white">Sign-up</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mail us:</h5>
            <ul className="list-unstyled">
              <li>utkarsh@gmail.com</li>
              <li>Clove Embassy Tech Village</li>
              <li>Outer Ring Road</li>
              <li>Kannauj, 209728</li>
              <li>India</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <img src={emages.instagram} alt="Instagram" className="social-icon"/>
              </li>
              <li className="me-3">
                <img src={emages.facebook} alt="Facebook" className="social-icon"/>
              </li>
              <li>
                <img src={emages.twiter} alt="Twitter" className="social-icon"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
