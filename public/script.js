//import * as React from "https://cdn.skypack.dev/react@17.0.1";
//document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

window.onload = function () {
    getProducts();
    setInterval(getProducts, 5000)
}

function getProducts() {
    console.log("Loading products...")
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const products = JSON.parse(this.responseText);
        loadProducts(products)
        //document.getElementById("produtos").innerHTML = produtos;
    }
    xhttp.open("GET", "  http://localhost:3000/produtos");
    xhttp.send();
}

function loadProducts(products) {
    console.log("Showing products...");
    products.forEach((prod) => {
        document.getElementById("produtos").innerHTML +=
            `<div class="col-6 col-md-4">
                <div class="card mb-3">
                    <div class="card-body">
                        <img class="card-img-top" src="${prod.img}" alt="É da Sonia">
                        <h5 class="card-title">${prod.nome}</h5>
                        <p class="card-text">${prod.desc}</p>
                        <a href="#" class="btn btn-primary">${"R$ " + prod.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</a>
                    </div>
                </div>
            </div>`;
    });

}
