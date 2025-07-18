import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const quantity = item.quantity || 1;
            return total + (item.price * quantity);
        }, 0).toFixed(2);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    };

    return (
        <div className="cart">
            <h2>🛒 Shopping Cart ({getTotalItems()} items)</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. Start adding some products! 🛍️</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={`${item.id}-${index}`}>
                                <p><strong>{item.name}</strong></p>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity || 1}</p>
                                <p>Subtotal: ${((item.price * (item.quantity || 1)).toFixed(2))}</p>
                                <p>ID: {item.id}</p>
                                <p>Categories: {item.catalogs.join(', ')}</p>
                            </li>
                        ))}
                    </ul>
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: '#e8f5e8',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ color: '#27ae60', margin: 0 }}>
                            Total: ${calculateTotal()}
                        </h3>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;