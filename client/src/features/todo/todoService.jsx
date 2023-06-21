import { lokalStorage } from "../../utils/lokalStorage.jsx";

export const getTodoById = (id) =>
  lokalStorage("get", "todoList").filter((todo) => todo.id === id);

export const deleteTodoById = (id) => {
  const updatedTodoList = lokalStorage("get", "todoList").filter(
    (todo) => todo.id !== id
  );
  lokalStorage("set", "todoList", updatedTodoList);
  return updatedTodoList;
};
