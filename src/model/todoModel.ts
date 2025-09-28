
interface Todo {
    Id: number,
    Title: string,
    Complete: boolean
}

let Todo_list: Todo[] = []


let id_number: number = 1;
// add a todo list
const addTodo = (title: string) => {
    const newTodo = {Id: id_number++, Title: title, Complete: false}
    const oldTodo = Todo_list.find(todo => todo.Title === title)
    if(oldTodo) return "There already exists a Todo with the samae title"
    Todo_list.push(newTodo)
    return newTodo;
}

// to complete the todo list
const updateToComplete = (id: number) => {
    const todo = Todo_list.find(todo => todo.Id === Number(id))
    if(todo){
        todo.Complete = true
        return todo
    }
    return "Todo does not exist"
}

// delete todo list
const deleteTodo = (id: number) => {
    const todoIndex = Todo_list.findIndex(todo => todo.Id === Number(id))
    if(todoIndex != -1){
        Todo_list.splice(todoIndex, 1)
        return true
    }
    return false
}

// display todo list
const displayTodo = () => {
    return Todo_list
}

export {addTodo, updateToComplete, deleteTodo, displayTodo}