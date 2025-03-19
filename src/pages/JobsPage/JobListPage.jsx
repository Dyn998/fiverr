import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const JobListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const tokenCybersoft = "YOUR_TOKEN_HERE"; 

  useEffect(() => {
    const fetchJobs = async () => {
      const jobName = location.state?.jobName || "developer"; 
      try {
        const response = await fetch(
          `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${jobName}`,
          {
            method: "GET",
            headers: {
              tokenCybersoft: tokenCybersoft,
            },
          }
        );

        if (!response.ok) throw new Error("Lỗi khi lấy dữ liệu");

        const data = await response.json();
        setJobs(data.content || []); 
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [location.state]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Danh sách công việc</h2>

      {jobs.length === 0 ? (
        <p className="text-muted">Không tìm thấy công việc nào!</p>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-4 mb-4">
              <div className="card shadow-sm p-3">
                <h5 className="card-title">{job.tenCongViec}</h5>
                <p className="card-text">{job.moTaNgan}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobListPage;
