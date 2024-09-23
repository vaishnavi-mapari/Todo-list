import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Additional Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-white">Support</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white me-3">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white me-3">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white me-3">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h5>Contact Info</h5>
            <p>Email: support@todolist.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; 2024 TodoList. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
