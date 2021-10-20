import React from 'react';
import './card.css'


export function CardProduct(props) {
    const { product } = props;

    return (
        <div class="card-container">
            <h1 class="card-title">{product.title}, Vol. {product.volume}</h1>
            <img src={product.img} class="card-img" />
            <p class="card-price">Preço: R${product.price}</p>
            <button class="card-buy">COMPRAR</button>
        </div>
    )
}