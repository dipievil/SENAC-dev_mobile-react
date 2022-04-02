import React from 'react'
import produtos from '../data/produtos'
import Card from './Card'

function ListaCards(props) {
    return produtos.map(prod => 
            <Card key={prod.id} titulo={prod.nome}>
                <h3>{prod.preco}</h3>
            </Card>)
}

export default ListaCards;