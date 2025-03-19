import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setRedirectToHome }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4" style={{ backgroundColor: "#b33b2c" }}>
      <div className="container-fluid">
        <a className="navbar-brand font-weight-bold" href="#" style={{ fontSize: "1.5rem" }}>
          fiverr<span className="text-success">.</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" ata-bs-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {/* Khi nhấn Become a Seller, kích hoạt chuyển hướng */}
            <li className="nav-item">
              <button className="btn btn-link text-white" onClick={() => setRedirectToHome(true)}>
                Become a Seller
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link text-white" onClick={() => navigate("/register")}>
                Sign In
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light ms-3 px-4" onClick={() => navigate("/login")}>
                Join
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
