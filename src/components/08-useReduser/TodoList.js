import React from 'react'
import { TodoListItem } from './TodoListItem';





export const TodoList = ({todos,handleDelete,handleToggle}) => {

   
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, index) => (
                /*TodoListItem,todo,index, handleDelete,handleToggle*/
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    index={index}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))}
        </ul>
    )
}


