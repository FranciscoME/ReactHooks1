import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name3: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        // console.log("hey")

    }, [])


    useEffect(() => {
        // console.log("Form state cambió")
    }, [formState])

    useEffect(() => {
        // console.log("email cambió")
    }, [email])

    const onHandleInputChange = ({ target }) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>UseEffect</h1>
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

            {(name==="123") && <Message />}

        </>
    )
}
