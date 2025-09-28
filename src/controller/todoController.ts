import {Request, Response} from "express"
const todoModel = require("../model/todoModel")

const addTodo = async (req: Request, res: Response) => {
    try{
        const {Title} = req.body
        if(!Title) return res.status(400).json("Title can't be empty")
        const todo = await todoModel.addTodo(Title);
        return res.status(201).json(todo)
    }
    catch(err){
        res.status(500).json("Failed to add Todo")
    }
}

const updateToComplete = async (req: Request, res: Response) => {
    try {
        const id = req.params.Id
        if(!id) return res.status(400).json("id is required")
        
        const todo = await todoModel.updateToComplete(id);
        return res.status(200).json(todo)
    }
    catch(err){
        res.status(500).json("Failed to update todo")
    }
}

const deleteTodo = async (req: Request, res: Response) => {
    try{
        const id = req.params.Id
        if(!id) return res.status(400).json("id is required")

        const todo = await todoModel.deleteTodo(id)
        if(todo) return res.sendStatus(204)
        return res.status(404).json("Todo dosen't exist")
    }
    catch(err){
        res.status(500).json("Failed to delete todo")
    }
}

const displayTodo = async (req: Request, res: Response) => {
    try {
        const todo = await todoModel.displayTodo()
        return res.status(200).json(todo)
    }
    catch(err){
        res.status(500).json("Failed to display todo list")
    }
}

export {addTodo,updateToComplete,deleteTodo,displayTodo}