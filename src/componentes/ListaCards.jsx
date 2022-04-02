import React from 'react'
import { Products } from '../data/products'
import Card from './Card'

function ListaCards(props) {
    return Products.map(prod => 
            <Card key={prod.id} title={prod.nome}>
                    <img class="card-img-top" src={prod.img} alt={prod.nome} />
                    <h5 class="card-title">{prod.nome}</h5>
                    <p class="card-text">{prod.desc}</p>
                    <h3>R$ {prod.preco}</h3> 
            </Card>)
}

export default ListaCards;