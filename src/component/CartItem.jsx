import React, {useContext} from 'react';
import {getImageUrl} from "../utility/index.js";
import {CartContext} from "../context/index.js";
const CartItem = ({item}) => {
    const { dispatch} = useContext(CartContext);
    const handleIncrement = () => {
        // Increment the quantity of the product
        dispatch({
            type: 'UPDATE_INCREMENT_QUANTITY',
            payload:{
                ...item,
            }
        })
    };
    const handleDecrement = (item) => {
        // Decrement the quantity of the product
        dispatch({
            type: 'UPDATE_DECREMENT_QUANTITY',
            payload: {
                ...item,
            }
        })
    };
    return (
        <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img src={getImageUrl(item.image)} alt="Gradient Graphic T-shirt"
                     className="h-full w-auto object-cover"/>
            </div>
            <div className="flex-grow">
                <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <span className="text-red-500 text-sm">×</span>
                </div>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">${item.price}</p>
                    <div className="flex items-center space-x-2">
                        <button onClick={()=> handleDecrement(item)} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">−
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button onClick={()=> handleIncrement(item)} className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
