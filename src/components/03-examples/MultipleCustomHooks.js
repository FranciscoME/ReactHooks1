import React from 'react';
import './examples.css'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter,increment,decrement,reset}=useCounter(1);

    const {loading,data,error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state)
    
    //Si hay datos en 'data' extraelo de la posicion 0
    const {author,quote}= !!data &&data[0]

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading 
                ? (
                    <div className="alert alert-info text-center">
                        Loading..
                    </div>
                )
                : (
                     <blockquote className="blockquote text-right">
                     <p className="mb-0">{quote}</p>
                     <footer className="blockquote-footer">{author}</footer>
                     </blockquote>
                  )
            }

            <button 
            className="btn btn-primary"
            onClick={()=>increment(1)}
            >Next Quote</button>

        </div>
    )
}
