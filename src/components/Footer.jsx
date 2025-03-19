import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaPinterestP, FaInstagram } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { TbTrophy } from "react-icons/tb";


const Footer = () => {
  return (
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row">
          {/* Categories */}
          <div className="col-md-3">
            <h6 className="text-uppercase font-weight-bold">Categories</h6>
            <ul className="list-unstyled">
              <li><a href="#">Graphics & Design</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">Writing & Translation</a></li>
              <li><a href="#">Video & Animation</a></li>
              <li><a href="#">Music & Audio</a></li>
              <li><a href="#">Programming & Tech</a></li>
              <li><a href="#">Data</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-3">
            <h6 className="text-uppercase font-weight-bold">About</h6>
            <ul className="list-unstyled">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press & News</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Intellectual Property Claims</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3">
            <h6 className="text-uppercase font-weight-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Selling on Fiverr</a></li>
              <li><a href="#">Buying on Fiverr</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-md-3">
            <h6 className="text-uppercase font-weight-bold">Community</h6>
            <ul className="list-unstyled">
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Community Standards</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Invite a Friend</a></li>
              <li><a href="#">Become a Seller</a></li>
              <li><a href="#" >Fiverr Elevate</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />


        <div className="d-flex justify-content-between align-items-center pb-3">
          <div className="d-flex align-items-center">
            <span className="fw-bold me-2" style={{ marginRight: "20px", fontWeight:"bold", color:"#7F7F89", fontSize:"24px" }} >fiverr.</span>
            <span className="text-muted"  >© Fiverr International Ltd. 2021</span>
          </div>
          <div className="d-flex gap-3" style={{ gap: "15px", color:"#7C7D87", fontSize:"20px"}}>
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaPinterestP />
            <FaInstagram />
            <IoLanguage />
            <FaDollarSign />
            <TbTrophy />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
