import './Card.css'
import React from 'react'

function Card(props) {
    console.log(props);
    return (
        <div class="col-6 col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                    {props.children}                    
                </div>
            </div>
        </div>
    )
}

export default Card;