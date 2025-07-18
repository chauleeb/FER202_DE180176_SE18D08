export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});

export const addToCartAsync = (product) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addToCart(product));
        }, 500); // Simulate API delay
    };
};

export const addProductAsync = (product) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addProduct(product));
        }, 500); // Simulate API delay
    };
};