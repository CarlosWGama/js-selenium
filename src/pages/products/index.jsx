import React from 'react';
import { MainLayout } from '../../layouts/main-layout';
import { CartContext, CartProvider } from '../../providers/cart.context';
import { ProductService } from '../../providers/product.service';
import { Cart } from './components';
import { CardProduct }  from './components/card';
import './styles.css'

export default function ProductsPage() {

    document.title = 'Produtos';

    //States
    const [ products, setProducts ] = React.useState([])
    const [ filter, setFilter ] = React.useState('');
    const [ toogle, setToogle ] = React.useState(false);
    const {productsInCart, addProduct, removeProduct } = React.useContext(CartContext);

    //Filter
    React.useEffect(() => {
        handleSearch()
    }, [])

    //Realiza a busca clicando no botão
    const handleSearch = () => {
        if (!filter) setProducts(ProductService.all())
        else setProducts(ProductService.filter(filter))
    }   

    //Adiciona ou remove product
    const handleProduct = React.useCallback((product) => {
        const index = productsInCart.indexOf(product);
        if (index == -1) addProduct(product);
        else removeProduct(product);
        setToogle(!toogle)
    });



    return (
            <MainLayout>
                <Cart/>
                <h1>Lista de Produtos</h1>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Termo de busca" onChange={(event)=> setFilter(event.target.value)}/>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>Buscar</button>  
                </div>

                <div id="products">
                    { products.map(p => <CardProduct key={p.id} product={p} onClick={handleProduct}/>)}
                </div>

            </MainLayout>
    )
}