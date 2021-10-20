import React from 'react';
import { MainLayout } from '../../layouts/main-layout';
import { ProductService } from '../services/product.service';
import { Cart } from './components';
import { CardProduct }  from './components/card';
import './styles.css'

export default function ProductsPage() {

    document.title = 'Produtos';

    //States
    const [ products, setProducts ] = React.useState([])
    const [ filter, setFilter ] = React.useState('');

    //Filter
    React.useEffect(() => {
        if (!filter) setProducts(ProductService.all())
        else setProducts(ProductService.filter(filter))
    }, [filter])

    return (
        <MainLayout>
            <Cart/>
            <h1>Lista de Produtos</h1>
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Termo de busca" onChange={(event)=> setFilter(event.target.value)}/>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>  
            </div>

            <div id="products">
                { products.map(p => <CardProduct key={p.id} product={p}/>)}
                
            </div>

        </MainLayout>
    )
}