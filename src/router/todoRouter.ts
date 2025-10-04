import express,{Request, Response} from "express"
import { trycatch } from "../utils/tryCatch"
const todoController = require("../controller/todoController")

const router = express.Router()

// display todo
router.get('/', trycatch(todoController.displayTodo))

// add todo
router.post('/', trycatch(todoController.addTodo))

// delete todo
router.delete('/:Id', trycatch(todoController.deleteTodo))

// update todo
router.put('/:Id', trycatch(todoController.updateToComplete))

export default router