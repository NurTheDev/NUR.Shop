import {getProducts} from "../Data/index.js";
const initialState = {
    productItems: []
}
const products = getProducts();
const cartReducer = (state = {productItems: []}, action) => {
    const selectedProduct = products.find(product => product.id === action.payload.id);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                productItems: [...state.productItems, {
                    ...action.payload,
                    stock: parseInt(action.payload.stock) -1 < 0 ? 0 : parseInt(action.payload.stock) - 1,
                }
                ]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                productItems: state.productItems.filter(item => item.id !== action.payload.id)
            }
        case 'UPDATE_INCREMENT_QUANTITY':

            return {
                ...state,
                productItems: state.productItems.map(product => product.id === action.payload.id ? {
                    ...product,
                    stock: parseInt(action.payload.stock) -1 <= 0 ? 0 : parseInt(action.payload.stock) - 1,
                    quantity: parseInt(action.payload.quantity) + 1 > parseInt(selectedProduct.stock) ? parseInt(selectedProduct.stock) : parseInt(action.payload.quantity) + 1,
                } : product),
            }
        case 'UPDATE_DECREMENT_QUANTITY':
            return {
                ...state,
                productItems: state.productItems.map(item => item.id === action.payload.id ? {
                    ...item,
                    stock: parseInt(action.payload.stock) +1 > parseInt(selectedProduct.stock) ? parseInt(selectedProduct.stock) : parseInt(action.payload.stock) + 1,
                    quantity: parseInt(action.payload.quantity) - 1 <= 1 ? 1 : parseInt(action.payload.quantity) - 1

                } : item)
            }
        default:
            return state
    }
}
export {initialState, cartReducer};
