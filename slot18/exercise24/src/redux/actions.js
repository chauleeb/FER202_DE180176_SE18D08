export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const updateCartItem = (id) => ({
    type: 'UPDATE_CART_ITEM',
    payload: id,
});

export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});