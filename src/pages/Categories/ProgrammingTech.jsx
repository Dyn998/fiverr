import React from "react";
import { Link } from "react-router-dom";
import PackageSelection from "./PackageSelection";
import CommentSection from "./CommentSection";
import "./ProgrammingTech.css";
import "./CommentSection.css";


const ProgrammingTech = () => {
  return (
    <div className="programming-tech-container">
      <nav className="breadcrumb">
        <Link to="/">Programming & Tech</Link> &gt;
        <Link to="/fiverr/categories/programming-tech">Website Builders & CMS</Link>&gt;
        <span> Full Website Creation</span>
      </nav>

      <div className="gig-header">
        <h1>I will do custom CSS, HTML, JavaScript, PHP coding</h1>
        <div className="seller-info">
          <img src="/images/3.jpeg" alt="#" style={{ width: "50px", height: "auto" , borderRadius: "45%",objectFit: "cover"}} />
          <span className="seller-name">noflirrazaq</span>
          <span className="review" style={{color:"#E6B779"}}>Top Rated Seller</span>
          <span className="rating">⭐⭐⭐⭐⭐ 5 (335)</span>
          <span>4 Orders in Queue</span>
        </div>
      </div>

      <div className="gig-content">
        <div className="gig-left">
          <img src="/images/cup.jpeg" alt="Gig Preview" className="gig-image" />
          <span style={{ fontWeight:"bold",margin:"10px"}}>Buyer keeping returning!</span>
          <span style={{color:"#838888"}}>noflirrazaq has an exceptional number of repeat buyers</span>
          <video width="100%" controls style={{ marginTop: "10px", borderRadius: "10px" }}><source src="/fiverr/images/MyVideo-highlight.mp4"  /></video>
          <div className="gig-description">
            <h2 style={{ fontWeight:"bold" , fontSize:"24px", paddingTop:"50px",paddingBottom:"20px"}}>About This Gig</h2>
            <p style={{ fontWeight:"bold" , fontSize:"18px", backgroundColor:"#FEEEC9",display: "inline-block"}}>Top Rated Seller with all positive reviews</p>
            <p>Want a custom website bullt for your business? Or Having trouble In recognizing or fixing the Issues/bugs in your existing website/blog. It Is not a problem because I'm here to fix any Issues In HTML, CSS, Bootstrap Jquery, Javascript, PHP or database(Mysql/Oracle).            </p>
            <h2 style={{ fontWeight:"bold" , fontSize:"24px", paddingTop:"50px",paddingBottom:"20px"}}>Things I offer:</h2>
            <li>CRM development</li>
            <li>E-commerce Development</li>
            <li>Custom website development (both front-end and back-end) with Laravel, PHP and MySQL</li>
            <li>Vue.js, HTML, CSS, Boostrap, Javascript/Jquery, PHP single/multi web page,</li>
            <li>Complete website creation from scratch using Laravel Rest Apl and vue.js</li>
            <li>Web Application with proper exception handling</li>
            <li>Can work with APIs, Integrate API's In your applications.</li>
            <li>Responsive - Moblie Friendly sites.</li>
            <li>Great UI/UX for your site</li>
            <li>PSD to HTML, XD to HTML or any other design to HTML with best quality and pixel perfect design</li>
            <li>Fix issues in front-end or add some changes to it.</li>
            <li>Bug Investigation and Bug fixing</li>
            <li>MySQL database design and Integration in websites</li>
            <p style={{ fontWeight:"bold" , fontSize:"18px", backgroundColor:"#FEEEC9",display: "inline-block", marginTop:"30px"}}>I will do the work until you are satisfied with fast and responsive communication.</p>
          </div>
        <hr className="my-4" />
        <div className="seller-container">
        <h2 style={{fontWeight:"bold"}}>About The Seller</h2>
        <div className="seller-info">
        <div className="seller-details">
          <img src="/images/3.jpeg"alt="Seller"className="seller-image" style={{ width: "100px", height:"150px",borderRadius: "0"}}/>
          <div className="seller-text">
            <h3 style={{fontWeight:"bold"}}>noflirrazaq</h3>
            <p>Web Developer</p>
            <p className="rating">⭐⭐⭐⭐⭐ 5 (363)</p>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-item">Do you provide regular updates on order?<i className="fas fa-chevron-down"></i></div>
        <div className="faq-item">How do you guarantee product quality and reliability?<i className="fas fa-chevron-down"></i></div>
        <div className="faq-item">Do you give post-development support?<i className="fas fa-chevron-down"></i></div>
        <div className="faq-item">Do you convert PSD to HTML?<i className="fas fa-chevron-down"></i></div>
      </div>
        <div  className="review-container">
        <div className="reviews-breakdown">
        <h3 style={{paddingBottom:"20px",}}>335 Reviews ⭐⭐⭐⭐⭐ 5</h3>
          <div className="review-item">
            <span>5 Stars</span> <span className="bar full"></span> (333)
          </div>
          <div className="review-item">
            <span>4 Stars</span> <span className="bar small"></span> (2)
          </div>
          <div className="review-item">
            <span style={{color:"#DDDDDD"}}>3 Stars</span> <span className="bar empty"></span> (0)
          </div>
          <div className="review-item">
            <span style={{color:"#DDDDDD"}}>2 Stars</span> <span className="bar empty"></span> (0)
          </div>
          <div className="review-item">
            <span style={{color:"#DDDDDD"}}>1 Star</span> <span className="bar empty"></span> (0)
          </div>
        </div>
        <div className="rating-summary">
          <h3 className="rating-text">Sort by <span style={{paddingRight:"10px",paddingLeft:"10px", fontWeight:"bold"}}>Most Relevant</span><i className="fas fa-chevron-down"></i></h3>
          <p>Rating Breakdown</p>
          <p>Seller communication level <span> 5⭐ </span></p>
          <p>Recommend to a friend <span> 5⭐ </span></p>
          <p>Service as described <span> 5⭐ </span></p>
        </div>
        </div>
        <div className="reviews-filter">
           <h3>Filters</h3>
           <p>Industry <span>All Industries</span><i className="fas fa-chevron-down"></i></p>
        </div>
        <hr className="my-4" />
        <div>
          <CommentSection/> 
        </div>
      </div>
      </div>

      <div className="gig-right">
          <PackageSelection /> 
      </div>
      </div>
        
      </div>
  );
};

export default ProgrammingTech;
