import React, { useState, useCallback, useEffect } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {


    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter +1)
    // }

    const increment = useCallback((numInc) => {
        // setCounter(c => c + 1)
        setCounter(c => c + numInc)
    },
        [setCounter]
    )


    //useCallback tambien aplica en los useEffect
    useEffect(() => {
        //????
    }, [increment])

    return (
        <div>
            <h1>useCallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement
                increment={increment}
            />

        </div>
    )
}
