class Todo{
    static num = 1
    constructor(id,description){
        this.id = Todo.num++
        this.description = description
    }


    getTodo(){
        return{id:this.id,description:this.description}
    }

    setDescription(newDescription){
        this.newDescription = newDescription
    }
}

function TodoList(){
    let todos = []

    function addTodo(desc){
        todos.push(new Todo(desc))
        return todos.length
    }
    function removeTodo(removeId){
        return todos = todos.filter(a => a !== removeId)
    }
    function findTodo(searchId){
        return todos.find(a => a === searchId)
    }
    function getTodos(){
        return todos
    }

    return {
        addTodo,removeTodo,findTodo,getTodos
    }
}

const {addTodo,removeTodo,findTodo,getTodos}=TodoList()