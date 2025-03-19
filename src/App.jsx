import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import CategoriesNavbar from "./components/CategoriesNavbar";
import DigitalMarketing from "./pages/Categories/DigitalMarketing";
import ProgrammingTech from "./pages/Categories/ProgrammingTech";
import JobListPage from "./pages/JobsPage/JobListPage";
import JobListingPage from "./pages/JobsPage/JobListingPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/AuthPage/LoginPage";
import RegisterPage from "./pages/AuthPage/RegisterPage";
import UserProfilePage from "./pages/AuthPage/UserProfilePage";
import AdminPage from "./pages/Admin/AdminPage";
import AddAdminForm from "./pages/Admin/AddAdminForm"; 
import ManageUsers from "./pages/Admin/ManageUsers";
import ManageJobs from "./pages/Admin/ManageJobs";
import ManageCategories from "./pages/Admin/ManageCategories";
import ManageServices from "./pages/Admin/ManageServices";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    if (redirectToHome) {
      navigate("/");
      setRedirectToHome(false);
    }
  }, [redirectToHome, navigate]);

  const hideNavbars = location.pathname === "/categories/digital-marketing" || location.pathname === "/UserProfilePage";
  return (
    <>
    {!hideNavbars && <Navbar setRedirectToHome={setRedirectToHome} />}
    {!hideNavbars && location.pathname !== "/" && <CategoriesNavbar />}
    
    <Routes>
      {/* Trang HomePage */}
      <Route path="/" element={<HomePage />} />
  
      {/* Trang Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
  
      {/* Trang Công việc */}
      <Route path="/jobs" element={<JobListPage />} />
      <Route path="/jobs-listing" element={<JobListingPage />} />
  
      {/* Trang Categories */}
      <Route path="/categories/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/categories/programming-tech" element={<ProgrammingTech />} />
  
      {/* Trang người dùng */}
      <Route path="/UserProfilePage" element={<UserProfilePage />} />
  
      {/* Trang Admin */}
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/add" element={<AddAdminForm />} /> 
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/jobs" element={<ManageJobs />} />
      <Route path="/admin/categories" element={<ManageCategories />} />
      <Route path="/admin/services" element={<ManageServices />} />
    </Routes>
  
    <Footer />
  </>
  
  );
}

export default App;
