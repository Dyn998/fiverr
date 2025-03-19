import React from "react";
import "./AddAdminForm.css";
import { useNavigate  } from "react-router-dom";

const AddAdminForm = () => {
  const navigate = useNavigate();
  return (
    <div className="add-admin-container">
      <h2>THÊM QUẢN TRỊ VIÊN</h2>
      <div className="form_group">
        <div className="form_field">
          <label>Tên</label>
          <input type="text" />
        </div>
        <div className="form_field">
          <label>Email</label>
          <input type="text" />
        </div>
      </div>

      <div className="form_group">
        <div className="form_field">
          <label>Tài khoản</label>
          <input type="text" />
        </div>
        <div className="form_field">
          <label>Số điện thoại</label>
          <input type="text" />
        </div>
      </div>

      <div className="form_group">
        <div className="form_field full_width">
          <label>Mật khẩu</label>
          <input type="password" />
        </div>
      </div>

      <div className="button_group">
        <button className="btn_add">Thêm</button>
        <button className="btn_cancel" onClick={() => navigate("/Admin")}  >Hủy</button>
      </div>
    </div>
  );
};

export default AddAdminForm;
