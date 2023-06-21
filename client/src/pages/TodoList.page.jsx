import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetTodoListQuery,useDeleteTodoMutation  } from "../features/api/apiSlice.jsx";
import TodoItem from "../components/TodoItem.jsx";

import "../styles/todoList.css";
const TodoList = () => {
  const navigate = useNavigate();
const {data: todoList,isLoading,isSuccess,isError,error,}=useGetTodoListQuery({refetchOnMountOrArgChange:true})
const[deleteTodo,{isSuccess:delete_isSuccess}]=useDeleteTodoMutation()


// useEffect(() => {
//   if (delete_isSuccess){
//     getTodoList()
//   }

// }, [delete_isSuccess])

useEffect(() => {console.log(todoList);},[todoList])

if (isLoading) return <h1>LOADING...</h1>


if (isSuccess) return (
    <div className="todo-list-container">
      <div className="add-todo-btn-container">
        <button className="add-todo-btn" onClick={() => navigate("/add-todo")}>
          
          add todo
        </button>
      </div>
      <div className="todo-items-container">
        {todoList.length>0&&todoList.map((todo) => (
          <TodoItem key={todo.id} handleDelete={()=>deleteTodo(todo.id) } todoId={todo.id} text={todo.content} />
        ))}
      </div>
    </div>
  );
  
if(isError) return <h1>{error.toString()}</h1>
};

export default TodoList;
