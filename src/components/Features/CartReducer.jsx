export const totalItems = (cart) => {
    return cart.reduce((sum, product) => sum + product.cartQuantity, 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + (product.cartQuantity * product.price), 0)
}

const CartReducer = (state, action) => {
    switch (action.type) {

        case "Add":
            const exists = state.find(p => p._id === action.product._id)
            if (exists) return state
            return [...state, action.product]

        case "Remove":
            return state.filter(p => p._id != action.id)

        case "Increase":
            return state.map(p =>
                p._id === action.id && p.cartQuantity < p.quantity
                    ? { ...p, cartQuantity: p.cartQuantity + 1 }
                    : p
            );

        case "Decrease":
            return state.map(p =>
                p._id === action.id && p.cartQuantity > 1
                    ? { ...p, cartQuantity: p.cartQuantity - 1 }
                    : p
            );

        default:
            return state;
            
    }
}

export default CartReducer;