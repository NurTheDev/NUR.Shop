import React, {useReducer} from 'react';
import Index from "./pages/Index.jsx";
import {CartContext} from "./context/index.js";
import {cartReducer, initialState} from "./reduce/cartReducer.js";

const App = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <>
            <CartContext.Provider value={{state, dispatch}}>
                <Index/>
            </CartContext.Provider>
        </>
    );
};

export default App;
