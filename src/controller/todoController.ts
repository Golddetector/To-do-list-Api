import {NextFunction, Request, Response} from "express"
import { PrismaClient } from "../generated/prisma";
import { appError } from "../utils/appError"

const prisma = new PrismaClient();

const addTodo = async (req: Request, res: Response, next: NextFunction) => {
    const {Title} = req.body
    if(!Title) throw new appError(400, 'Title can not be empty')
    const todo = await prisma.todo_list.create({data: {title: Title}});
    res.status(201).json(todo)
}

const updateToComplete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.Id)
    if(!id) throw new appError(400, "Id is required")
    const todo = await prisma.todo_list.update({where: {id: id}, data: {complete: true}});
    res.status(200).json(todo)
}

const deleteTodo = async (req: Request, res: Response) => {
    const id = parseInt(req.params.Id)
    if(!id) throw new appError(400, "id is required")
    const todo = await prisma.todo_list.delete({where: {id: id}})
    res.sendStatus(204)
}

const displayTodo = async (req: Request, res: Response) => {
    const todo = await prisma.todo_list.findMany()
    res.status(200).json(todo)
}

export {addTodo,updateToComplete,deleteTodo,displayTodo}