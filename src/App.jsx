import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import CategoriesNavbar from "./components/CategoriesNavbar";
import DigitalMarketing from "./pages/Categories/DigitalMarketing";
import ProgrammingTech from "./pages/Categories/ProgrammingTech";
import Hero from "./pages/HomePage/Hero";
import JobListPage from "./pages/JobsPage/JobListPage";
import JobListingPage from "./pages/JobsPage/JobListingPage";
import TrustedBy from "./pages/HomePage/TrustedBy";
import Services from "./pages/HomePage/Services";
import Features from "./pages/HomePage/Features";
import Testimonial from "./pages/HomePage/Testimonial";
import Marketplace from "./pages/HomePage/Marketplace";
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
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TrustedBy />
              <Services />
              <Features />
              <Testimonial />
              <Marketplace />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<JobListPage />} />
        <Route path="/jobs-listing" element={<JobListingPage />} />
        <Route path="/categories/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/categories/Programming-tech" element={<ProgrammingTech />} />
        <Route path="/UserProfilePage" element={<UserProfilePage />} />
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
