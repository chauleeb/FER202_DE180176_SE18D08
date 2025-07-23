import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Giỏ hàng</h2>
      {items.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id} style={{ marginBottom: 16 }}>
                <img src={item.image} alt={item.name} width={60} style={{ marginRight: 8 }} />
                <span>{item.name} - {item.price}₫</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, Number(e.target.value))}
                  style={{ width: 50, margin: '0 8px' }}
                />
                <button onClick={() => handleRemove(item.id)}>Xóa</button>
              </li>
            ))}
          </ul>
          <div>
            <strong>Tổng cộng: {total}₫</strong>
          </div>
          <button onClick={handleClear}>Xóa toàn bộ</button>
        </>
      )}
    </div>
  );
};

export default Cart;
