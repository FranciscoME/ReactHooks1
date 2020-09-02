import React, { useLayoutEffect,useState,useRef } from 'react';
import './layout.css'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state)

    //Si hay datos en 'data' extraelo de la posicion 0
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxsize, setBoxsize] = useState({});

    useLayoutEffect(() => {

        setBoxsize(pTag.current.getBoundingClientRect());
    }, [quote])


    return (
        <div>
            <h1>Layout effect</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p 
                className="mb-0"
                ref={pTag}
                >{quote}</p>

            </blockquote>

            <pre>
                {JSON.stringify(boxsize,null,3)}
            </pre>


            <button
                className="btn btn-primary"
                onClick={() => increment(1)}
            >Next Quote</button>

        </div>
    )
}
