import express from "express";
import { logRequests } from "../middlewares/loggerMiddleware.js";
import {getAll,getTodoById,addNew,editTodo,deleteTodo} from "../controllers/todoController.js"

const router=express.Router()

router.route("/").get(logRequests,getAll).post(logRequests,addNew)

router.route("/:todoId").put(logRequests,editTodo).get(logRequests,getTodoById).delete(logRequests,deleteTodo)


export default router;