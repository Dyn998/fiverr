import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Kay Kim",
    position: "Co-Founder",
    company: "rooted",
    quote:
      "It's extremely exciting that Fiverr has freelancers from all over the world—it broadens the talent pool. One of the best things about Fiverr is that while we’re sleeping, someone’s working.",
    img: "/images/6 Freelance Jobs To Make $50+ An Hour In 2024.jpeg", // Link ảnh
  },
  {
    name: "John Doe",
    position: "CEO",
    company: "TechStart",
    quote:
      "Fiverr provides amazing opportunities for freelancers. We found top talent for our project quickly and efficiently.",
    img: "/images/Free Photo _ Freelance woman working with laptop in coffee shop.jpeg", // Link ảnh khác
  },
];

const Testimonial = () => {
  return (
    <div className="container my-5">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial d-flex align-items-center">
              {/* Phần ảnh bên trái */}
              <div className="testimonial-image">
                <img
                  src={`/fiverr${testimonial.img}`}
                  alt="Testimonial"
                  className="img-fluid rounded"
                />
              </div>
              {/* Phần nội dung bên phải */}
              <div className="testimonial-content pl-4">
                <h5>
                  {testimonial.name}, {testimonial.position}{" "}
                  <strong>{testimonial.company}</strong>
                </h5>
                <p className="fst-italic">{testimonial.quote}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
