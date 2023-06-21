import { Route, BrowserRouter, Routes } from "react-router-dom";
import { TodoList,AddTodo, EditTodo, } from "./pages/ExportsIndex.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<TodoList />} />
          <Route path="add-todo" element={<AddTodo />} />
          <Route path="edit-todo/:todoId" element={<EditTodo />} />
          {/* <Route path="all" element={<TodoListTest />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
