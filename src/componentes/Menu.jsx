import React from 'react';

function Menu(){
    return (
  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand bi bi-house" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Sua Conta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Promoções</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Redes Sociais</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sobre</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" action="/" method="get">
            <div className="form-group row">
              <input className="form-control mr-sm-2" type="search" placeholder="Procure seu produto" aria-label="Search" name='S' />
              <button type="submit">Buscar</button>
            </div>
          </form>
        </div>
      </nav> 
    )
}

export default Menu;