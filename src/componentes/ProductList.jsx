import React, {useState, useEffect} from 'react'
import Card from './ProductCard'
import LazyLoad from "react-lazyload"
import Api from '../services/api'

function importAll(r) {
	let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

function filterProducts (products, query){
        if (!query) {
            return products;
        }
        
        return products.filter((product) => {
            const productName = product.nome.toLowerCase();
            return productName.includes(query.toLowerCase());            
        });
    };


function loadImage(imageName){ 
        const images = importAll(require.context('../res', false));        
        const imgUrl = images[imageName]
        return imgUrl;
}

function ListProducts(props) {

        const { search } = window.location;
        const query = new URLSearchParams(search).get('S');

        const [Products, setProdutos] = useState([]);

        useEffect(() => {
                Api.get("http://localhost:4200/products")
                .then((response) => setProdutos(response.data))
                .catch((err) => console.log(err))    
        },[])

        const filteredProducts = filterProducts(Products, query);   

    return filteredProducts.map(prod => {           
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