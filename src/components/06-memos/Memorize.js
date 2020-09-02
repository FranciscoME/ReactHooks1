import React, { useState } from 'react';

import '../02-useEffect/effects.css'
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {


    const {counter,increment}= useCounter(10);
    const [show, setShow] = useState(true);

    

    return (
        <div>
            <h1>Counter <Small value={counter}/> </h1>
            <hr/>

            <button
             className="btn btn-primary "
             onClick={()=>increment(1)}
            >
                +1
            </button>

            
            <button
             className="btn btn-primary ml-5"
             onClick={()=>{setShow(!show)}}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
