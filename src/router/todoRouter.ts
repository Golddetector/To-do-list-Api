import express,{Request, Response} from "express"
import { todo } from "node:test"
const todoController = require("../controller/todoController")

const router = express.Router()

// display todo
router.get('/', todoController.displayTodo)

// add todo
router.post('/', todoController.addTodo)

// delete todo
router.delete('/:Id', todoController.deleteTodo)

// update todo
router.put('/:Id', todoController.updateToComplete)

export default router