import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coords;

    useEffect(() => {

        // window.addEventListener('mousemove', (e) => {
        //     //console.log(e)
        //     // const coors = { x: e.x, y: e.y }
        //     // console.log(coors)
        //     console.log(':D')
        // })

        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }

            setCoords({
                x: coors.x,
                y: coors.y
            })

            console.log(':D')
        }

        window.addEventListener('mousemove', mouseMove)

        //console.log("componente montado")
        return () => {
            //console.log("componente desmontado")
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>x: {x}</p>
            <p>y: {y}</p>
        </div>
    )
}
