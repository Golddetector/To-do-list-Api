import express, {Request,Response } from "express";
import todoRouter from './router/todoRouter'
import { errorHandler } from "./middleware/errorHandler";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();
async function main() {
    await prisma.todo_list.create({
        data: {
            title: "wake up in the morning",
            complete: false
        }
    })
    const todos = await prisma.todo_list.findMany();
    console.log("Todos:", todos)
}


main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })

const app = express()

app.use(express.json())

app.use('/todo', todoRouter)

app.use(errorHandler)


app.listen(3000, () => {
    console.log("server is on")
})

