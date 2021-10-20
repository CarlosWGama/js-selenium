import React from 'react';
import CartImg from './../../../assets/images/cart.png';
import './cart.css';

export function Cart() {
    const total = 0;
    return (
        <div id="cart">
            <span>{total}</span>
            <img src={CartImg} id="cart-img"/>
        </div>
    )
}