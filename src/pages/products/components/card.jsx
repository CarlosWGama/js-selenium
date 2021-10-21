import React from 'react';
import { CartContext } from '../../../providers/cart.context';
import './card.css'


function CardProductComponent(props) {
    const { product } = props;

    const { productsInCart } = React.useContext(CartContext);

    return (
        <div class="card-container">
            <h1 class="card-title">{product.title}, Vol. {product.volume}</h1>
            <img src={product.img} class="card-img" />
            <p class="card-price">Preço: R${product.price}</p>
            { productsInCart.indexOf(product) == -1 ?
                <button class="card-buy" onClick={() => props.onClick(product)}>COMPRAR</button>:
                <button class="card-remove" onClick={() => props.onClick(product)}>REMOVER</button>
            }
        </div>
    )
}

export const CardProduct = React.memo(CardProductComponent);