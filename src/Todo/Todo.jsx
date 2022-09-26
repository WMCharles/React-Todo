import React, {useState} from 'react'
import { myTodos, getNextId } from './MyTodos'

export default function Todo() {
    //initializing the array by setting the default value to myTodos array
    const [todos, setTodos] = useState(myTodos) 

    //creating a state to hold the new todos
    const [newTodoDescription, setNewTodoDescription] = useState("") 

    // Function that adds new todo
    function addTodo(event){
        event.preventDefault()

        //Create new item
        const newTodo = {
            id: getNextId(),
            description: newTodoDescription,
            completed: false
        }

        // create new todo Array
        const updatedTodos = [...todos, newTodo]

        //update the new array 
        setTodos(updatedTodos)

        console.log(updatedTodos)
    }

    function todoDelete(id){
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    function updateTodos(id, completed){
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id){
                return {...todo, completed}
            } else {
                return todo
            }
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <label>
                Description:
                <input
                    type="text"
                    value={newTodoDescription}
                    onChange={(e) => setNewTodoDescription(e.target.value)}
                />
                </label>
                <input type="submit" value="Add todo" />
            </form>
            <h2>My Todos</h2>
            <ul>
                {todos.map((todo) => (
                <li key={todo.id}>
                    <strong>{todo.description}</strong>
                    <label>
                    Completed?
                    <input
                        type="checkbox"
                        onChange={(e) => updateTodos(todo.id, e.target.checked)}
                        checked={todo.completed}
                    />
                    </label>
                    <button onClick={(e) => todoDelete(todo.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    )
}
