import React, { useEffect, useState, useCallback } from "react";
import "./ManageUsers.css";

const API_BASE_URL = "https://fiverrnew.cybersoft.edu.vn/api/users";
const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE3LzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1ODA2NzIwMDAwMCIsIm5iZiI6MTczMDMwNzYwMCwiZXhwIjoxNzU4MjE0ODAwfQ.TzrLszeeY24o0by8WqrROo5zQHGAGIxLbPg3RUA4MFA";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Lấy headers chuẩn để gọi API
  const getHeaders = useCallback(() => ({
    "Content-Type": "application/json",
    tokenCybersoft: TOKEN_CYBERSOFT,
  }), []);

  // Hàm fetch danh sách người dùng
  const fetchUsers = useCallback(async (pageNumber = 1) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/phan-trang-tim-kiem?page=${pageNumber}`, {
        headers: getHeaders(),
      });

      if (!response.ok) throw new Error("Lỗi khi tải dữ liệu");

      const data = await response.json();
      setUsers(data.items || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách người dùng:", error);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, [getHeaders]);

  // Hàm tìm kiếm người dùng
  const handleSearch = useCallback(async () => {
    if (!searchTerm.trim()) {
      fetchUsers();
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/search/${searchTerm}`, {
        headers: getHeaders(),
      });

      if (!response.ok) throw new Error("Lỗi khi tìm kiếm");

      const data = await response.json();
      setUsers(data || []);
      setPage(1);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm người dùng:", error);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, fetchUsers, getHeaders]);

  // Hàm xóa người dùng
  const handleDelete = useCallback(async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) return;

    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
      });

      if (!response.ok) throw new Error("Lỗi khi xóa người dùng");

      fetchUsers(page);
    } catch (error) {
      console.error("Lỗi khi xóa người dùng:", error);
    }
  }, [fetchUsers, page, getHeaders]);

  // Xử lý chuyển trang
  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchUsers(newPage);
  };

  // Lấy danh sách người dùng khi component mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="manage-users">
      <h1>Quản lý Người Dùng</h1>

      {/* Ô tìm kiếm */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Nhập tên người dùng"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={isLoading}
        />
        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Đang tìm..." : "Tìm kiếm"}
        </button>
      </div>

      {/* Bảng danh sách người dùng */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="5">Đang tải...</td>
            </tr>
          ) : users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name || "N/A"}</td>
                <td>{user.email || "N/A"}</td>
                <td>{user.role || "N/A"}</td>
                <td>
                  <button disabled={isLoading}>Sửa</button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    disabled={isLoading}
                  >
                    ❌ Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Không có người dùng nào</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={page === 1 || isLoading}
            onClick={() => handlePageChange(page - 1)}
          >
            &lt; Trước
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
              disabled={isLoading}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages || isLoading}
            onClick={() => handlePageChange(page + 1)}
          >
            Sau &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
