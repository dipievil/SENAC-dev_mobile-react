import React from 'react'
import products from '../data/products'
import Card from './Card'

function ListaCards(props) {
    return products.map(prod => 
            <Card key={prod.id} titulo={prod.nome}>
                <h3>{prod.preco}</h3>
            </Card>)
}

export default ListaCards;