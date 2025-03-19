import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    navigate(`/jobs-listing?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header
      className="text-white d-flex align-items-center position-relative"
      style={{
        backgroundColor: "#b33b2c",
        height: "55vh",
        padding: "50px 0",
        overflow: "hidden",
      }}
    >
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Left Section - Text & Search Bar */}
          <div className="col-md-6">
            <h1 className="fw-bold" style={{ fontSize: "2.5rem", lineHeight: "1.2" }}>
              Find the perfect <span className="text-warning">freelance</span> services for your business
            </h1>

            {/* Search Bar */}
            <div className="input-group mt-4 w-75">
              <input
                type="text"
                className="form-control border-end-0"
                placeholder='Try "building mobile app"'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Tìm kiếm khi nhấn Enter
                style={{ padding: "12px 15px", fontSize: "1rem", borderRadius: "5px 0 0 5px" }}
              />
              <button className="btn btn-success px-4" style={{ borderRadius: "0 5px 5px 0" }} onClick={handleSearch}>
                Search
              </button>
            </div>

            {/* Popular Tags */}
            <div className="mt-3">
              <strong>Popular:</strong>
              <span className="badge bg-light text-dark p-2 mx-1">Website Design</span>
              <span className="badge bg-light text-dark p-2 mx-1">WordPress</span>
              <span className="badge bg-light text-dark p-2 mx-1">Logo Design</span>
              <span className="badge bg-light text-dark p-2 mx-1">Dropshipping</span>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="col-md-6 text-center position-relative">
            <img
              src="/images/hero1.png"
              alt="Gabrielle, Video Editor"
              className="img-fluid"
              style={{
                maxWidth: "420px",
                borderRadius: "50%",
                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                position: "relative",
                top: "-70px",
                right: "-80px",
              }}
            />
            <p
              className="fw-bold text-white position-absolute"
              style={{
                bottom: "3%",
                fontSize: "1rem",
                padding: "6px 12px",
                borderRadius: "8px",
                right: "80px",
              }}
            >
              ⭐⭐⭐⭐⭐ Gabrielle, Video Editor
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
