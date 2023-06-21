import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/todoItem.css";
const TodoItem = ({ text, todoId, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <div className="todo-item-container">
      <div className="todo-item-content">{text}</div>

      <div className="todo-item-btns-container">
        <button
          className="todo-item-edit-btn"
          onClick={() => navigate(`/edit-todo/${todoId}`)}
        >
          edit
        </button>
        <button className="todo-item-delete-btn" onClick={handleDelete}>
          delete{" "}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
