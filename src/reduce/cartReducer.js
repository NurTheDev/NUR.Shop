const initialState ={
    productItems: []
}
const cartReducer = (state = {productItems: []}, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            console.log("Adding product to cart:", action.payload);
            return {
                productItems: [...state.productItems, action.payload]
            }
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                productItems: state.productItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}
export {initialState, cartReducer};
