
import React from 'react'

function Card(props) {
    console.log(props);
    return (
        <div className="col-6 col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    {props.children}                    
                </div>
            </div>
        </div>
    )
}

export default Card;