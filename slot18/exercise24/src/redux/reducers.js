const initialState = {
    cart: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Kiểm tra xem sản phẩm đã tồn tại chưa
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // Nếu đã tồn tại, tăng quantity
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id 
                            ? { ...item, quantity: (item.quantity || 1) + 1 }
                            : item
                    ),
                };
            } else {
                // Nếu chưa tồn tại, thêm mới với quantity = 1
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }
            
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload 
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                ),
            };
            
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
            
        default:
            return state;
    }
};

export default Reducer;