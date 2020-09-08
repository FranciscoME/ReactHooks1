import React, { useReducer, useEffect } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'



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

    const [formValues, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])

    const { description } = formValues;

    console.log(description)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();


    }


    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    Todos

                    <ul className='list-group list-group-flush'>
                        {todos.map((todo, index) => (
                            <li
                                key={todo.id}
                                className='list-group-item'
                            >
                                <p className="text-center complete">{index + 1}. {todo.desc}</p>
                                <button className="btn btn-danger">Borrar</button>
                            </li>

                        ))}
                    </ul>

                </div>

                <div className="5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <form
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="description"
                            placeholder="aprender.."
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-ouline-primary mt-1 btn-block"
                        >
                            Agregar
                            </button>


                    </form>


                </div>

            </div>


        </div>
    )
}