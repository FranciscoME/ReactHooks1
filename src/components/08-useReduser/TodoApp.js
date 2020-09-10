import React, { useReducer, useEffect } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

import { TodoList } from './TodoList'
import {TodoAdd} from './TodoAdd';



const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

 
    const handleDelete = (todoId) => {

        //crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        }
    
        //dispatch
        dispatch(action);
    }
    
    
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo=(newTodo)=>{
        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    Todos

                    {/* TodoList, todos */}
                    <TodoList
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />


                </div>

                <div className="5">
                  
                <TodoAdd
                handleAddTodo={handleAddTodo}

                />


                </div>

            </div>


        </div>
    )
}
