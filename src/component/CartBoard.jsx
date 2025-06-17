import React, {useContext} from 'react';
import CartItem from "./CartItem.jsx";
import OrderSummery from "./OrderSummery.jsx";
import {CartContext} from "../context/index.js";
const CartBoard = () => {
    const {state} = useContext(CartContext);
    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
                {state.productItems.length === 0 ? (<div className="text-center text-gray-500">
                    Your cart is empty.
                </div>) : (
                    <div className="space-y-4">
                        {state.productItems.map((item, index) => (
                            <CartItem key={index} item={item}/>
                        ))}
                    </div>
                )}
                {state.productItems.length > 0 && <OrderSummery/>}
            </div>
        </div>
    );
};

export default CartBoard;
