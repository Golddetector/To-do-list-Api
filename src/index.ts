import express, {Request,Response } from "express";
import todoRouter from './router/todoRouter'

const app = express()

app.use(express.json())
app.use('/todo', todoRouter)

app.listen(3000, () => {
    console.log("server is on")
})