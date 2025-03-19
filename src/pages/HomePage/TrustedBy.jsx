import React from "react";

const TrustedBy = () => {
  return (
    <section
      className="text-center py-4"
      style={{
        backgroundColor: "#f8f8f8",
      }}
    >
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <p className="text-muted fw-bold mb-0">Trusted by:</p>
        <img src="/images/facebook.jpeg" alt="Facebook" className="trusted-logo" />
        <img src="/images/google.png" alt="Google" className="trusted-logo" />
        <img src="/images/netflix.png" alt="Netflix" className="trusted-logo" />
        <img src="/images/paypal.png" alt="PayPal" className="trusted-logo" />
      </div>
    </section>
  );
};

export default TrustedBy;
