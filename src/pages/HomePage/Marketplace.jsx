import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPaintBrush, FaBullhorn, FaFileAlt, FaVideo, FaMusic, FaCode, FaHandshake, FaCoffee, FaDatabase } from "react-icons/fa";

const categories = [
  { icon: <FaPaintBrush />, title: "Graphics & Design" },
  { icon: <FaBullhorn />, title: "Digital Marketing" },
  { icon: <FaFileAlt />, title: "Writing & Translation" },
  { icon: <FaVideo />, title: "Video & Animation" },
  { icon: <FaMusic />, title: "Music & Audio" },
  { icon: <FaCode />, title: "Programming & Tech" },
  { icon: <FaHandshake />, title: "Business" },
  { icon: <FaCoffee />, title: "Lifestyle" },
  { icon: <FaDatabase />, title: "Data" }
];

const Marketplace = () => {
  return (
    <Container className="text-center my-5">
      <h2 className="mb-4 font-weight-bold" style={{ all: "unset", fontWeight: "bold",fontSize:"30px"}} >Explore the marketplace</h2>
      <Row className="justify-content-center">
        {categories.map((category, index) => (
          <Col key={index} xs={6} md={4} lg={2} className="mb-4">
            <div className="category-card">
              <div className="icon">{category.icon}</div>
              <p className="category-title">{category.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Marketplace;
