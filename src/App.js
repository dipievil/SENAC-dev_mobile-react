import './App.css';
import React from 'react'
import ListaCards from './componentes/ProductList'
import Menu from './componentes/Menu'
import Carousel from './componentes/Carrousel'

function App() {
  return (
    <>
      <Menu></Menu>
      <h1>Minha loja Online</h1>
      <Carousel></Carousel>
      <br></br>
      <div className="container">
        <div className="row text-primary" id="products_container">
          <ListaCards></ListaCards> 
        </div>
      </div>    
    </>
  );
}

export default App;
