import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Updated import

const initialState = {
    products: [
        {
            id: '123456',
            name: 'Example Product',
            price: 9.99,
            description: 'This is an example product.',
            catalogs: ['catalog1', 'catalog2'],
        },
    ],
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));
export default store;