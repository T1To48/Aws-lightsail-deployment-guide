import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetTodoItemQuery,
  useEditTodoMutation,
} from "../features/api/apiSlice";
import "../styles/editItem.css";

const EditTodo = () => {
  const navigate = useNavigate();
  const { todoId } = useParams();
  const [todoText, setTodoText] = useState("");
  const {
    data: todoItem,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodoItemQuery(todoId, { refetchOnMountOrArgChange: true });
  const [editTodo] = useEditTodoMutation();
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSave = () => {
    const todoObj = {
      id: todoId,
      content: todoText,
    };
    editTodo(todoObj);
    navigate("/");
  };

  useEffect(() => {
    if (isSuccess) {
      setTodoText(todoItem.content);
    }
  }, [todoItem]);

  return (
    <div className="edit-todo-container">
      <input
        className="edit-todo-input"
        value={todoText}
        onChange={handleChange}
      />
      <button className="edit-todo-btn save-btn" onClick={handleSave}>
        save
      </button>
      <button
        className="edit-todo-btn cancel-btn"
        onClick={() => navigate("/")}
      >
        cancel
      </button>
    </div>
  );
};

export default EditTodo;
