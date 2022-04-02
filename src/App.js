import './App.css';
import React from 'react'
import Hello from './componentes/Hello'
import HiMessage from './componentes/HiMessage'
import Card from './componentes/Card'
import ListaCards from './componentes/ListaCards'

function App() {
  return (
    <>
      <Hello nome="Fulano" idade={30}></Hello>
      <HiMessage nome="Sicrano"></HiMessage>
      <Card titulo="Card">
        <h3>R$ 30,00</h3>
        <h5>R$ 20,00</h5>
      </Card> 
      <ListaCards></ListaCards>     
    </>
  );
}

export default App;
