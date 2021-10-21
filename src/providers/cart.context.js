import React from 'react';

export const CartContext = React.createContext({})


export function CartProvider(props) {

    const [ productsInCart, setProductsInCart ] = React.useState([]);

    // Adiciona um novo produto ao carrinho
    const addProduct = (product) => {
        console.log('Adicionando produto', product)
        if (!productsInCart.map(p => p.i).includes(product.id)) {
            const newList = productsInCart;
            newList.push(product);
            setProductsInCart(newList);
        }
    } 
    
    //Remove um produto do carrinho
    const removeProduct = (product) => {
        console.log('Removendo produto', product)
        const index = productsInCart.indexOf(product);
        if (index > -1) {
            const newList = productsInCart;
            newList.splice(index, 1);
            setProductsInCart(newList);
        }
    }

    const children = React.useMemo(() => props.children, [productsInCart])

    return (
        <CartContext.Provider value={{productsInCart, removeProduct, addProduct}}>
            {children}
        </CartContext.Provider>
    )


}