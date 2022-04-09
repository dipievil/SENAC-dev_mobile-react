import React from 'react'
import { Products } from '../data/products'
import Card from './ProductCard'
import LazyLoad from "react-lazyload"

function importAll(r) {
	let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../res', false));

function loadImage(imageName){
        const imgUrl = images[imageName]
        return imgUrl;
}

function ListProducts(props) {
    return Products.map(prod => {           
            return (
            <Card key={prod.id} title={prod.nome}>
                    <LazyLoad><img className="card-img-top" src={loadImage(prod.img)} alt={prod.nome} /></LazyLoad>
                    <h5 className="card-title">{prod.nome}</h5>
                    <p className="card-text text-left">{prod.desc}</p>
                    <p className="card-text font-italic text-right">R$ {prod.preco}</p> 
            </Card>)
            } )
    }

export default ListProducts;