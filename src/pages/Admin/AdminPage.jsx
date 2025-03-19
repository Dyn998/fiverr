import React, { useState } from "react";
import "./AdminPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const AdminPage = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: "user1", image: "🖼", description: "...", role: "User", group: "GP01" },
    { id: 2, name: "admin1", image: "🖼", description: "...", role: "Admin", group: "GP02" },
    { id: 3, name: "user2", image: "🖼", description: "...", role: "User", group: "GP03" },
    { id: 4, name: "admin2", image: "🖼", description: "...", role: "Admin", group: "GP04" },
    { id: 5, name: "user3", image: "🖼", description: "...", role: "User", group: "GP05" },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [editedValues, setEditedValues] = useState({ name: "", role: "", group: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    if (currentUsers.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditedValues({ name: user.name, role: user.role, group: user.group });
  };

  const handleSave = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: editedValues.name, role: editedValues.role, group: editedValues.group } : user
      )
    );
    setEditingUser(null);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setEditedValues({ name: "", role: "", group: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h3>
          Dashboard <FaBars className="menu-icon" style={{ marginLeft: "30px" }} />
        </h3>
        <ul>
          <li onClick={() => navigate("/admin/users")}>Quản lý người dùng</li>
          <li onClick={() => navigate("/admin/jobs")}>Quản lý công việc</li>
          <li onClick={() => navigate("/admin/categories")}>Quản lý loại công việc</li>
          <li onClick={() => navigate("/admin/services")}>Quản lý dịch vụ</li>
        </ul>
      </aside>
      <main className="content">
        <header className="header">
          <input type="text" placeholder="Nhập tài khoản hoặc tên người dùng" />
          <button>Tìm</button>
          <div className="admin-menu">
            <span>Admin</span>
            <div className="dropdown">
              <button>⚙</button>
              <ul>
                <li>Cập nhật thông tin</li>
                <li>Đăng xuất</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="user-list">
          <Link to="/admin/add" className="admin-link">
            <h3>Thêm quản trị viên </h3>
          </Link>
          <table>
            <thead>
              <tr>
                <th>Mã Phim</th>
                <th>Tên Phim</th>
                <th>Hình Ảnh</th>
                <th>Mô Tả</th>
                <th>Role</th>
                <th>Mã Nhóm</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {editingUser === user.id ? (
                      <input
                        type="text"
                        name="name"
                        value={editedValues.name}
                        onChange={handleChange}
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td>{user.image}</td>
                  <td>{user.description}</td>
                  <td>
                    {editingUser === user.id ? (
                      <input
                        type="text"
                        name="role"
                        value={editedValues.role}
                        onChange={handleChange}
                      />
                    ) : (
                      user.role
                    )}
                  </td>
                  <td>
                    {editingUser === user.id ? (
                      <input
                        type="text"
                        name="group"
                        value={editedValues.group}
                        onChange={handleChange}
                      />
                    ) : (
                      user.group
                    )}
                  </td>
                  <td>
                    <button>Xem thông tin chi tiết</button>
                    {editingUser === user.id ? (
                      <>
                        <button className="save" onClick={() => handleSave(user.id)}>Lưu</button>
                        <button className="cancel" onClick={handleCancel}>Hủy</button>
                      </>
                    ) : (
                      <button onClick={() => handleEdit(user)}>Sửa</button>
                    )}
                    <button onClick={() => handleDelete(user.id)}>❌</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={i + 1 === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPage;