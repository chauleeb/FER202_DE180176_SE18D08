import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAsync } from '../actions';

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Products</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">ID: {product.id}</p>
                                <p className="card-text">Price: ${product.price}</p>
                                <p className="card-text">Description: {product.description}</p>
                                <p className="card-text">Catalogs: {product.catalogs.join(', ')}</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => dispatch(addToCartAsync(product))}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;