import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./JobListingPage.css";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";

const JOBS_PER_PAGE = 9;
const JobCard = ({ job }) => (
  <div className="col-md-4 mb-4">
    <div className="card job">
      <img
        src={job.congViec?.hinhAnh || job.avatar || "/default-job.png"}
        className="card-img-top"
        alt={job.congViec?.tenCongViec || "Job"}
        loading="lazy" 
      />
      <div className="card-body">
        <h5 className="card-title">{job.congViec?.tenCongViec || "Untitled Job"}</h5>
        <p className="text-muted">
          ⭐ {job.congViec?.saoCongViec ?? 0}/5 ({job.congViec?.danhGia ?? 0} reviews)
        </p>
        <p className="fw-bold">Starting at ${job.congViec?.giaTien ?? "N/A"}</p>
      </div>
    </div>
  </div>
);

const JobListingPage = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const searchTerm = useMemo(
    () => new URLSearchParams(location.search).get("search") || "",
    [location.search]
  );

  const reqConfig = useMemo(
    () => ({
      headers: { tokenCybersoft: TOKEN_CYBERSOFT },
    }),
    []
  );

  useEffect(() => {
    const fetchJobs = async () => {
      if (!searchTerm) {
        setLoading(false);
        setJobs([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${encodeURIComponent(searchTerm)}`,
          reqConfig
        );
        setJobs(Array.isArray(response.data.content) ? response.data.content : []);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách công việc:", error);
        setError("Không thể tải danh sách công việc. Vui lòng thử lại sau.");
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [searchTerm, reqConfig]);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const currentJobs = useMemo(() => {
    const indexOfLastJob = currentPage * JOBS_PER_PAGE;
    const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
    return jobs.slice(indexOfFirstJob, indexOfLastJob);
  }, [jobs, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Results for "{searchTerm}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="row mt-3">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              className={`btn ${
                currentPage === num + 1 ? "btn-primary" : "btn-outline-secondary"
              } mx-1`}
              onClick={() => handlePageChange(num + 1)}
            >
              {num + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListingPage;