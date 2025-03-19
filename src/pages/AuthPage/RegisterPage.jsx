import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }

    const requestBody = {
      id: 0,
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      birthday: "2000-01-01",
      gender: true,
      role: "user",
      skill: [],
      certification: [],
    };

    try {
      const response = await fetch(
        "/sign_up.json",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            tokenCybersoft: "your-token-here",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Đăng ký thành công!");
        navigate("/login");
      } else {
        alert(data.message || "Đăng ký thất bại!");
      }
    } catch (error) {
      console.error("Lỗi khi gửi request:", error);
      alert("Có lỗi xảy ra!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>ĐĂNG KÝ</h2>
        <form onSubmit={handleSubmit}>
          <label>Tài khoản</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />

          <label>Mật khẩu</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label>Nhập lại mật khẩu</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

          <label>Họ tên</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Số điện thoại</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

          <div className="button-group">
            <button type="submit" className="register-btn">Đăng ký</button>
            <button type="button" className="login_btn" onClick={() => navigate("/login")}>Đăng nhập →</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
