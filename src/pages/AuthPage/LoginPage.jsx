import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Loginpage.css"

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";
const BASE_URL = 'https://fiverrnew.cybersoft.edu.vn';

const Loginpage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(BASE_URL + "/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json", tokenCybersoft: TOKEN_CYBERSOFT },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.content.token);
        alert("Đăng nhập thành công!");
        navigate("/UserProfilePage"); 
      } else {
        setError(data.message || "Đăng nhập thất bại!");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Lỗi kết nối đến server!");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1>ĐĂNG NHẬP</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Tài khoản"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}
          <div className="button-group">
            <button type="submit" className="login-btn" onClick={() => navigate("/UserProfilePage")} >Đăng nhập</button>
            <button type="button" className="signin-btn" onClick={() => navigate("/register")}> Đăng ký →</button> 
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
