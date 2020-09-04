import React from 'react'

export const ShowIncrement = React.memo( ({increment}) => {

    console.log("me ejecuté de nuevo :(")

    return (
        <div>
            <button 
            className="btn btn-primary"
            onClick={()=>{
                // increment();
                increment(5);
            }}
            >
                Incrementar
            </button>
        </div>
    )
})
