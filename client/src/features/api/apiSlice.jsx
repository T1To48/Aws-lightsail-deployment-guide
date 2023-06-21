import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redux-todo-app-1usq.onrender.com/todo-storage/v1",
    // baseUrl: "http://localhost:8080/todo-storage/v1", FOR Logger Testing Doesn't work with 3rd party deloyments services
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: () => ({
        url: "/",
        headers: { method: "getAll" },
      }),
      providesTags: ["Post"],
    }),
    getTodoItem: builder.query({
      query: (todoId) => ({
        url: `/${todoId}`,
        headers: { method: `get by id, ${todoId}` },
      }),
      invalidatesTags: ["Post"],
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/",
        method: "POST",
        body: { content: newTodo },
        headers: { method: "newTodo" },
      }),
      invalidatesTags: ["Post"],
    }),
    editTodo: builder.mutation({
      query: (updatedTodo) => ({
        url: `/${updatedTodo.id}`,
        method: "PUT",
        body: { content: updatedTodo.content },
        headers: { method: `edit Todo with id, ${updatedTodo.id}` },
      }),
      invalidatesTags: ["Post"],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/${todoId}`,
        method: "DELETE",
        headers: { method: `delete todo with id ${todoId}` },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useGetTodoItemQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;
