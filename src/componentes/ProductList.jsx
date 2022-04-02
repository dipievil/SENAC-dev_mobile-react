import React from 'react'
import { Products } from '../data/products'
import Card from './ProductCard'

function ListProducts(props) {
    return Products.map(prod => 
            <Card key={prod.id} title={prod.nome}>
                    <img className="card-img-top" src={prod.img} alt={prod.nome} />
                    <h5 className="card-title">{prod.nome}</h5>
                    <p className="card-text text-left">{prod.desc}</p>
                    <p className="card-text font-italic text-right">R$ {prod.preco}</p> 
            </Card>)
}

export default ListProducts;