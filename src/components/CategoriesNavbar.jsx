import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesNavbar.css"; 

const categories = [
  { name: "Graphics & Design", path: "/categories/graphics-design" },
  { name: "Digital Marketing", path: "/categories/digital-marketing" },
  { name: "Writing & Translation", path: "/categories/writing-translation" },
  { name: "Video & Animation", path: "/categories/video-animation" },
  { name: "Music & Audio", path: "/categories/music-audio" },
  { name: "Programming & Tech", path: "/categories/programming-tech" },
  { name: "Data", path: "/categories/data-science", isNew: true }, 
  { name: "Business", path: "/categories/business" },
  { name: "Lifestyle", path: "/categories/lifestyle" },
];

const CategoriesNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-navbar">
      {categories.map((category, index) => (
        <div
          key={index}
          className="category-item"
          onClick={() => navigate(category.path)}
        >
          {category.name}
          {category.isNew && <span className="new-tag">NEW</span>}
        </div>
      ))}
    </div>
  );
};

export default CategoriesNavbar;
