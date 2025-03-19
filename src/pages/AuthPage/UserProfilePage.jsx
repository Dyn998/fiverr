import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./UserProfilePage.css";

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";
const BASE_URL = 'https://fiverrnew.cybersoft.edu.vn';
const DEFAULT_AVATAR = "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const [userToken] = useState(() => localStorage.getItem("token") || "");

  // State với giá trị mặc định
  const [user, setUser] = useState({
    avatar: DEFAULT_AVATAR,
    name: "Loading...",
    location: "Unknown",
    memberSince: "N/A",
    description: "",
    languages: [],
  });
  const [jobs, setJobs] = useState([]);
  const [userId, setUserId] = useState(null);

  // Memoized fetch headers
  const getHeaders = useCallback((includeUserToken = false) => ({
    "Content-Type": "application/json",
    tokenCybersoft: TOKEN_CYBERSOFT,
    ...(includeUserToken && userToken && { token: userToken })
  }), [userToken]);

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      if (!userToken) return;
      try {
        const response = await fetch(
          `${BASE_URL}/api/thue-cong-viec/lay-danh-sach-da-thue`,
          { headers: getHeaders(true) }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setJobs(data.content || []);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, [userToken, getHeaders]);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;
      try {
        const response = await fetch(
          `${BASE_URL}/api/users/${userId}`,
          { headers: getHeaders() }
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUser(prev => ({
          ...prev,
          ...data.content,
          avatar: data.content?.avatar || DEFAULT_AVATAR
        }));
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [userId, getHeaders]);

  // Decode token
  useEffect(() => {
    if (!userToken) return;
    try {
      const [, payload] = userToken.split('.');
      const decoded = JSON.parse(atob(payload));
      setUserId(decoded.id);
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }, [userToken]);

  // Reusable ProfileSection component
  const ProfileSection = ({ title, children, addLinkText, addLinkUrl = "#" }) => (
    <div className="section">
      <h4>
        {title} <a href={addLinkUrl} className="add-link">{addLinkText}</a>
      </h4>
      {children}
    </div>
  );

  return (
    <div className="user-profile_container">
      {/* Navbar */}
      <div className="user-profile-navbar">
        <div className="logo">
          <span className="logo-text">Fiverr</span>
          <span className="dot">.</span>
          <input type="text" placeholder="Find Services" />
        </div>
        <div className="nav-links" style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <a href="#" className="active" onClick={() => navigate("/")} style={{ color: "#30B6A8" }}>Fiverr Pro</a>
          <a href="#">Explore</a>
          <a href="#">Messages</a>
          <a href="#">Lists</a>
          <a href="#">Orders</a>
          <div 
            className="user-avatar" 
            onClick={() => navigate("/admin")}
            style={{ cursor: "pointer", backgroundColor: "#ccc", display: "inline-block", padding: "10px", borderRadius: "50%" }}
          >
            K
          </div>
        </div>
      </div>

      {/* Digital Navbar */}
      <div className="nav_bar-digital">
        {[
          "Graphics & Design", "Digital Marketing", "Writing & Translation",
          "Video & Animation", "Music & Audio", "Programming & Tech",
          "Business", "Lifestyle", "Trending"
        ].map((item, index) => (
          item === "Digital Marketing" || item === "Programming & Tech" ? (
            <Link key={index} to={`/categories/${item.toLowerCase().replace(" & ", "-")}`}>
              {item}
            </Link>
          ) : (
            <a key={index} href="#">{item}</a>
          )
        ))}
      </div>

      {/* Sidebar và Jobs Section */}
      <div className="profile-sidebar_container">
        <div className="profile-sidebar">
          <div className="profile-info">
            <span className="status-online">• Online</span>
            <div className="avatar-container">
              {user.avatar && (
                <img 
                  src={user.avatar} 
                  alt="Avatar" 
                  className="profile-avatar" 
                  onError={(e) => { e.target.src = DEFAULT_AVATAR; }}
                />
              )}
              <div className="user-info">
                <h3>{user.name}</h3>
                <span className="edit-icon">✏️</span>
              </div>
            </div>
            <p><strong>From:</strong> {user.location}</p>
            <p><strong>Member since:</strong> {user.memberSince}</p>

            <ProfileSection title="Description" addLinkText="Edit Description">
              <p>{user.description || "No description provided."}</p>
            </ProfileSection>

            <ProfileSection title="Languages" addLinkText="Add New">
              <p>{user.languages.length > 0 ? user.languages.join(", ") : "English - Basic"}</p>
            </ProfileSection>
          </div>

          <div className="profile-details">
            <ProfileSection title="Linked Accounts">
              <ul>
                {["+ Facebook", "+ Google", "+ Dribbble", "+ Stack Overflow", "+ GitHub", "+ Vimeo", "+ Twitter"]
                  .map((account, index) => <li key={index}>{account}</li>)}
              </ul>
            </ProfileSection>
            <ProfileSection title="Skills" addLinkText="Add New">
              <p>Add your Skills.</p>
            </ProfileSection>
            <ProfileSection title="Education" addLinkText="Add New">
              <p>Add your Education.</p>
            </ProfileSection>
            <ProfileSection title="Certification" addLinkText="Add New">
              <p>Add your Certification.</p>
            </ProfileSection>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="jobs-section">
          <h2>Danh sách công việc đã thuê</h2>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="job-card">
                {job.congViec?.hinhAnh && (
                  <img 
                    src={job.congViec.hinhAnh} 
                    alt={job.congViec.tenCongViec || "Job"} 
                    className="job-image" 
                    onError={(e) => { e.target.src = DEFAULT_AVATAR; }}
                  />
                )}
                <div className="w-100">
                  <h3>{job.congViec?.tenCongViec || "Untitled"}</h3>
                  <p className="mt-3 fs-4">{job.congViec?.moTaNgan || "No description"}</p>
                  <div className="job-actions mt-3">
                    <button className="view-detail">View Detail</button>
                    <button className="edit-button">Edit</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Không có công việc nào.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;