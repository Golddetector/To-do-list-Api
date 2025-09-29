import express, {Request,Response } from "express";
import todoRouter from './router/todoRouter'
import { errorHandler } from "./middleware/errorHandler";

const app = express()

app.use(express.json())

app.use('/todo', todoRouter)

app.use(errorHandler)

app.listen(3000, () => {
    console.log("server is on")
})

