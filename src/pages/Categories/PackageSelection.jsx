import React, { useState } from "react";
import "./PackageSelection.css"; 
const PackageSelection = () => {
  const [activeTab, setActiveTab] = useState("standard");

  return (
    <div className="package-container">
      <div className="package-header">
        <span className={`package-tab ${activeTab === "basic" ? "active" : ""}`} onClick={() => setActiveTab("basic")}>Basic</span>
        <span className={`package-tab ${activeTab === "standard" ? "active" : ""}`} onClick={() => setActiveTab("standard")}>Standard</span>
        <span className={`package-tab ${activeTab === "premium" ? "active" : ""}`} onClick={() => setActiveTab("premium")}>Premium</span>
      </div>

      {activeTab === "standard" && (
        <div className="gig-right">
          <div className="package-box">
            <h3>Standard <span className="price">$1000</span> </h3>
            <p>Create a simple web application for your business.</p>
            <ul>
                <li><i className="fas fa-clock"></i> 30 Days Delivery & 1 Revision</li>
                <li><i className="fas fa-check"></i>  Design Customization</li>
                <li><i className="fas fa-check"></i>Content Upload</li>
                <li><i className="fas fa-check"></i> Responsive Design</li>
                <li><i className="fas fa-check"></i> Include Source Code</li>
                <li><i className="fas fa-check"></i> 1 Page</li>
            </ul>
            <button className="order-btn">Continue ($1000)</button>
            <p>Compare Packages</p>
          </div>

          <div className="box-btn">
            <p>Do you have any special requirements?</p>
            <button>Get a Quote</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default PackageSelection;
