import { getProducts } from "../Data/index.js";
const products = getProducts();
const initialState = {
    products: products,
};
const originalProducts = [...products]; // Store original products for reset
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_BY_CATEGORY':
            if (action.payload === 'popular') {
                return {
                    ...state,
                    products: originalProducts.sort((a, b) => b.rating - a.rating),
                };
            } else if (action.payload === 'newest') {
                return {
                    ...state,
                    products: [...state.products].filter(product=> product.isNew === true)
                };
            } else if (action.payload === 'lowToHigh') {
                return {
                    ...state,
                    products: originalProducts.sort((a, b) => a.price - b.price),
                };
            } else if (action.payload === 'highToLow') {
                return {
                    ...state,
                    products: originalProducts.sort((a, b) => b.price - a.price),
                };
            }
            return {
                ...state,
                products: products, // Reset to original products if no valid filter
            };
        case 'SEARCH_PRODUCTS':
            return {
                ...state,
                products: originalProducts.filter(product =>
                    product.name.toLowerCase().includes(action.payload.toLowerCase())
                ),
            }
        default:
            return state;
    }
};
export { initialState, productReducer };
