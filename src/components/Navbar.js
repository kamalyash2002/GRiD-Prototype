import React from "react";
import './custom.css'
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-blue">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" alt = "Yash" style={{ width: '100px', height:'55px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <i className="fa-solid fa-user"></i>
          <div className="User">
            Hi User
          </div>
          <button type="button" class="btn btn-light">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
