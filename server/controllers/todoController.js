import asyncHandler from "../middlewares/asyncHandler.js"
import Todo from "../models/todoModel.js"

export const addNew=asyncHandler(async(req,res,next)=>{
    const newTodo=await Todo.create(req.body);
    if (!newTodo){
       return   next(new Error("failed to add todo to the list"))
    }
    else{
        res.status(200).json({
            success:true,

        })
    }
})

export const getAll=asyncHandler(async(req,res,next)=>{
    const allTodos=await Todo.find({});
    if(!allTodos||allTodos.length<1){
       return  next(new Error("Todos list is empty"))

    }
    else{
        res.status(200).json(allTodos)
    }
})
export const getTodoById=asyncHandler(async(req,res,next)=>{
    const {todoId}=req.params;
    const todoItem=await Todo.findById(todoId);
    if(!todoItem)return next(new Error(`todoItem  with the id ${todoId}, not found!`))
    res.status(200).json(todoItem)
})

export const editTodo=asyncHandler(async(req,res,next)=>{
    const {todoId}=req.params;
    const todoChange=req.body;
    const updateTodo=await Todo.findByIdAndUpdate(todoId,todoChange,{runValidators:true,new:true});
   
    if(!updateTodo){
       return  next(new Error(`error editing the todo withn id Number ${todoId}`))
    }
    else{
        res.status(200).json({
            success:true,
            data:updateTodo
        })
    }
})

export const deleteTodo=asyncHandler(async(req,res,next)=>{
    const {todoId}=req.params;
    const deleteTodo=await Todo.findOneAndDelete({_id:todoId},{new:true})
if(!deleteTodo){
    return next(new Error(`failed deleting todo with id ${todoId}`))
}

})
