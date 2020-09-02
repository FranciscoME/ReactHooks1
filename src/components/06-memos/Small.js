import React,{memo} from 'react'


//memo hace que se cargue solo si las props cambian (evita el cargo automatico inecesario)
export const Small = React.memo(({value}) => {
    console.log('me volvi a llamar :(')
    return (
        <small>
            {value}
        </small>
    )
}
)