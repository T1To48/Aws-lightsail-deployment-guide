import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAddTodoMutation } from "../features/api/apiSlice.jsx";

const AddTodoItem = () => {
  const navigate = useNavigate();
  const [todoText, setTodoText] = useState("");
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const updateTodoList = () => {
    addTodo(todoText);

    navigate("/");
  };

  return (
    <div className="edit-todo-container">
      <input
        className="edit-todo-input"
        type="text"
        value={todoText}
        onChange={handleChange}
      />
      <button className="edit-todo-btn save-btn" onClick={updateTodoList}>
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

export default AddTodoItem;
