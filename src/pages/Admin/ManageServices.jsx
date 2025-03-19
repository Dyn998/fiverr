import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageServices.css";

const API_URL = "https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setServices(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách dịch vụ:", error);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc muốn xóa dịch vụ này?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      setServices(services.filter((service) => service.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa dịch vụ:", error);
    }
  };

  const filteredServices = services.filter((service) =>
    service.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="manage-services">
      <h1>Quản lý thuê công việc</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm dịch vụ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchServices}>Làm mới</button>
      </div>

      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên dịch vụ</th>
              <th>Giá</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                 <tr key={service.id}>
                 <td>{service.id}</td>
                 <td>{service.name || "Không có tên"}</td>
                 <td>{service.price || "N/A"} VND</td>
            <td>
                 <button onClick={() => alert("Chỉnh sửa chưa hỗ trợ")}>Sửa</button>
                 <button onClick={() => handleDelete(service.id)}>Xóa</button>
             </td>
            </tr>
            ))
             ) : (
            <tr>
            <td colSpan="4" className="no-data">Không có dữ liệu</td>
            </tr>
            )}
          </tbody> 
        </table>
      )}
    </div>
  );
};

export default ManageServices;
