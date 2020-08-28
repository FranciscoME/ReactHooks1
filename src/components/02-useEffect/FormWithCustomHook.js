import React, { useEffect } from 'react'
import './effects.css'
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    //                 nombre en el archivo de la función        
    const [formValues, onHandleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues;


    useEffect(() => {
        console.log("email cambió")
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Jose luis"
                    autoComplete="off"
                    value={name}
                    onChange={onHandleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    autoComplete="off"
                    placeholder="micorreo@gmail.com"
                    value={email}
                    onChange={onHandleInputChange}
                />
            </div>


            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="off"
                    placeholder="***"
                    value={password}
                    onChange={onHandleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
