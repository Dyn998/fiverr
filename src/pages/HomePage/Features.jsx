import React from "react";

const Features = () => {
  return (
    <section className="features py-5" style={{ backgroundColor: "#E6F1E9" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Nội dung bên trái */}
          <div className="col-md-6">
            <h2 className="font-weight-bold mb-4" style={{ all: "unset", fontWeight: "bold",fontSize:"30px"}}>
              A whole world of freelance <br />talent at your fingertips
            </h2>
            <ul className="list-unstyled">
              <li className="mb-3">
                <strong>The best for every budget</strong>
                <p className="mb-0">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li className="mb-3">
                <strong>Quality work done quickly</strong>
                <p className="mb-0">Find the right freelancer to begin working on your project within minutes.</p>
              </li>
              <li className="mb-3">
                <strong>Protected payments, every time</strong>
                <p className="mb-0">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
              </li>
              <li className="mb-3">
                <strong>24/7 support</strong>
                <p className="mb-0">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
              </li>
            </ul>
          </div>
          {/* Hình ảnh bên phải */}
          <div className="col-md-6 text-center">
            <div className="position-relative">
              <video width="100%" controls>
               <source src="/images/My_Video.mp4" type="video/mp4" />
              </video>
              <button className="btn btn-dark rounded-circle position-absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60px", height: "60px" }}>
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
