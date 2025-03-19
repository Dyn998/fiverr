import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Logo Design",
    subtitle: "Build your brand",
    img: "/images/LOGO.jpeg",
  },
  {
    title: "WordPress",
    subtitle: "Customize your site",
    img: "/images/Word Press.jpeg",
  },
  {
    title: "Voice Over",
    subtitle: "Share your message",
    img: "/images/voice-over.jpg",
  },
  {
    title: "Social Media",
    subtitle: "Reach more customers",
    img: "/images/Social Media.jpeg",
  },
];

const SafeSlider = ({ children, ...props }) => {
  const safeProps = { ...props };
  delete safeProps.currentSlide;
  delete safeProps.slideCount;
  return <Slider {...safeProps}>{children}</Slider>;
};

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="services container-fluid">
      <h2 className="ml-4 section-title"  style={{ all: "unset", fontWeight: "bold",fontSize:"30px"}}>Popular professional services</h2>
      <SafeSlider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.img} alt={service.title} className="service-img" />
            <div className="service-info">
              <p className="service-subtitle">{service.subtitle}</p>
              <h3 className="service-title">{service.title}</h3>
            </div>
          </div>
        ))}
      </SafeSlider>
    </section>
  );
};

export default Services;
