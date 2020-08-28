import React from 'react'
import './counter.css'
import { useCounter } from '../../hooks/useCounter'


export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,reset} =useCounter(20);

    return (
        <div>
            <h1>Counter with hook: {counter}</h1>
            <hr/>

            <button className="btn btn-primary" onClick={()=>increment(5)}>+1</button>
            <button className="btn btn-primary" onClick={()=>decrement(5)}>-1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    )
}
