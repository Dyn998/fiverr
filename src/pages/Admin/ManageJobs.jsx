import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageJobs.css";

const API_URL = "https://fiverrnew.cybersoft.edu.vn/api/cong-viec";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        setJobs(response.data.content || []);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách công việc:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="manage-jobs">
      <h1>Danh sách Công Việc</h1>

      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên Công Việc</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.tenCongViec || "N/A"}</td>
                  <td>
                    <button>Xem</button>
                    <button>Sửa</button>
                    <button>Xóa</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Không có công việc nào</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageJobs;
