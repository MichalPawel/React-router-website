import React from 'react';
import Product from '../components/Product'
const ProductPage = ({ match }) => {
    return (
        <>
            <div>Product Page</div>
            <Product id={match.params.id} />
        </>
    );
}

export default ProductPage;