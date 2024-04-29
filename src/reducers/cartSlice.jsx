

const initialCartState = {
    items: []
};

const cartSlice = (state = initialCartState, action) => {
    switch(action.type) {
        case "ADD_TO_CART": {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...newItem, quantity: 1 }],
                };
            }
        }
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        }
        default:
            return state;
    }
}; 

export const addToCart = (productData) => {
    return { type: "ADD_TO_CART", payload: productData };
};

export const removeFromCart = (productId) => {
    return { type: "REMOVE_FROM_CART", payload: { id: productId } };
};

export default cartSlice;
