import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate , Link } from "react-router-dom";
import "./DigitalMarketingPage.css";

const categories = [
  {
    title: "Minimalist Logo Design",
    logo: "https://cdn-icons-png.flaticon.com/512/564/564395.png",
  },
  {
    title: "Architecture & Interior Design",
    logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },
  {
    title: "Image Editing",
    logo: "https://cdn-icons-png.flaticon.com/512/3105/3105793.png",
  },
  {
    title: "NFT Art",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  {
    title: "T-shirts & Merchandise",
    logo: "https://cdn-icons-png.flaticon.com/512/892/892689.png",
  },
];

const DigitalMarketing = () => {
  const navigate = useNavigate();

  return (
    <div className="digital-marketing-page">
      {/* Thanh điều hướng */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">Fiverr</span><span className="dot">.</span>
        </div>
        <input type="text" placeholder="What service are you looking for today?" />
        <div className="nav-links" style={{ display: "flex", gap: "30px", alignItems: "center", textDecoration:"none" }}>
          <a href="#" className="active" style={{ color: "#4B4AA0" }}  >Fiverr Business</a>
          <a href="#">Explore</a>
          <a href="#">English</a>
          <a href="#">USD</a>
          {/* <a href="#" >Become a Seller</a> */}
          <a onClick={() => navigate("/")} style={{ cursor: "pointer",color:"#7C7D87" }}>Become a Seller</a>
          <a onClick={() => navigate("/register")}className="add_link">Sign in</a>
        </div>
        <button onClick={() => navigate("/login")} className="join-btn">Join</button>
      </nav>
      <div className="nav_bar-digital" >
          <a href="#">Graphics & Design</a>
          <a href="#" className="active">Digital Marketing</a>
          <a href="#">Writing & Translation</a>
          <a href="#">Video & Animation</a>
          <a href="#">Music & Audio</a>
          <Link to="/categories/programming-tech">Programming & Tech</Link>
          <a href="#">Business</a>
          <a href="#">Lifestyle</a>
          <a href="#">Trending</a>
      </div>
      {/* Banner */}
      <header className="banner">
        <h1>Graphics & Designer</h1>
        <p>Design to make you stand out</p>
        <button>How Fiverr Works</button>
      </header>
      
      {/* Danh mục phổ biến */}
      <section className="popular-categories">
        <h2>Most popular in Digital Marketing</h2>
        <div className="category-list">
          {categories.map((item, index) => (
            <button key={index} className="category-btn">
              <img src={item.logo} alt={item.title} className="category-logo" />
              {item.title}
              <FaArrowRight className="arrow-icon" />
            </button>
          ))}
        </div>
      </section>
      
      {/* Khám phá Digital Marketing */}
      <section className="explore-digital-marketing"style={{ paddingTop: "40px" }}>
        <h2>Explore Digital Marketing</h2>
        <div className="category-grid">
          <div className="category">
            <img src="https://fiverrnew.cybersoft.edu.vn/images/lcv1.jpg" alt="#" />
            <h3>Logo & Brand Identity</h3>
            <a href="#">Logo Design</a>
            <a href="#">Brand Style Guides</a>
            <a href="#">Fonts & Typography</a>
            <a href="#">Business Cards & Stationery</a>
          </div>
          <div className="category">
            <img src="https://fiverrnew.cybersoft.edu.vn/images/lcv2.jpg" alt="#" />
            <h3>Web & App Design</h3>
            <a href="#">Website Design</a>
            <a href="#">App Design</a>
            <a href="#">UX Design</a>
            <a href="#">Landing Page Design</a>
            <a href="#">Icon Design</a>
          </div>
          <div className="category">
            <img src="https://fiverrnew.cybersoft.edu.vn/images/lcv3.jpg" alt="#" />
            <h3>Art & Illustration </h3>
            <a href="#">Illustration</a>
            <a href="#">NFT Art</a>
            <a href="#">Pattern Design</a>
            <a href="#">Portraits & Caricatures </a>
            <a href="#">Cartoons & Comics</a>
            <a href="#">Tattoo Design</a>
            <a href="#">Storyboards</a>
          </div>
          <div className="category">
            <img src="/images/Busineasn.jpeg" alt="#" />
            <h3>Marketing Design</h3>
            <a href="#">Social Media Design</a>
            <a href="#">Email Design</a>
            <a href="#">Web Banners</a>
            <a href="#">Signage Design</a>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Services Related To Graphics & Design</h2>
        <div className="services-tags">
          {["Minimalist logo design", "Signature logo design", "Mascot logo design", "3d logo design",
            "Hand drawn logo design", "Vintage logo design", "Remove background", "Photo restoration",
            "Photo retouching", "Image resize", "Product label design", "Custom twitch overlay",
            "Custom twitch emotes", "Gaming logo", "Children book illustration", "Instagram design",
            "Movie poster design", "Box design", "Logo maker", "Logo Ideas"].map((tag, index) => (
            <span key={index} className="service-tag">{tag}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
