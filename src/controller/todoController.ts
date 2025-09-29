import {NextFunction, Request, Response} from "express"
const appError = require("../utils/appError")

const todoModel = require("../model/todoModel")

const addTodo = async (req: Request, res: Response, next: NextFunction) => {
    const {Title} = req.body
    if(!Title) throw new appError.appError(400, 'Title can not be empty')
    const todo = await todoModel.addTodo(Title);
    res.status(201).json(todo)
}

const updateToComplete = async (req: Request, res: Response) => {
    const id = req.params.Id
    if(!id) throw new appError.appError(400, "Id is required")
    const todo = await todoModel.updateToComplete(id);
    res.status(200).json(todo)
}

const deleteTodo = async (req: Request, res: Response) => {
    const id = req.params.Id
    if(!id) throw new appError.appError(400, "id is required")
    const todo = await todoModel.deleteTodo(id)
    if(!todo) throw new appError(404, "Todo doesn't exist")
    res.sendStatus(204)
}

const displayTodo = async (req: Request, res: Response) => {
    const todo = await todoModel.displayTodo()
    res.status(200).json(todo)
}

export {addTodo,updateToComplete,deleteTodo,displayTodo}