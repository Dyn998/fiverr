import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ManageCategories.css";

const API_BASE_URL = "https://fiverrnew.cybersoft.edu.vn/api/loai-cong-viec";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 📌 Lấy danh sách loại công việc
  const fetchCategories = async () => {
    try {
      const res = await axios.get(API_BASE_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setCategories(res.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  // 📌 Tìm kiếm loại công việc
  const searchCategories = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/search/${search}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setCategories(res.data);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
    }
  };

  // 📌 Xóa loại công việc
  const deleteCategory = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa loại công việc này?")) {
      try {
        await axios.delete(`${API_BASE_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        fetchCategories();
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
      }
    }
  };

  // 📌 Lấy dữ liệu khi load trang
  useEffect(() => {
    fetchCategories();
  }, []);

  // 📌 Phân trang
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="manage-categories">
      <h1>Quản lý Loại Công Việc</h1>

      {/* 🔍 Ô tìm kiếm */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm loại công việc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchCategories}>Tìm kiếm</button>
      </div>

      {/* 📋 Danh sách loại công việc */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Loại Công Việc</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
           {currentItems.length > 0 ? (
              currentItems.map((category) => (
              <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.tenLoaiCongViec}</td>
              <td>
                <button onClick={() => alert("Sửa chức năng chưa làm")}>Sửa</button>
                <button onClick={() => deleteCategory(category.id)}>Xóa</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" style={{ textAlign: "center", padding: "10px", fontStyle: "italic", color: "#666" }}>
              Không có công việc nào
            </td>
          </tr>
        )}
      </tbody>

      </table>

      {/* 🔢 Phân trang */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(categories.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ManageCategories;
