
interface Todo {
    Id: number,
    Title: string,
    Complete: boolean
}

let Todo_list: Todo[] = []


let id_number: number = 1;
// add a todo list
const addTodo = (title: string) => {
    const todo = {Id: id_number++, Title: title, Complete: false}
    Todo_list.push(todo)
    return todo;
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