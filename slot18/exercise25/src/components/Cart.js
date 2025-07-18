import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="alert alert-info">Your cart is empty</div>
            ) : (
                <div className="row">
                    {cartItems.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">ID: {item.id}</p>
                                    <p className="card-text">Price: ${item.price}</p>
                                    <p className="card-text">Description: {item.description}</p>
                                    <p className="card-text">Catalogs: {item.catalogs.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;