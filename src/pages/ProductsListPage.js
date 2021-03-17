import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/ProductsListPage.css'
const products = ['car', 'bike', 'motocycle']

const ProductsListPage = () => {
    const list = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className='products'>
            <div>Lista Produktów</div>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>

    );
}

export default ProductsListPage;