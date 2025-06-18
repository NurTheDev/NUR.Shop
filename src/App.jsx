import React, {useReducer} from 'react';
import Index from "./pages/Index.jsx";
import {CartContext, ProductContext} from "./context/index.js";
import {cartReducer, initialState} from "./reduce/cartReducer.js";
import {productReducer, initialState as productInitialState} from "./reduce/productReducer.js";
const App = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [productState, productDispatch] = useReducer(productReducer, productInitialState);
    return (
        <>
            <ProductContext.Provider value={{productState, productDispatch}}>
            <CartContext.Provider value={{state, dispatch}}>
                <Index/>
            </CartContext.Provider>
            </ProductContext.Provider>
        </>
    );
};

export default App;
