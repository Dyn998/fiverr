import React from "react";
import { useEffect, useState } from "react";
import "./CommentSection.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch("/reviewer.json");
        const data = await response.json();
        setComments(data.content);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Không thể tải bình luận.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;
    const newCommentData = {
      id: comments.length + 1,
      avatar: "https://via.placeholder.com/50",
      tenNguoiBinhLuan: "Bạn",
      ngayBinhLuan: "Vừa xong",
      noiDung: newComment,
      response: null,
    };
    setComments([newCommentData, ...comments]);
    setNewComment("");
  };

  if (loading) return <p>Đang tải bình luận...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="comment-section">
      <h2>Bình luận</h2>

      <div className="comment-box">
        <img src="http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg" alt="Avatar" className="comment-avatar" />
        <textarea
          placeholder="Viết bình luận..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>
      <button className="comment-button" onClick={handleCommentSubmit}>
        Add Comment
      </button>

      {/* Ds bình luận */}
      {comments.length === 0 ? (
        <p>Chưa có bình luận nào.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={comment.avatar || "https://via.placeholder.com/50"} alt="Avatar" />
            <div className="comment-content">
              <div className="comment-header">
                <span className="username">{comment.tenNguoiBinhLuan}</span>
                <span className="date">{comment.ngayBinhLuan}</span>
              </div>
              <p className="text">{comment.noiDung}</p>

              {/* Hiển thị phản hồi của người bán nếu có */}
              {comment.response && (
                <div className="seller-response">
                  <img src="https://via.placeholder.com/40" alt="Seller Avatar" />
                  <div>
                    <p className="seller-name">Seller's Response</p>
                    <p className="text">{comment.response}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentSection;
