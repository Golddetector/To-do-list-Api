import express,{Request, Response} from "express"
const trycatch = require("../utils/tryCatch")
const todoController = require("../controller/todoController")

const router = express.Router()

// display todo
router.get('/', trycatch.trycatch(todoController.displayTodo))

// add todo
router.post('/', trycatch.trycatch(todoController.addTodo))

// delete todo
router.delete('/:Id', trycatch.trycatch(todoController.deleteTodo))

// update todo
router.put('/:Id', trycatch.trycatch(todoController.updateToComplete))

export default router