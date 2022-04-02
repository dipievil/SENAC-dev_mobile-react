import './Card.css'
import React from 'react'

function Card(props) {
    return (
        <div class="col-6 col-md-4">
            <div class="card mb-3">
                <div class="card-body">
                    <img class="card-img-top" src={props.img} alt={props.nome} />
                    <h5 class="card-title">{props.nome}</h5>
                    <p class="card-text">{props.desc}</p>
                    <a href="#" class="btn btn-primary">{props.preco}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;