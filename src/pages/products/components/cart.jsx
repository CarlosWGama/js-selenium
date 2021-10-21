import React from 'react';
import { CartContext } from '../../../providers/cart.context';
import CartImg from './../../../assets/images/cart.png';
import './cart.css';

export function Cart() {
    const { productsInCart } = React.useContext(CartContext);

    return (
        <div id="cart">
            <span id="cart-count">{productsInCart.length}</span>
            <img src={CartImg} id="cart-img"/>
        </div>
    )
}
