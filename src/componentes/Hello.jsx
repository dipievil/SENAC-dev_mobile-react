import React from 'react'

function Hello(props) {
    return ( 
        <div>
            {props.idade > 18 
                ? <h1>Hello {props.nome} {props.idade+1} </h1>
                : <h1>Hello {props.nome} </h1>
            }
        </div>
    )
}

export default Hello
