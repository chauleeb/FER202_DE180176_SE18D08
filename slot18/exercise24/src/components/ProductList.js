import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCartItem, removeFromCart } from '../redux/actions';

const products = [
    {
        id: '123456',
        name: 'Example Product',
        price: 9.99,
        description: 'This is an example product.',
        catalogs: ['catalog1', 'catalog2'],
    },
    {
        id: '234567',
        name: 'Wireless Headphones',
        price: 79.99,
        description: 'High-quality wireless headphones with noise cancellation.',
        catalogs: ['electronics', 'audio'],
    },
    {
        id: '345678',
        name: 'Smart Watch',
        price: 199.99,
        description: 'Fitness tracker with heart rate monitor and GPS.',
        catalogs: ['electronics', 'wearables'],
    },
    {
        id: '456789',
        name: 'Coffee Maker',
        price: 89.99,
        description: 'Automatic drip coffee maker with programmable timer.',
        catalogs: ['kitchen', 'appliances'],
    },
];

const ProductList = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleUpdateCart = (productId) => {
        dispatch(updateCartItem(productId));
    };

    const handleDeleteFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <div>
                        <p>ID: {product.id}</p>
                        <p>Name: {product.name}</p>
                        <p>Price: ${product.price}</p>
                        <p>Catalogs: {product.catalogs.join(', ')}</p>
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        <button onClick={() => handleUpdateCart(product.id)}>Update to Cart</button>
                        <button onClick={() => handleDeleteFromCart(product.id)}>Delete from Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;